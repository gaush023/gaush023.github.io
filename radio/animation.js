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

window.onload = function() {
    let currentIndex = 0;
    let interval = 7000;  
    var divs = document.querySelectorAll('#introduction-container > .rt-c2');
    let container = document.getElementById("container");

    if (divs.length > 0) {
        divs[0].classList.add('active');
    }

    setInterval(function() {
        divs[currentIndex].classList.remove('active');

        let firstChild = container.children[0];
        container.appendChild(firstChild);

        currentIndex = (currentIndex + 1) % divs.length;
        divs[currentIndex].classList.add('active');

    }, interval);
}
