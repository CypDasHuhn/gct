import XCTest
import SwiftTreeSitter
import TreeSitterTreeSitterGct

final class TreeSitterTreeSitterGctTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_tree_sitter_gct())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading TreeSitterGct grammar")
    }
}
