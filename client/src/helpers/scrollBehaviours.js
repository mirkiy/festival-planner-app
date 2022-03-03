/**
 * This functions change behaviour of scrolling.
 * 
 * From: https://linuxhint.com/disable-scrolling-javascript/
 */

export function preventScroll() {
  // get vertical and horizontal position
  const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  // if scroll happens, forces scroll back to previous positions
  window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  };
}

export function allowScroll() {
  // sets window onscroll behaviour back to nothing
  window.onscroll = function () {};
}
