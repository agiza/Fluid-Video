/**
 * Fluid Video
 * @author Kyle Weiner
 * @version 1.1
 *
 * Copyright 2013 Kyle Weiner, http://kylemade.com
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 * Inspired by http://fitvidsjs.com/
 */

(function ($) {

    "use strict";

    $.fn.fluidVideo = function (options) {
        var src,
            width,
            height,
            aspectRatio,
            $video;

        options = $.extend({}, $.fn.fluidVideo.defaults, options);

        this.each(function () {
            $video = $(this);

            // Determine the video's aspect ratio

            width = $video.attr("width");
            height = $video.attr("height");
            aspectRatio = height / width;

            /**
             * Remove the video's width and height attributes,
             * wrap it in a div and set its aspect ratio
             */

            $video
                .removeAttr("width")
                .removeAttr("height")
                .wrap('<div class="' + options.parentClass + '" />')
                .parent('.' + options.parentClass)
                .css("padding-top", (aspectRatio * 100) + "%");

            // Run the correct callback for the video based on its vendor

            if (options.vendors) {
                src = $video.attr("src").toLowerCase();

                $.each(options.vendors, function (k) {
                    if ((src.indexOf(k.toLowerCase()) > -1) && options.vendors[k].callback) {
                        options.vendors[k].callback($video, src);
                    }
                });
            }
        });
    };

    $.fn.fluidVideo.defaults = {
        vendors: {},
        parentClass: "fluid-video-wrapper"
    };

}(jQuery));