const sectionOne = document.getElementById('one');
const sectionTwo = document.getElementById('two');
const sectionThree = document.getElementById('three');
const sectionFour = document.getElementById('four');

function scroll(pixels, section) {
  if (document.documentElement.scrollTop > pixels) {
    section.className = 'show';
  } else {
    section.className = 'hide hidden';
  }
}

window.addEventListener('scroll', function() {
    scroll(0, sectionOne);
    scroll(800, sectionTwo);
    scroll(1600, sectionThree);
    scroll(2400, sectionFour);
});
