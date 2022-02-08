const links = document.querySelectorAll(".nav__links ul li a");
// odje selectamo navList dok se html ucita jer je prva htmlo skripta pa odje nije null
// const navList = document.querySelector(".nav ul");
const navList = document.querySelector(".nav__links");
const contactNav = document.querySelector(".contact-nav");
const contactNavList = document.querySelector(".contact-nav__links");
const nav = document.querySelector(".nav");
let sliderList = document.querySelector(".slider-list");
let sliderItems = document.querySelectorAll(".slider-list li");
const servicesLink = document.querySelector('.services-nav-link');
const imageText = document.querySelector(".image-text h2");
const currentBtn = document.querySelector('.current-btn')
const dropdownContent = document.querySelector('.dropdown__content');
const matchingButtons = document.querySelectorAll('.dropdown button');
const footerLogo = document.querySelector('.footer-logo');
const locationFooter = document.querySelector('.location-footer');
const footerContact = document.querySelector('.footer-contact')
const footerSocial = document.querySelector('.social');
const navDropdown = document.querySelector('.dropdown-services');
const navDropdownContent = document.querySelectorAll('.dropdown-services__content');
const blogs = document.querySelectorAll('.blog');

const navDropdownLinks = document.querySelectorAll('.dropdown-services__content a');

// uzmi element footera pa onda kad dodje do njega animacija
let imgWidth;
let slideCounter = 0;
let currentItem = 0;
let sliderWidth;

window.addEventListener("scroll", () => {
  if (nav) {
    if (window.scrollY >= 50) {
      nav.style.boxShadow = "0 -5px 20px 0 rgba(40, 62, 81, 0.5)";
    } else {
      nav.style.boxShadow = "none";
    }
  }
  if (blogs) {
    blogs.forEach((blog) => {
      if (blog.getBoundingClientRect().top + 200 < window.innerHeight) {
        blog.style.animation = 'visibility 1s forwards';
      }
    })
  }
  if (footerLogo) {
    if (footerLogo.getBoundingClientRect().top < window.innerHeight) {
      footerLogo.classList.add('animation');
    }
    setTimeout(() => {
      if (locationFooter.getBoundingClientRect().top < window.innerHeight) {
        locationFooter.classList.add('animation')
      }
    }, 500)

    setTimeout(() => {
      if (footerContact.getBoundingClientRect().top < window.innerHeight) {
        footerContact.classList.add('animation')
      }
    }, 1000)
    setTimeout(() => {
      if (footerSocial.getBoundingClientRect().top < window.innerHeight) {
        footerSocial.classList.add('animation');
      }
    }, 1500)
  }
});


const changeLanguage = (event) => {
  let prevVal = currentBtn.textContent;
  currentBtn.textContent = event.target.textContent;
  event.target.textContent = prevVal;
  dropdownContent.classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches('.dropdown button')) {
    dropdownContent.classList.remove("show");
  }
}

const toggleClass = (event) => {
  event.target.classList.toggle("is-active");
  if (event.target.classList.value.split(" ").includes("is-active")) {
    document.body.parentElement.style.overflow = "hidden";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.parentElement.style.overflowY = "visible";
    document.body.style.overflowY = "visible";
  }
  if (navList) {
    navList.classList.toggle("active-list");
  } else {
    contactNavList.classList.toggle("active-list");
  }
};

