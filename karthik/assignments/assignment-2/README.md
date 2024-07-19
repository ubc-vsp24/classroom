# Assignment 2

## Introduction

This assignment is a continuation from Assignment 1.

In this assignment, you will make the web app responsive. That is, the app will be optimized for viewing across multiple devices and screen sizes. For this assignment, and some future ones, you will use the [`PhotoGalleryLib`](PhotoGalleryLib.js) library provided by us, which includes a lot of helpful functions (this file will be at `public/libs/` folder in your repository already). The documentation and some examples of how to use this library can be found [here](PhotoGalleryLib.md).

## Tasks

1. All you need to do for this task is print *to the javascript browser console* the size of the screen ("small", "medium", or "large") whenever it changes. (Hint: Look at `PhotoGalleryLib.onSizeClassChange`)
2. Remove the hardcoded table of images in your HTML file. We will dynamically generate it using JavaScript in this task, and add it to the DOM. Whenever the screen size changes (ex, from large to medium), the following should happen:
    - A) Delete the table of images from the DOM
    - B) Generate a new table of images for the current screen size (Hint: Look at `PhotoGalleryLib.generateGrid`)
    - C) Insert this new table into the DOM

## Marking
1. Task 1: 6 Points
2. Task 2:
    1. A: 3 Points
    2. B: 3 Points
    3. C: 3 Points


## Submission Instructions

- Create a branch, and name it appropriately (eg. `assignment-2`)
- Make sure to push your changes to that branch before noon (11:59 AM) on the date of the assignment deadline (**July 28, 2022 11:59 PM**).
