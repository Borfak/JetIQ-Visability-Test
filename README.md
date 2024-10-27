# Disable Test Visibility for JetIQ

## Overview

This browser extension prevents JetIQ from tracking visibility changes during online tests. By disabling the Page Visibility API, users can avoid being logged out or interrupted when switching tabs or minimizing the browser window.

## Features

- Blocks visibility change events, keeping the page active.
- Prevents unwanted logouts during online testing sessions.
- Simple and lightweight implementation.

## Installation

### For Users

1. Download the extension as a ZIP file.
2. Extract the ZIP file.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** in the top right corner.
5. Click on **Load unpacked** and select the extracted folder.

### For Developers

1. Clone the repository:
   ```bash
   git clone https://github.com/Borfak/JetIQ-Visability-Test
   cd JetIQ-Visability-Test
