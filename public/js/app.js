let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0]
btn.onclick = function() {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none"
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}



// menu 


let menutitles = document.querySelectorAll(".pageTitles .title")
let menudivs = document.querySelectorAll(".ourMenu-body")

menutitles.forEach((title) => {
  title.addEventListener("click", () => {
    menudivs.forEach((div) => {
      div.classList.remove("active")
      if (title.id === div.id) {
        div.classList.add("active")
      }
    });

    menutitles.forEach((ele) => {
      ele.classList.remove("active")
    });

    title.classList.add("active")
  });
})



// testem




let containers = document.querySelectorAll(".carousel-container");
let currentIndex = 0;

const slideImage = (index, container) => {
    let slides = container.querySelectorAll(".slide");
    let camera = container.querySelector(".carousel");
    let slideWidth = slides[0].clientWidth;
    let indicators = container.querySelectorAll('.indicator');

   
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    indicators.forEach(indicator => {
        indicator.classList.remove('activeIndicator');
    });
    indicators[index].classList.add("activeIndicator");

   
    camera.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
};


containers.forEach(container => {
 
    let slides = container.querySelectorAll(".slide")
    let group = document.createElement("div")
    group.classList.add("indicators-grp")
    container.appendChild(group)

    slides.forEach((slide, i) => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        group.appendChild(indicator)
        
      
        indicator.addEventListener("click", () => {
            slideImage(i, container);
        })
    })

    group.querySelector(".indicator").classList.add('activeIndicator')

    

})

// navbar-respo


let menu=document.querySelector(".menu1")
let nav=document.querySelector(".nav-links")
let close=document.querySelector(".close1")
menu.addEventListener("click",()=>{
    nav.style.display="flex"
})
close.addEventListener("click",()=>{
    nav.style.display="none"
})




// galerry

let current = 2
function showSlides() {

  let images = document.querySelectorAll('.carouseel-img')
  let dots = document.querySelectorAll('.dot')

 
  for (let i = 0; i < images.length; i++) {
   
    images[i].classList.remove('active')

    if (i >= current - 2 && i <= current + 2) {
      images[i].style.display = 'inline'
    } else {
      images[i].style.display = 'none'
    }
 
    if (i === current) {
      images[i].classList.add('active')
    }
  }


  for (let i = 0; i < dots.length; i++) {
   
    if (i === current) {
      dots[i].classList.add('active')
    } else {
      dots[i].classList.remove('active')
    }
  }
}


function moveSlide(n) {
  let images = document.querySelectorAll('.carouseel-img')

 
  current = current + n


  if (current < 0) {
    current = 0;
  }
  if (current >= images.length) {
    current = images.length - 1
  }

  showSlides()
}
function goToSlide(n) {
  current = n
  showSlides()
}

showSlides()