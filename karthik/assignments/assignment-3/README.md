# Assignment 3

## Introduction

This assignment is a continuation of Assignment 2.

In this assignment, you'll implement a presentation mode that should be opened when you click on an image. You will implement the next and previous buttons in the presentation mode to switch through various images. Finally, you'll implement an automatic slideshow, which will switch through images in the presentation mode after a set period of time.

The presentation mode will be implemented using a modal window. You will use [PhotoGalleryLib](PhotoGalleryLib.js) again for this assignment. The documentation and some examples of how to use this library can be found [here](PhotoGalleryLib.md).

## Tasks

1. The presentation modal should open up when an image is clicked. The clicked image should be shown in the presentation modal. You don't need to implement the 3 buttons in the modal for this task: close, previous, next. (Hint: Look at `PhotoGalleryLib.createModal`, `PhotoGalleryLib.addImageClickHandlers`, `PhotoGalleryLib.openPresentationModal`, and `PhotoGalleryLib.setModalImgSrc` functions)
2. Add click handlers for the 3 buttons in the modal, and make them functional. (Hint: Look at `PhotoGalleryLib.initModal`)
3. You will implement a slideshow in this task, which will start the presentation mode, and automatically switch through the images in 1 second intervals.
    - Add a "Start Slideshow" button in the HTML which will be the entry point for your slideshow code.
    - Implement a click handler for this button, which opens up the presentation mode, and uses JavaScript timers to periodically switch through the images.
    
## Marking

    1. Task 1: 5 Points
    2. Task 2: 5 Points
    3. Task 3: 5 Points


## Submission Instructions

- Create a branch, and name it appropriately (eg. `assignment-3`)
- Make sure to push your changes to that branch before midnight (11:59 PM) on the date of the assignment deadline (**July 30, 2024 11:59 PM**).
