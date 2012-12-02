/*
 * Slicer.js
 *
 * Copyright 2012, Daryl Ginn http://daryl.im
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Version 1.0
 */

;(function(w, d) {

  "use strict";

  var _tmp, i, l,

  _extend = function(a, b) {
    for(var k in b) a[k] = b[k];
    return a;
  },

  _absolute = function(obj) {
    obj.style.position = 'absolute';
    obj.style.display  = 'block';
    obj.style.top      = 0;
    obj.style.left     = 0;
  },

  _slice = function(obj) {
    var grid, width, height;

    grid   = obj.args.grid;
    width  = obj.elem.offsetWidth;
    height = obj.elem.offsetHeight;

    // Wrap the image.
    _tmp = d.createElement('div');
    _tmp.className = 'slicer';
    _tmp.style.position = 'relative';
    obj.elem.parentNode.appendChild(_tmp);
    _tmp.appendChild(obj.elem);

    obj._slicer = _tmp;

    // Create slices container.
    _tmp = d.createElement('div');
    _tmp.className = 'slices';

    _absolute(_tmp);
    _tmp.style.width  = width  + 'px';
    _tmp.style.height = height + 'px';

    obj._slices = _tmp;

    width  = width  / grid;
    height = height / grid;

    var xo = 0, yo = 0, _img;

    for(i = 0, l = (grid * grid); i < l; i++) {
      _tmp = d.createElement('div');
      _tmp.className = 'slice';

      _absolute(_tmp);
      _tmp.style.width      = width  + 'px';
      _tmp.style.height     = height + 'px';
      _tmp.style.marginTop  = (yo ? (yo * height) : 0) + 'px';
      _tmp.style.marginLeft = (xo ? (xo * width)  : 0) + 'px';
      _tmp.style.overflow   = 'hidden';

      _img = obj.elem.cloneNode();
      _tmp.appendChild(_img);

      _absolute(_img);
      _img.style.marginTop  = (yo ? -(yo * height) : 0) + 'px';
      _img.style.marginLeft = (xo ? -(xo * width)  : 0) + 'px';

      // Append to slices.
      obj._slices.appendChild(_tmp);

      if(xo++ === (grid - 1)) { yo++; xo = 0; }
    }

    _tmp = {
      image  : obj.elem,
      slicer : obj._slicer,
      slices : obj._slices,
      blocks : obj._slices.children
    };

    if(typeof obj._jQuery != 'undefined') {
      for(i in _tmp) _tmp[i] = $(_tmp[i]);
    }

    obj.elem.style.display = 'none';
    obj._slicer.appendChild(obj._slices);

    return _tmp;
  };

  w.Slicer = function(elem, args) {
    if(typeof elem != 'object') return false;

    // Is it a jQuery object?
    if(typeof jQuery != 'undefined') {
      if(elem instanceof jQuery) {
        this._jQuery = true;
        elem = elem[0];
      }
    }

    this.elem  = elem;
    this.args = _extend({
      grid: 5
    }, args || {});

    return _slice(this);
  };

})(this, document);
