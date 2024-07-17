# Assignment 1

## Introduction

**Over the course of the whole project (over 4 assignments)**, you are going to build a photo gallery which will download a list of images from a server and display them in a dynamically resizing grid. You will be able to click on any image to enter a presentation mode, and view other images using "previous" and "next" buttons. You will also eventually implement an auto slideshow mode, where images will automatically change after a certain period of time.

**_Specifically, for assignment 1_, you need to do the following:**:

To help you get started, we have provided boilerplate code consisting of a basic web server and the client-side application. The following is an overview of the directory structure:

```
/public/
    /libs/
    /images/
    /index.html   ** You will write this file
    /style.css    ** You will write this file
/index.js
/package.json
```

* `public` - all your client-side files go in this folder
    * `libs` - library files provided by us go in this folder
    * `images` - all image files go in this folder
    * **`index.html`** - this is the main page of your web application
    * **`style.css`** - this is the CSS file containing the CSS rules for your web application
* `index.js` - the basic Node.js web server we provide
* `package.json` - Metadata about your Node.js application -- e.g., dependencies -- that NPM (Node Package Manager) uses


For this particular assignment, you will write some basic HTML and CSS to build the homepage for the web app. **There is no JavaScript required for this assignment, so you will be penalized if you use JavaScript for this assignment**.

The following shows a wireframe of what the user interface should look like. You are free to choose colours and fonts of your own choice.

![layout.png](./layout.png?raw=true "Wireframe")


## Tasks

0. [Setup] Make sure you can serve your client-side application using the web server provided. If you haven't already, install Node.js and then install the required dependencies. After installing Node.js, in your root folder, run the following:

```
npm install
```

Once NPM installs the dependencies, you should see a `node_modules` folder inside your root folder.

You can start the server by running:

```
node index.js
```


1. [HTML] In the `public/index.html` file, create the HTML layout that will be required to generate the web page provided in the screenshot. Your homepage should include the following elements:
    - Div (id=`mainBody`)
        - Heading
        - Table (id=`imagesGrid`)
            - Row 1
                - Cell 1
                    - Image 1
                - Cell 2
                    - Image 2
                - Cell 3
                    - Image 3
                - Cell 4
                    - Image 4
            - Row 2
                    - ...

    - Notes:
        - You can find all 8 images in the `images` folder.
        - The images will likely be too big to fit on the screen, but that's OK, since that will be fixed in the next task.

2. [CSS] In the `public/style.css` file, define relevant CSS rules that would help you design the layout for the web page. A few things to keep in mind:
    - Make sure to load the CSS stylesheet in your `index.html` file.
    - A) The width of the content within the website (`#mainBody`) should be 1000px.
    - B) The content (`#mainBody`) should be centered within the web page.
    - C) Make sure that all 8 images fit nicely inside the table. That is, they do not overflow outside the table. (Hint: You need to modify the width of the images inside the table).
    - D) Add a shadow to the images when hovered over.
    - E) Make the border of the images rounded on the edges when hovered over.


## Marking

1. Task 1: 5 Points
2. Task 2:
    1. A: 2 Points
    2. B: 2 Points
    3. C: 2 Points
    4. D: 2 Points
    5. E: 2 Points


## Submission Instructions
- For each assignment, create a branch called assignment-, for ex: assignment-1, assignment-2, etc. **For this assignment, your branch name should be assignment-1.**
- Make sure you push your changes to that branch before noon (11:59 AM) on the date of the assignment deadline (**July 22, 2022 11:59 AM**).
