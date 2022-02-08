---
date: 2020-02-15
description: How to inspect the default video controls in Firefox - see the markup and styles that make up the player controls.
layout: post
slug: default-video-controls-in-firefox
tags:
- post
- firefox
- devtools
title: Default video controls in Firefox
---

<p class="info">
  Note that this tip relates to <strong>Firefox 72.0.2</strong> at the time of writing.
</p>

Ever wondered how to inspect the default controls of a `video` element in the Firefox dev tools inspector? Take a look at the following DOM for the demo video [Big Buck Bunny](http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4).

```html
<body>
  <video autoplay="" controls=""></video>
</body>
```

We see a `video` element with a `controls` attribute but where is the DOM for the video controls?

## Enable `showUserAgentShadowRoots`

Open a new tab and in the address bar type `about:config`. Search for _shadow_ and look for `devtools.inspector.showUserAgentShadowRoots` and set it to `true`.

Now check the element inspector and note that we have a `#shadow-root` node that we can expand allowing us to see the elements shadow DOM.

## Video Element Shadow DOM

```html
<div class="videocontrols" xmlns="http://www.w3.org/1999/xhtml" role="none">
  <link
    rel="stylesheet"
    type="text/css"
    href="chrome://global/skin/media/videocontrols.css"
  />
  <div id="controlsContainer" class="controlsContainer" role="none">
    <div id="statusOverlay" class="statusOverlay stackItem" hidden="">
      <div id="statusIcon" class="statusIcon" type="throbber"></div>
      <bdi class="statusLabel" id="errorAborted">Video loading stopped.</bdi>
      <bdi class="statusLabel" id="errorNetwork"
        >Video playback aborted due to a network error.</bdi
      >
      <bdi class="statusLabel" id="errorDecode"
        >Video can’t be played because the file is corrupt.</bdi
      >
      <bdi class="statusLabel" id="errorSrcNotSupported"
        >Video format or MIME type is not supported.</bdi
      >
      <bdi class="statusLabel" id="errorNoSource"
        >No video with supported format and MIME type found.</bdi
      >
      <bdi class="statusLabel" id="errorGeneric"
        >Video playback aborted due to an unknown error.</bdi
      >
    </div>

    <div
      id="pictureInPictureOverlay"
      class="pictureInPictureOverlay stackItem"
      status="pictureInPicture"
      hidden="true"
    >
      <div class="statusIcon" type="pictureInPicture"></div>
      <bdi class="statusLabel" id="pictureInPicture"
        >This video is playing in Picture-in-Picture mode.</bdi
      >
    </div>

    <div id="controlsOverlay" class="controlsOverlay stackItem" role="none">
      <div class="controlsSpacerStack">
        <div
          id="controlsSpacer"
          class="controlsSpacer stackItem"
          role="none"
        ></div>
        <div
          id="clickToPlay"
          class="clickToPlay"
          style="width: 61.95px; height: 61.95px;"
          hidden=""
        ></div>
      </div>

      <button
        id="pictureInPictureToggleButton"
        class="pictureInPictureToggleButton"
      >
        <div
          id="pictureInPictureToggleIcon"
          class="pictureInPictureToggleIcon"
        ></div>
        <span class="pictureInPictureToggleLabel">Picture-in-Picture</span>
      </button>

      <div id="controlBar" class="controlBar" role="none" hidden="">
        <button
          id="playButton"
          class="button playButton"
          playlabel="Play"
          pauselabel="Pause"
          tabindex="-1"
          aria-label="Play"
          paused="true"
        ></button>
        <div
          id="scrubberStack"
          class="scrubberStack progressContainer"
          role="none"
        >
          <div class="progressBackgroundBar stackItem" role="none">
            <div class="progressStack" role="none">
              <progress
                id="bufferBar"
                class="bufferBar"
                value="65208"
                max="596474"
                tabindex="-1"
              ></progress>
              <progress
                id="progressBar"
                class="progressBar"
                value="0.891237505742078"
                max="100"
                tabindex="-1"
              ></progress>
            </div>
          </div>
          <input
            type="range"
            id="scrubber"
            class="scrubber"
            tabindex="-1"
            max="596474"
          />
        </div>
        <bdi id="positionLabel" class="positionLabel" role="presentation"></bdi>
        <bdi id="durationLabel" class="durationLabel" role="presentation"></bdi>
        <bdi
          id="positionDurationBox"
          class="positionDurationBox"
          aria-hidden="true"
        >
          0:05<span class="duration" role="none" id="durationSpan">
            / 9:56</span
          >
        </bdi>
        <div
          id="controlBarSpacer"
          class="controlBarSpacer"
          role="none"
          hidden=""
        ></div>
        <button
          id="muteButton"
          class="button muteButton"
          mutelabel="Mute"
          unmutelabel="Unmute"
          tabindex="-1"
          aria-label="Mute"
        ></button>
        <div id="volumeStack" class="volumeStack progressContainer" role="none">
          <input
            type="range"
            id="volumeControl"
            class="volumeControl"
            min="0"
            max="100"
            step="1"
            tabindex="-1"
            aria-label="Volume slider"
          />
        </div>
        <button
          id="castingButton"
          class="button castingButton"
          aria-label="Cast to Screen"
          hidden=""
        ></button>
        <button
          id="closedCaptionButton"
          class="button closedCaptionButton"
          hidden=""
        ></button>
        <button
          id="fullscreenButton"
          class="button fullscreenButton"
          enterfullscreenlabel="Full Screen"
          exitfullscreenlabel="Exit Full Screen"
          aria-label="Full Screen"
        ></button>
      </div>
      <div id="textTrackList" class="textTrackList" offlabel="Off" hidden="">
        <button class="textTrackItem" index="0" on="true">Off</button>
      </div>
    </div>
  </div>
</div>
```

