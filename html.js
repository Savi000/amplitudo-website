// const footer = document.querySelector("footer");
// const contactQuestion = document.querySelector(".contact-question");
// const nav = document.querySelector(".nav");
// const servicesLinks = document.querySelectorAll(".service-link");
// const blogs = document.querySelectorAll(".blog");
// const productsBg = document.querySelectorAll(".background-div");

// mozda da ne koristim innerHTML za ovo nego append child

// servicesLinks.forEach((service) => {
//   // if service.classList.includes("Marketing npr")
//   // let serviceClass = service.classList[service.classList.length - 1];
//   let serviceTitle = service.dataset.title;
//   let serviceImageUrl = service.dataset.image;

//   // if (serviceClass.includes(".")) {
//   //   serviceClass = serviceClass.split(".").join(" ");
//   // }
//   //   rjesenje mozda da onLoad funkciju pozoves a tag ali kako pozvati onLoad kad bi mogao nekako i posaljes parametre tj.sliku i na osnovu toga u src renderujes sliku koja je poslata iz html onLoad sa parametrimaq
//   service.innerHTML = `<div class="service">
//   <div class="service__text">
//   <h1>${serviceTitle}</h1>
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
//       minus ipsum cum molestiae dolores modi quos libero! Lorem ipsum
//       dolor sit amet consectetur, adipisicing elit.</p></div>
//   <div class="service__img">
//     <img src="/assets/${serviceImageUrl}" alt="marketing" />
//   </div>
// </div>`;
// });
let screenWidth;

//<i onclick="toggleClass(event)" class="fas fa-bars"hamburgerButton" ></i>

// nav.innerHTML = `
// <div onclick="toggleClass(event)" class="hamburger" id="hamburger-1">
// <span style="pointer-events: none;" class="line"></span>
// <span style="pointer-events: none;" class="line"></span>
// <span style="pointer-events: none;" class="line"></span>
// </div>
// <img
//   class="nav__image"
//   alt="logo"
//   src=${nav.dataset.page ? "./assets/logoTransparent.svg" : "./assets/logo.png"}
//   width="30"
//   height="30"
//   />
//   <ul class="nav__list" style="${nav.dataset.page && "color: white;"}"}"}">
//   <li><a>Home</a></li>
//   <li ><a href="index.html">Services</a></li>
//   <li><a >StartUp</a></li>
//   <li><a >Career</a></li>
//   <li><a >Company</a></li>
//   <li><a href="blog.html">Blog</a></li>
//   <button style="${
//     nav.dataset.page && "border: 1px solid white;color:white;"
//   }" class="nav__btn">cg</button>
//   </ul>`;

// if (productsBg) {
//   productsBg.forEach((product) => {
//     let imageSrc = product.dataset.image;
//     let title = product.dataset.header;
//     let text = product.dataset.text;

//     product.innerHTML = `<div class="products">
//     <div class="products__text">
//       <h1>${title}</h1>
//       <p>${text}</p>
//       <div class="products__btn-div">
//         <button><i class="fas fa-arrow-right"></i></button>
//         <h2>read all</h2>
//       </div>
//     </div>
//     <div class="products__image">
//       <img src="./assets/${imageSrc}" alt="slika" />
//     </div>
//   </div>`;
//   });
// }

// if (footer) {
//   footer.innerHTML = `<div class="first-section">
// <h2>Interested in our services?</h2>
// <p class="footer-paragraph">contact us</p>
// </div>
// <div class="rectangle" >
// <div style="background: green; border-radius: 50%;  padding: 10px 10px; margin-right:10px">
// <img src="./assets/logoTransparent.svg" alt="logo"/>
// </div>
// <p>Hello from the center of the world!</p>
// <div class="pointer"></div>
// </div>
// <div class="map-point"></div>
// <div>
// <div class="footer_logo">
//   <img src="./assets/Group 386.svg" alt="logo" />
// </div>
// <p>Boulevard of St. Petar Cetinjski 56</p>
// <p>Podgorica, Montenegro</p>
// <!-- border -->
// <a style="text-decoration: none; color: white;"
//   href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHkSmJCpqjRdPsjXqbJsLVKNMPmSnjVxBqhfCzPhwJrZzbVQqlDFwQttGvlntTXVfnbCQ"
//   >info@amplitudo.me</a
// >
// <a href="tel:+382-20-223-244"></a>
// </div>
// <div class="social">
// <p>Follow us on social media</p>
// <a><i class="fab fa-facebook"></i></a>
// <a><i class="fab fa-instagram"></i></a>
// <a><i class="fab fa-linkedin"></i></a>
// <a><i class="fab fa-twitter"></i></a>
// <a><i class="fab fa-behance-square"></i></a>
// </div>
// <p>All rights reserved 2019 Amplitudo Ltd.</p>
// `;
// }
// if (blogs) {
//   blogs.forEach((blog) => {
//     let imageSrc = blog.dataset.image;

//     blog.innerHTML = `<div style="background-image: url(${imageSrc})" class="blog__img">
//   <div class="blog__rectangle">
//     <div class="user-text">
//       <h2>
//         What I have learned over the years working as design assistant
//       </h2>
//       <p>//25.08.2019</p>
//     </div>
//     <div class="user">
//       <img src="./assets/Group 1065.png" alt="avatar" />
//     </div>
//   </div>
// </div>`;
//   });
// }

// if (footer) {
//   footer.innerHTML = `<img src="./assets/footer.png"/>`;
// }
// if (contactQuestion) {
//   contactQuestion.innerHTML = `<div class="contact-question"><div><h1>Like what you see?</h1>
// <p>Let's talk about it</p>
// <a href="contact.html"><button>contact us</button></a>
// </div>
// <div >
// <img src="./assets/2-parrot-png-images-download.png" alt="parrot" />
// </div>
// </div>`;
// }
