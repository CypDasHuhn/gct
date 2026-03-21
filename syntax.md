# Syntax ideas

## Basic example

```gct
tag sports
tag personal
tag home 

composite football = sports personal
```

## Multi Decleration

```gct
tag sports, personal, work
```

Only works for plain-tags, since they dont need value assignments

## Comments

```gct
#This is a line comment

###
This is a
block comment ###
```

## Attributes

Attributes are typed key value pairs.

### Basic

```gct
attribute intensity number 
# usage: @intensity=5 ; @intensity=5.5

attribute score percentage
# usage: @score=50%

attribute name text
# usage: @name=Ryan ; @name="Ryan Reynolds"

attribute at date
# usage: @at=25-02-20

attribute on time
# usage: @at=16:30:00

attribute met datetime
# usage: @met=25-02-20T16:30:00
```

### Constraints

```gct
attribute intensity number constraints is-positive is-integer
attribute options text constraints regex="left|right|top"
```