## Styles

Note that we see a link to the css too.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="chrome://global/skin/media/videocontrols.css"
/>
```

Throw that link into a new browser tab in Firefox to see it.

```css
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

@namespace url("http://www.w3.org/1999/xhtml");

.videocontrols {
  writing-mode: horizontal-tb;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;

  direction: ltr;
  /* Prevent unwanted style inheritance. See bug 554717. */
  text-align: left;
  list-style-image: none !important;
  font: normal normal normal 100%/normal sans-serif !important;
  text-decoration: none !important;
  white-space: normal !important;
}

.controlsContainer {
  --clickToPlay-size: 48px;
  --button-size: 30px;
  --timer-size: 40px;
  --timer-long-size: 60px;
  --track-size: 5px;
  --thumb-size: 13px;
  --label-font-size: 13px;
  --pip-toggle-bgcolor: rgb(0, 96, 223);
  --pip-toggle-text-and-icon-color: rgb(255, 255, 255);
  --pip-toggle-padding: 5px;
  --pip-toggle-icon-width-height: 16px;
}
.controlsContainer.touch {
  --clickToPlay-size: 64px;
  --button-size: 40px;
  --timer-size: 52px;
  --timer-long-size: 78px;
  --track-size: 7px;
  --thumb-size: 16px;
  --label-font-size: 16px;
}

/* Some CSS custom properties defined here are referenced by videocontrols.js */
.controlBar {
  /* Do not delete: these variables are accessed by JavaScript directly.
     see videocontrols.js and search for |-width|. */
  --clickToPlay-width: var(--clickToPlay-size);
  --playButton-width: var(--button-size);
  --scrubberStack-width: 64px;
  --muteButton-width: var(--button-size);
  --volumeStack-width: 48px;
  --castingButton-width: var(--button-size);
  --closedCaptionButton-width: var(--button-size);
  --fullscreenButton-width: var(--button-size);
  --positionDurationBox-width: var(--timer-size);
  --durationSpan-width: var(--timer-size);
  --positionDurationBox-width-long: var(--timer-long-size);
  --durationSpan-width-long: var(--timer-long-size);
}

