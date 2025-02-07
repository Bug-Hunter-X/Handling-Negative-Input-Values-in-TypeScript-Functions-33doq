# Handling Negative Input Values in TypeScript

This repository demonstrates a common error in TypeScript: not handling negative input values in functions.  The `bug.ts` file shows a function that doesn't handle negative input, leading to unexpected behavior or errors.  The `bugSolution.ts` file provides an improved version with error handling to prevent these issues.

## Bug
The original `printNumbers` function doesn't explicitly check for negative input values.  This could lead to an infinite loop or other unexpected behavior.

## Solution
The improved `printNumbersImproved` function adds a check to ensure that the input `n` is a non-negative number. If `n` is negative, it throws an error, providing clear feedback to the user.

This highlights the importance of robust input validation in TypeScript to ensure the reliability and stability of your applications.