window.onload = () => {
  //  zbog nav ne radi ostali kod

  if (sliderList) {
    sliderWidth = sliderList.offsetWidth;
  }
  if (sliderItems.length > 0) {
    sliderItems[0].children[0].classList.add('active-item');
    imageText.textContent = sliderItems[0].children[0].dataset.headerText;
    imgWidth = sliderItems[0].offsetWidth;
  }
  // childNodes ne valja jer i komentar i text sve zivo ti tu racuna zato ovdje mora 3 jer ima i comment
  // console.log(sliderItems[3].childNodes.classList.add('active-list'))
  // let tabletScreen = window.matchMedia("(max-width: 768px)");
  // let touchStart = 'ontouchstart' in window || navigator.maxTouchPoints;
  let tabletScreen = window.matchMedia("(max-width: 768px)");
  let touchStart = 'ontouchstart' in window || navigator.maxTouchPoints;

  // if (touchStart && contactNav) {
  //   contactNav.style.setProperty('width', '100%', 'important');
  // }


  if (touchStart) {
    iconDiv.appendChild(icon);

    if (tabletScreen.matches) {
      servicesLink.parentElement.appendChild(iconDiv);
    } else {
      servicesLink.parentElement.style.display = 'flex';
      servicesLink.parentElement.appendChild(iconDiv);
    }
  }


  if (blogs.length > 0) {
    blogs[0].style.animation = 'visibility 1s forwards'

    // blogs.forEach((blog) => {
    //   if (blog.getBoundingClientRect().top + 200 < window.innerHeight) {
    //     blog.style.animation = 'visibility 1s forwards';
    //   }
    // })
  }
  links.forEach((link) => {
    // link /services/softwaredev.html
    // location /services/softwaredev.html
    let splitd = location.href.split('/');
    let spltdLink = link.href.split('/');
    if (spltdLink.includes(splitd[4])) {
      // link.parentElement.classList.add('active')
      link.classList.add('active')
    }
    // if(splitd.includes('services' && spltdLink.includes('blog'))){
    //   link.parentElement.classList.add('active')
    // }
    // if (splitd.includes('blog') && spltdLink.includes('blog')) {
    // link.parentElement.classList.add('active')
    // }
    // if (link.href === location.href) {
    // console.log(link.parentElement); nema parent-a link
    // link.parentElement.classList.add("active");
    // }
  });
  // if (sliderItems[currentItem] || imageText) {
  //   sliderItems[currentItem].children.style.filter = "grayscale(0%)";
  //   imageText.textContent = `${sliderItems[currentItem].alt}`;
  // }
};

let iconDiv = document.createElement('div');
iconDiv.classList.add('icon-div');

let icon = document.createElement('i');
icon.classList.add("fas", "fa-caret-down");

iconDiv.addEventListener('click', () => {
  servicesLink.parentElement.nextElementSibling.classList.toggle('dropdown-under-link-active');
  servicesLink.parentElement.nextElementSibling.style.transition = '0.3s';


  navDropdown.classList.toggle('active-nav-dropdown');
  icon.classList.toggle('active-dropdown-icon')
  icon.style.transition = '0.5s';

  // navDropdownLinks.forEach((navLink) => {
  // navLink.classList.toggle('active-link-nav-dropdown');
  // })
})
window.addEventListener('resize', () => {

  let tabletScreen = window.matchMedia("(max-width: 768px)");
  let touchStart = 'ontouchstart' in window || navigator.maxTouchPoints;

  // if (touchStart && contactNav) {
  //   contactNav.style.setProperty('width', '100%', 'important');
  // }


  if (touchStart) {
    iconDiv.appendChild(icon);

    if (tabletScreen.matches) {
      servicesLink.parentElement.appendChild(iconDiv);
    } else {
      servicesLink.parentElement.style.display = 'flex';
      servicesLink.parentElement.appendChild(iconDiv);
    }
  }


  if (sliderItems.length > 0) {
    imgWidth = sliderItems[0].offsetWidth;
    sliderWidth = sliderList.offsetWidth;
  }

})


// setInterval(() => {
//   goNext();
// }, 1500)automatski caroussel clear interval mouseover


const changeItem = (index) => {
  for (let i = 0; i < sliderItems.length; i++) {

    if (i === index) {
      sliderItems[i].children[0].classList.add('active-item');
      imageText.textContent = sliderItems[i].children[0].dataset.headerText;

    } else {
      sliderItems[i].children[0].classList.remove('active-item');
    }
  }
}


const goNext = () => {
  let mediaScreen = window.matchMedia("(max-width: 768px)");

  slideCounter++;
  if (mediaScreen.matches) {
    if (slideCounter > 2) {
      slideCounter = 0;
    }
  } else {
    if (slideCounter > 1) {
      slideCounter = 0;
    }
  }


  sliderList.style.transform = `translateX(-${sliderWidth * slideCounter}px)`;

}
const goBack = () => {
  let mediaScreen = window.matchMedia("(max-width: 768px)");

  slideCounter--;

  console.log(slideCounter)
  if (mediaScreen.matches) {
    if (slideCounter < 0) {
      slideCounter = 2;
    }
  } else {
    if (slideCounter < 0) {
      slideCounter = 1
    }
  }

  sliderList.style.transform = `translateX(-${sliderWidth * slideCounter}px)`;

}
