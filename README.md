# Slicer
---

Slice up an image into a manipulatable grid.

## Usage

You can use this using **Vanilla JS** or with **jQuery** (both will do exactly the same thing). However, if you pass in an image using jQuery, it will assume you're using jQuery, thus return a jQuery object.

#### Standard usage

```javascript
var obj = new Slicer(document.getElementsByTagName('img')[0], {
  grid: 4
});
```

#### jQuery usage

```javascript
var obj = new Slicer($('img'), {
  grid: 4
});
```

## Output

#### Initial markup

```html
<img src="cat.jpg" />
```

#### Expected output

```html
<div class="slicer">
  <img src="cat.jpg" />
  <div class="slices">
    <!-- Blocks -->
    <div class="slice">
      <img src="cat.jpg" />
    </div>
    ...
  </div>
</div>
```

## Return

```text
Object {
  blocks : HTMLCollection[16] // Individual blocks
  image  : <img>,             // Original image
  slicer : <div>,             // Main wrapper
  slices : <div>              // Blocks wrapper
}
```
