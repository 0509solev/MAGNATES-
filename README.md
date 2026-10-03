# Strong Before Gentle

A 69-slide HTML presentation of the essay on an ideal Philippines: a strong, clean, executive-led state built from institutions borrowed from Singapore, Hong Kong, South Korea and Estonia.

Open `index.html` in Chrome, Edge, Safari or Firefox. It is a single page, and nothing needs to be installed.

## Presenting

| Key | Action |
| --- | --- |
| `→` `↓` `Space` `Page Down` `Enter` | Next slide (works with presentation clickers) |
| `←` `↑` `Page Up` `Backspace` | Previous slide |
| `Home` / `End` | First / last slide |
| `F` | Full screen |
| `O` or `G` | All slides; click one to jump to it |
| `B` or `.` | Black screen; press again to return |

You can also click the right side of the screen to advance and the left fifth to go back, or swipe on a touchscreen. Move the mouse and a small control bar appears in the bottom-right corner. `index.html#12` opens slide 12 directly.

## What is in the folder

- `index.html`: the whole deck, including its styles, the 3D scene and every slide.
- `assets/three.min.js`: a local copy of Three.js r128. The deck loads Three.js from cdnjs first and uses this copy when offline.
- `assets/fonts/`: local copies of Bodoni Moda, Archivo and IBM Plex Mono, used when Google Fonts cannot be reached.

Keep the `assets` folder next to `index.html` if you copy the deck to a USB drive, so it works in a room without internet.

## Behaviour on other screens

- On phones and tall windows the deck switches to a scrolling reading layout, and the 3D scene follows whichever slide is in view.
- When the system asks for reduced motion, slides change without movement and the 3D scene jumps straight to each arrangement.
- On devices without WebGL, a still backdrop replaces the 3D scene and every slide still works.
