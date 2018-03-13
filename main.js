function scroll(pixels, section) {
  if (document.documentElement.scrollTop > pixels) {
    section.className = 'show';
  } else {
    section.className = 'hide hidden';
  }
}

const sectionOne = document.getElementById('one');

window.addEventListener('scroll', function() {
    scroll(0, sectionOne);
});

const sectionTwo = document.getElementById('two');

window.addEventListener('scroll', function() {
    scroll(800, sectionTwo);
});

const sectionThree = document.getElementById('three');

window.addEventListener('scroll', function() {
    scroll(1600, sectionThree);
});

const sectionFour = document.getElementById('four');

window.addEventListener('scroll', function() {
  scroll(2400, sectionFour);
});
