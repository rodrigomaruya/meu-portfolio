AOS.init();

const image = document.querySelectorAll(".tecnologia_img");

let n = -1;
let ascending = true;

function shadow() {
  if (ascending) {
    n++;
    if (n >= image.length) {
      ascending = false;
      n = image.length - 2;
    }
  } else {
    n--;
    if (n <= 0) {
      ascending = true;
    }
  }

  image.forEach((item) => {
    item.classList.remove("shadow");
  });

  image[n].classList.add("shadow");
}

setInterval(shadow, 500);
