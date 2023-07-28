var currentIndex = 0;

setInterval(function() {
  var divs = document.querySelectorAll('.t-a1, .t-a2, .t-a3');
  for (var i = 0; i < divs.length; i++) {
    if (i === currentIndex) {
      divs[i].style.opacity = 1;
      divs[i].style.visibility = 'visible';
    } else {
      divs[i].style.opacity = 0;
      divs[i].style.visibility = 'hidden';
    }
  }

  currentIndex = (currentIndex + 1) % divs.length;
}, 3000);
