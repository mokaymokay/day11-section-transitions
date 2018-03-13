const sectionOne = document.getElementById('one');

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 0) {
      sectionOne.className = 'show';
    } else {
      sectionOne.className = 'hide hidden';
    }
});

const sectionTwo = document.getElementById('two');

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 800) {
      sectionTwo.className = 'show';
    } else {
      sectionTwo.className = 'hide hidden';
    }
});

const sectionThree = document.getElementById('three');

window.addEventListener('scroll', function() {
      if (document.documentElement.scrollTop > 1600) {
        sectionThree.className = 'show';
      } else {
        sectionThree.className = 'hide hidden';
      }
});

const sectionFour = document.getElementById('four');

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 2400) {
      sectionFour.className = 'show';
    } else {
      sectionFour.className = 'hide hidden';
    }
});
