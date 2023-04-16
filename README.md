# kaleidoscope-web-streamer

Go [here](https://staujd02.github.io/kaleidoscope-web-streamer/) to run the app in your browser.

Click on the timer in upper right hand corner to view the drop down control menu. The three controls available to you are:
- Skip to next stream
- Pause/Play
- Stream Configuration

In the stream configuration, you have the ability to configure the source of the stream, order, and duration of a stream. The option to temporarly disable a stream is also an option.

### Sample [list](https://github.com/staujd02/kaleidoscope-web-streamer/blob/master/sources/list.txt) of streams/overlays

## Using Embed Codes from Youtube.com

A majority of live streams found on the internet are hosted on Youtube.com. As of 2023, the easiest way to setup a Youtube hosted livestream is to take the following steps.
- Find the Share button associated with the Youtube video/stream.
- Locate the "Embed" share option
- Copy the "Embed" code
- Locate the "src" or source property located in the copied <iframe> tag
- Use the URL directly following the "src" property as the stream's URL property

Optionally, add "&autoplay=true" to the end of the URL to indicate to Youtube player that is should start playing the stream as soon as it is loaded.
