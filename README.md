# Fluid Video #

A spin-off version of the [FitVids.js](https://github.com/davatron5000/FitVids.js) jQuery plugin for fluid video embeds.

## Examples

Fluid Video requires jQuery 1.7+ and the addition of the CSS classes provided in [style.css](https://github.com/Kylemade/Fluid-Video/blob/master/style.css) (which should be updated accordingly).

### Basic Usage

```javascript
$('iframe').fluidVideo();
```

### Callbacks

Callbacks can be used to easily target vendors (e.g. YouTube, Vimeo, Viddler, etc.) for additional processing.

```javascript
$('iframe').fluidVideo({
    vendors: {
        vimeo: {
            callback: function ($video, src) {
                // Set additional parameters for all Vimeo embeds.
                // See http://developer.vimeo.com/player/embedding
                $video.attr("src", src + "?title=0&byline=0&portrait=0&color=FFFFFF");
            }
        }
    }
});
```

Callbacks work with any vendor provided that the key (e.g. "youtube") appears in the video's `src` attribute. Vendor keys are not case-sensitive and may be written in camel case.

```javascript
$('iframe').fluidVideo({
    vendors: {
        youtube: {
            callback: function ($video, src) {
                // callback function for YouTube videos...
            }
        },
        // e.g. the src attribute is "http://video.customvendor.com/video/123"
        customvendor: {
            callback: function ($video, src) {
                // callback function for custom vendor videos...
            }
        }
    }
});
```

### CSS

The `.fluid-video-wrapper` CSS class can be overwritten with a custom class.

```javascript
$('iframe').fluidVideo({
    parentClass: "my-parent-class"
});
```

The [style.css](https://github.com/Kylemade/Fluid-Video/blob/master/style.css) file also includes a CSS class called `.no-js` that illustrates how to set a `max-width: 100%` fallback when JavaScript is not supported. The `.no-js` class is typically placed on the document's `<html>` tag and requires an additional line of JavaScript in the `<head>`.

```html
<script>document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');</script>
```

## Demo

See Fluid Video in action: [JSFiddle](http://jsfiddle.net/kylemade/8s3aj/embedded/result/).

## Change Log

### v1.0

* Initial commit

### v1.1

* Added callbacks for videos by vendor
