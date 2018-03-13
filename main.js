const sectionOne = document.getElementsByClassName('one');

window.addEventListener('scroll', function() {
    for (var i = 0; i < sectionOne.length; i++) {
      if (document.documentElement.scrollTop > 0) {
        sectionOne[i].className = 'show';
      }
    }
});

const sectionTwo = document.getElementsByClassName('two');

window.addEventListener('scroll', function() {
    for (var i = 0; i < sectionTwo.length; i++) {
      if (document.documentElement.scrollTop > 800) {
        sectionTwo[i].className = 'show';
      }
    }
});

const sectionThree = document.getElementsByClassName('three');

window.addEventListener('scroll', function() {
    for (var i = 0; i < sectionThree.length; i++) {
      if (document.documentElement.scrollTop > 1600) {
        sectionThree[i].className = 'show';
      }
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
