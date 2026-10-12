# SpeakEase

**Communicate with confidence.**

SpeakEase is an accessible, context-aware communication assistant that helps people express their needs by selecting ready-made phrases that are spoken aloud by their device.

## Features

- **Four communication contexts:** Home, Classroom, Hospital, and Transport.
- **Text-to-speech:** Speak selected phrases using the browser's speech synthesis.
- **Custom phrases:** Add personal phrases and save them in the browser.
- **Responsive interface:** Designed for laptops, tablets, and mobile devices.
- **Installable PWA:** Can be installed on compatible devices through supported browsers.
- **Offline support:** Uses a service worker to cache core application files.

## Technology

- HTML5
- CSS3
- JavaScript
- Web Speech API
- Web App Manifest
- Service Worker API
- Browser Local Storage

## Run locally

1. Install Python 3 if it is not already available.
2. Open a terminal in the project folder.
3. Run:

   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.

## Project structure

- `index.html` — application interface
- `styles.css` — responsive styling
- `app.js` — phrase handling and speech features
- `manifest.webmanifest` — installation metadata
- `service-worker.js` — offline caching
- `icons/` — application icons

## Accessibility goal

SpeakEase aims to make everyday communication easier through clear phrase choices, simple interaction, and spoken output. Speech availability and offline behaviour can vary by browser and device, so these should be tested on target devices.

## License

License to be selected before public release. Any third-party assets or dependencies must be reviewed for compatible licences.