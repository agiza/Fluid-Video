# Fluid Video #

A spin-off version of the [FitVids.js](https://github.com/davatron5000) jQuery plugin for fluid video embeds.

## Examples

### Basic Usage

```javascript
$('iframe').fluidVideo();
```

### Callbacks

```javascript
var options = {
    vendors: {
        vimeo: {
            callback: function ($video, src) {
                // See: http://developer.vimeo.com/player/embedding
                $video.attr("src", src + "?title=0&byline=0&portrait=0&color=FFFFFF");
            }
        }
    }
};

$('.post').find('iframe').fluidVideo(options);
```

### Demo

See it in action: [JSFiddle](http://jsfiddle.net/kylemade/8s3aj/embedded/result/).

## Change Log

### v1.0

* Initial commit

### v1.1

* Added callbacks for videos by vendor