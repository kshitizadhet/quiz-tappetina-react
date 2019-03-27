import React from "react";
import Youtube from "react-youtube";

class VideoOne extends React.Component {
    render () {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div>
            {/* Taken from - https://github.com/tiendq/youtube-embed-video

                    Properties are

                      videoId -- Youtube video ID parameter, it's RnDC9MXSqCY in this Youtube link. Required.
                      suggestions -- Show suggested videos when the video finishes. Default: true
                      autoplay -- Make an embedded video play automatically. Default: false
                      controls -- Show player controls. Default: true
                      showInfo -- Show video title and player actions. Default: true
                      enhancedPrivacy -- Enable privacy-enhanced mode. Default: false
                      width -- Player width in px. Default: 560
                      height -- Player height in px. Default: 315
                      size -- Pre-defined video sizes same as Youtube options. size will override width and height values. Available size values are small, medium, large, and largest.
                    */}
            <Youtube
        videoId="Da5TOXCwLSg"
        className="youtubeVideo1"
        opts={opts}
        onReady={this._onReady}
        onEnd={this._onEnd}

        />
        </div>
    )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    _onEnd() {
        document.getElementsByClassName("youtubeVideo1").addEventListener('ended', quizHandler());

        function quizHandler() {

            var videoElement = document.getElementsByClassName("youtubeVideo1");
            for(var i = 0; i < videoElement.length; i++) {
                videoElement[i].style.display = 'none';
            }

            var quesElement = document.getElementsByClassName('questions');
            for(var j = 0; j < quesElement.length; j++) {
                quesElement[j].style.display = 'block';
            }

        }
    }

}

export default VideoOne

