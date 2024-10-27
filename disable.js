/**
 * Disable Page Visibility API
 * Adapted by Borfak for VNTU students
 *
 * This script prevents websites from detecting tab visibility changes,
 * keeping the page status as "visible" to avoid interruptions or forced logouts.
 *
 * How it works:
 * - Listens for visibility change events ("visibilitychange" and "webkitvisibilitychange")
 *   and stops them from triggering any page responses.
 * - Blocks "blur" events that could signal a switch away from the tab.
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
