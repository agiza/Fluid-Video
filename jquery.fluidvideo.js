/**
 * Fluid Video
 * @author Kyle Weiner
 * @version 1.0
 *
 * Copyright 2013 Kyle Weiner, http://kylemade.com
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 * Inspired by http://fitvidsjs.com/
 */

(function ($) {

	"use strict";

	$.fn.fluidVideo = function (options) {
		var width,
			height,
			settings,
			aspectRatio,
			$video;

		settings = $.extend({
			parentClass: "fluid-video-wrapper"
		}, options);

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
				.wrap('<div class="' + settings.parentClass + '" />')
				.parent('.' + settings.parentClass)
				.css("padding-top", (aspectRatio * 100) + "%");
		});
	};

}(jQuery));