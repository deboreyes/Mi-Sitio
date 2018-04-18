var photos = ["imgs/slider1.jpg", "imgs/slider6.jpg", "imgs/slider7.jpg","imgs/slider5.png"]
var numberPhotos = photos.length;
var gallery = document.getElementById('gallery');
var imgs = [];
var dotList = [];
var currentPhoto = 0;
var dots = document.getElementById('dots');
var timeout = null;

// Función que carga las imágenes y los dots con su respectiva funcionabilidad.
function loadSlider() {
  for (let k = 0; k < numberPhotos; k++ ) {
    var img = document.createElement('img');
    var dot = document.createElement('li');
    img.src = photos[k];
    imgs.push(img);
    dot.classList.add("dot");
    dotList.push(dot);
    gallery.appendChild(img);
    dots.appendChild(dot);
    //Funcionabilidad dot.
    dot.onclick = function() {
      setCurrentPhoto(k)
    }
  }
  //Funcionabilidad gallery.
  gallery.onclick = function() {
    setCurrentPhoto((currentPhoto + 1) % numberPhotos);
  }
}

// Función que establece qué foto se muestra y activa el dot correspondiente.
function setCurrentPhoto(index) {
  currentPhoto = index;
  for (var j = 0; j < numberPhotos; j++) {
    dotList[j].classList.remove("active");
    imgs[j].style.display = "none";
  }
  imgs[currentPhoto].style.display = "block";
  dotList[currentPhoto].classList.add("active");
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(gallery.onclick, 2000);
}

(function () {
  gallery.addEventListener('mouseover', function () {
    var caption = document.getElementById('captions');
    caption.style.display = "block";
  })
  gallery.addEventListener('mouseout', function () {
    var caption = document.getElementById('captions');
    caption.style.display = "none";
  })

})()

loadSlider();
setCurrentPhoto(0);
