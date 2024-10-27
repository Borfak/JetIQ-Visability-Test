/**
 * Disable JetIQ Test Visability
 * Adapted by Borfak for VNTU students
 *
 * This script prevents websites from detecting tab visibility changes,
 * keeping the page status as "visible" to avoid interruptions or forced logouts.
 * Additionally, it allows text selection and copying on pages that restrict it.
 *
 * How it works:
 * - Listens for visibility change events ("visibilitychange" and "webkitvisibilitychange")
 *   and stops them from triggering any page responses.
 * - Blocks "blur" events that could signal a switch away from the tab.
 * - Allows text selection and copying by overriding default events.
 */

window.addEventListener(
  "visibilitychange",
  function (event) {
      // Stop visibility change events to prevent the page from knowing the tab is hidden
      event.stopImmediatePropagation();
  },
  true
);

window.addEventListener(
  "webkitvisibilitychange",
  function (event) {
      // Stop webkit visibility change events for compatibility with certain browsers
      event.stopImmediatePropagation();
  },
  true
);

window.addEventListener(
  "blur",
  function (event) {
      // Block blur events to keep the tab appearing as active
      event.stopImmediatePropagation();
  },
  true
);

// Allow text selection and copying
document.addEventListener("mousedown", function (event) {
    // Remove any restrictions on text selection
    if (event.button === 0) { // Left mouse button
        document.body.style.userSelect = 'text'; // Allow text selection
    }
}, true);

document.addEventListener("contextmenu", function (event) {
    // Allow right-click context menu
    event.stopImmediatePropagation(); // Prevent blocking of the context menu
}, true);

// Override copy event to ensure text can be copied
document.addEventListener("copy", function (event) {
    // This allows copying even if the website tries to block it
    event.stopImmediatePropagation();
    event.preventDefault();
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        const clipboardData = event.clipboardData || window.clipboardData;
        clipboardData.setData("text/plain", selectedText);
    }
}, true);

// Prevent default behavior that blocks copying
document.addEventListener("cut", function (event) {
    event.preventDefault(); // Prevent cut
}, true);
