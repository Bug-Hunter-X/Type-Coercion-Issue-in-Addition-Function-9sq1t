# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in JavaScript related to type coercion during addition.  The function `foo` is designed to add two numbers, but it doesn't explicitly handle type checking, leading to potential unexpected results if non-numeric values are passed as arguments.  The solution demonstrates how to explicitly handle these cases for robust code.

## Bug Description

The `foo` function adds two numbers. However, JavaScript's loose type system can cause unexpected behavior if you pass non-numeric values.  For example, adding a number to a string will result in string concatenation instead of arithmetic addition.  The initial implementation lacks robust type checking to prevent this issue.

## Solution

The solution includes explicit type checking using `typeof` to ensure both inputs are numbers before performing the addition.  If either input is not a number, it returns an error message or handles the situation appropriately.