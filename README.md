# Slicer
---

Slice up an image into a manipulatable grid. Currently you can see it's usage on http://daryl.im

## Usage

You can use this using **Vanilla JS** or with **jQuery** (both will do exactly the same thing). However, if you pass in an image using jQuery, it will assume you're using jQuery, thus return a jQuery object.

#### Standard usage

    var obj = new Slicer(document.getElementsByTagName('img')[0], {
      grid: 4
    });

#### jQuery usage

    var obj = new Slicer($('img'), {
      grid: 4
    });

## Return

    Object:
      blocks: HTMLCollection[16] // Individual blocks
      image: <img>               // Original image
      slicer: <div>              // Main wrapper
      slices: <div>              // Blocks wrapper