.touch .controlBar {
  /* Do not delete: these variables are accessed by JavaScript directly.
     see videocontrols.js and search for |-width|. */
  --scrubberStack-width: 84px;
  --volumeStack-width: 64px;
}

.controlsContainer [hidden],
.controlBar[hidden],
.pictureInPictureToggleButton[hidden],
.videocontrols[inDOMFullscreen] > .controlsContainer > .controlsOverlay > .pictureInPictureToggleButton {
  display: none;
}

.controlBar[size="hidden"] {
  display: none;
}

.controlsSpacer[hideCursor] {
  cursor: none;
}

.controlsContainer,
.progressContainer {
  position: relative;
  height: 100%;
}

.stackItem {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.statusOverlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(80,80,80, .85);
}

.controlsOverlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.controlsSpacerStack {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.controlBar {
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 40px;
  padding: 0 9px;
  background-color: rgba(26,26,26,.8);
}

.touch .controlBar {
  height: 52px;
}

.controlBar > .button {
  height: 100%;
  min-width: var(--button-size);
  min-height: var(--button-size);
  padding: 6px;
  border: 0;
  margin: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  background-clip: content-box;
  -moz-context-properties: fill;
  fill: #ffffff;
}

.touch .controlBar > .button {
  background-size: 24px 24px;
}

.controlBar > .button:hover {
  fill: #48a0f7;
}

.controlBar > .button:hover:active {
  fill: #2d89e6;
}

.playButton {
  background-image: url(chrome://global/skin/media/pauseButton.svg);
}
.playButton[paused] {
  background-image: url(chrome://global/skin/media/playButton.svg);
}

.muteButton {
  background-image: url(chrome://global/skin/media/audioUnmutedButton.svg);
}
.muteButton[muted] {
  background-image: url(chrome://global/skin/media/audioMutedButton.svg);
}
.muteButton[noAudio],
.muteButton[noAudio]:hover,
.muteButton[noAudio]:hover:active {
  background-image: url(chrome://global/skin/media/audioNoAudioButton.svg);
  fill: white;
}
.muteButton[noAudio] + .volumeStack {
  display: none;
}

.castingButton {
  background-image: url(chrome://global/skin/media/castingButton-ready.svg);
}

.castingButton[enabled] {
  background-image: url(chrome://global/skin/media/castingButton-active.svg);
}

.closedCaptionButton {
  background-image: url(chrome://global/skin/media/closedCaptionButton-cc-off.svg);
}
.closedCaptionButton[enabled] {
  background-image: url(chrome://global/skin/media/closedCaptionButton-cc-on.svg);
}

.fullscreenButton {
  background-image: url(chrome://global/skin/media/fullscreenEnterButton.svg);
}
.fullscreenButton[fullscreened] {
  background-image: url(chrome://global/skin/media/fullscreenExitButton.svg);
}

.controlBarSpacer {
  flex-grow: 1;
}

.volumeControl::-moz-range-thumb,
.scrubber::-moz-range-thumb {
  height: var(--thumb-size);
  width: var(--thumb-size);
  border: none;
  border-radius: 50%;
  background-color: #ffffff;
  filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.65));
}

.volumeControl::-moz-focus-outer,
.scrubber::-moz-focus-outer {
  border: 0;
}

.progressBackgroundBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progressStack {
  position: relative;
  width: 100%;
  height: var(--track-size);
}

.scrubberStack {
  /* minus margin to get basis of required width */
  min-width: calc(var(--scrubberStack-width) - 18px);
  flex-basis: calc(var(--scrubberStack-width) - 18px);
  flex-grow: 2;
  flex-shrink: 0;
  margin: 0 9px;
}

.volumeStack {
  max-width: 60px;
  min-width: var(--volumeStack-width);
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 6px;
  margin-left: 4px;
}

.bufferBar,
.progressBar,
.scrubber,
.volumeBackground,
.volumeControl {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: calc(var(--track-size) / 2);
  margin: 0;
  background: none;
  background-color: transparent;
}

.bufferBar,
.volumeBackground {
  background-color: rgba(0,0,0,0.7);
}

.bufferBar::-moz-progress-bar,
.progressBar::-moz-progress-bar,
.volumeBackground::-moz-meter-bar {
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: calc(var(--track-size) / 2);
  background: none;
}

.scrubber:hover::-moz-range-thumb,
.volumeControl:hover::-moz-range-thumb {
  background-color: #48a0f7;
}

.scrubber:active::-moz-range-thumb,
.volumeControl:active::-moz-range-thumb {
  background-color: #2d89e6;
}

.scrubber::-moz-range-track,
.scrubber::-moz-range-progress {
  background-color: transparent;
}

.volumeControl::-moz-range-progress,
.volumeControl::-moz-range-track {
  height: var(--track-size);
  border-radius: calc(var(--track-size) / 2);
}

.volumeControl::-moz-range-progress {
  background-color: #ffffff;
}

.volumeControl::-moz-range-track {
  background-color: rgba(0,0,0,0.7);
}


.bufferBar::-moz-progress-bar {
  background-color: rgba(255,255,255,0.3);
  border-radius: calc(var(--track-size) / 2);
}

.progressBar::-moz-progress-bar {
  background-color: #00b6f0;
}

.textTrackList {
  position: absolute;
  right: 5px;
  bottom: 45px;
  max-width: 80%;
  border: 1px solid #000000;
  border-radius: 2.5px;
  padding: 5px 0;
  vertical-align: middle;
  background-color: #000000;
  opacity: 0.7;
}

.touch .textTrackList {
  bottom: 58px;
}

.textTrackList > .textTrackItem {
  display: block;
  width: 100%;
  height: var(--button-size);
  font-size: var(--label-font-size);
  padding: 2px 10px;
  border: none;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  color: #ffffff;
  background-color: transparent;
}

.textTrackList > .textTrackItem:hover {
  background-color: #444444;
}

.textTrackList > .textTrackItem[on] {
  color: #48a0f7;
}

.positionLabel,
.durationLabel {
  display: none;
}

.positionDurationBox {
  text-align: center;
  padding-inline-start: 1px;
  padding-inline-end: 9px;
  white-space: nowrap;
  font: message-box;
  font-size: var(--label-font-size);
  font-size-adjust: 0.55;
  color: #ffffff;
}

.positionDurationBox {
  font-size-adjust: unset;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
}

.duration {
  display: inline-block;
  white-space: pre;
  color: #929292;
}

.statusIcon {
  width: 36px;
  height: 36px;
  margin-bottom: 20px;
}

/* Not showing the throbber on mobile because of conflict with m.youtube.com (see bug 1289412) */
.controlsContainer:not(.mobile) .statusIcon[type="throbber"] {
  background: url(chrome://global/skin/media/throbber.png) no-repeat center;
}

.controlsContainer:not(.mobile) .statusIcon[type="throbber"][stalled] {
  background: url(chrome://global/skin/media/stalled.png) no-repeat center;
}

.statusIcon[type="error"],
.statusIcon[type="pictureInPicture"] {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.statusIcon[type="error"] {
  min-width: 70px;
  min-height: 60px;
  background-image: url(chrome://global/skin/media/error.png);
}

.statusIcon[type="pictureInPicture"] {
  min-width: 84px;
  min-height: 84px;
  background-image: url(chrome://global/skin/media/pictureinpicture.svg);
  -moz-context-properties: fill, stroke;
  fill: #fff;
  stroke: #fff;
}

.pictureInPictureToggleButton {
  display: flex;
  -moz-appearance: none;
  position: absolute;
  background-color: var(--pip-toggle-bgcolor);
  color: var(--pip-toggle-text-and-icon-color);
  border: 0;
  padding: var(--pip-toggle-padding);
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(calc(100% - var(--pip-toggle-icon-width-height) - 2 * var(--pip-toggle-padding)));
  transition: opacity 160ms linear, transform 160ms linear;
  min-width: max-content;
  pointer-events: auto;
  opacity: 0;
}

.pictureInPictureToggleIcon {
  display: inline-block;
  background-image: url(chrome://global/skin/media/pictureinpicture.svg);
  background-position: center left;
  background-repeat: no-repeat;
  -moz-context-properties: fill, stroke;
  fill: var(--pip-toggle-text-and-icon-color);
  stroke: var(--pip-toggle-text-and-icon-color);
  width: var(--pip-toggle-icon-width-height);
  height: var(--pip-toggle-icon-width-height);
  min-width: max-content;
}

.statusIcon[type="pictureInPicture"]:dir(rtl),
.pictureInPictureToggleIcon:dir(rtl) {
  transform: scaleX(-1);
}

.pictureInPictureToggleLabel {
  margin-inline-start: var(--pip-toggle-padding);
}

/**
 * For the Picture-in-Picture toggle, we don't use the built-in :hover
 * pseudoclass because there are many sites where the arrangement of the DOM
 * or the CSS will conspire to prevent :hover from matching on the <video>
 * itself. PictureInPictureToggleChild takes care of punching through those
 * barriers, and manually sets a .hovering class.
 */

.controlsOverlay.hovering > .pictureInPictureToggleButton {
  opacity: 0.8;
}

.controlsOverlay[hidetoggle="true"].hovering > .pictureInPictureToggleButton:not(.hovering) {
  opacity: 0;
}

.controlsOverlay.hovering > .pictureInPictureToggleButton.hovering {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

@supports -moz-bool-pref("media.videocontrols.picture-in-picture.video-toggle.testing") {
  /**
   * To make automated tests faster, we drop the transition duration in
   * testing mode.
   */
  .pictureInPictureToggleButton {
    transition-duration: 10ms;
  }
}

/* Overlay Play button */
.clickToPlay {
  min-width: var(--clickToPlay-size);
  min-height: var(--clickToPlay-size);
  border-radius: 50%;
  background-image: url(chrome://global/skin/media/playButton.svg);
  background-repeat: no-repeat;
  background-position: 54% 50%;
  background-size: 40% 40%;
  background-color: #1a1a1a;
  -moz-context-properties: fill;
  fill: #ffffff;
  opacity: 0.8;
  position: relative;
  top: 20px;
}

.controlsSpacerStack:hover > .clickToPlay,
.clickToPlay:hover {
  opacity: 0.55;
}

.controlsSpacerStack:hover > .clickToPlay[fadeout] {
  opacity: 0;
}

.controlBar[fullscreen-unavailable] .fullscreenButton {
  display: none;
}

.statusOverlay[fadeout],
.statusOverlay[error] + .controlsOverlay > .controlsSpacerStack {
  opacity: 0;
}

.pictureInPictureOverlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background-color: rgb(12, 12, 13);
}

/* Status description formatting */
.statusLabel {
  padding: 0 10px;
  text-align: center;
  font: message-box;
  font-size: 14px;
  color: #ffffff;
}

.statusLabel {
  display: none;
}

[status="errorAborted"]         > [id="errorAborted"],
[status="errorNetwork"]         > [id="errorNetwork"],
[status="errorDecode"]          > [id="errorDecode"],
[status="errorSrcNotSupported"] > [id="errorSrcNotSupported"],
[status="errorNoSource"]        > [id="errorNoSource"],
[status="errorGeneric"]         > [id="errorGeneric"],
[status="pictureInPicture"]     > [id="pictureInPicture"] {
  display: inline;
}

```

## Summary

If you ever need to build your own video controls this is a great reference. What better way to get started than seeing how the browser builds the UI for its own default video controls.
