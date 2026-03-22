/**
 * @file The treesitter for GCT, General Composite Tags.
 * @author CypDasHuhn <Martinfischer533@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
module.exports = grammar({
  name: "gct",
  rules: {
    source_file: ($) => repeat1($.element),
    element: ($) =>
      choice(
        $.tag_declaration,
        $.composite_declaration,
        $.attribute_decleration,
      ),
    identifier: (_) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    tag_declaration: ($) => seq("tag", $.identifier),
    composite_declaration: ($) =>
      seq(
        "composite",
        $.identifier,
        "=",
        repeat1(choice($.tag_reference, $.attribute_reference)),
      ),
    tag_reference: (_) => /\#[a-zA-Z_][a-zA-Z0-9_]*/,

    // region Attributes
    attribute_decleration: ($) => seq("attribute", $.identifier, $.type),

    attribute_reference: ($) => seq(/\@[a-zA-Z_][a-zA-Z0-9_]*/, "=", $.value),

    type: (_) =>
      choice("number", "percentage", "text", "date", "time", "datetime"),
    value: ($) =>
      choice($.datetime, $.date, $.time, $.percentage, $.number, $.text),

    number: (_) => /[0-9]+(\.[0-9]+)?/,
    percentage: (_) => /[0-9]+(\.[0-9]+)?%/,
    text: (_) => choice(/[a-zA-Z0-9_]+/, /"[^"]*"/),
    date: (_) => /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
    time: (_) => /[0-9]{2}:[0-9]{2}(:[0-9]{2})?/,
    datetime: (_) => /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2})?/,
    // endregion
  },
});
