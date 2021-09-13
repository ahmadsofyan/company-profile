const allCarouselBtn = document.querySelectorAll('.carousel-indicators .bulat');
allCarouselBtn.forEach((carouselBtn) => {
  setInterval(() => {
    if(carouselBtn.classList.contains('active')){
      carouselBtn.style.width = "48px";
      carouselBtn.style.borderRadius = "10% / 50%";
      carouselBtn.style.transition = ".3s";
    } else {
      carouselBtn.style.width = "10px";
      carouselBtn.style.borderRadius = "50%";
    }
  }, 1000);
});

const carouselItem = document.querySelectorAll('.carousel-inner .carousel-item');
for(let activeCarousel of carouselItem){
  setInterval(() => {
    if(document.defaultView.innerWidth <= 992){
      if(activeCarousel.classList.contains('active')){
        const txtHeader1 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .txt-header1');
        const txtHeader2 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .txt-header2');
        const paraf1 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .text1');
        const paraf2 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .textbawah1');
        // const parafFooter1 = document.querySelector('.footer-bottom .paraf-footer1');
        // const parafFooter2 = document.querySelector('.footer-bottom .paraf-footer2');
        // const parafFooter3 = document.querySelector('.footer-bottom .paraf-footer3');
        txtHeader1.innerText = 'Jasa Digital';
        txtHeader2.innerText = 'Marketing Indonesia';
        paraf1.innerText = 'Solusi untuk segala kendala dalam';
        paraf2.innerText = 'pengembangan bisnis online anda.';
        // parafFooter1.innerText = 'Ruko Sedayu square Blok N No.1 Jl.';
        // parafFooter2.innerText = '';
        // parafFooter3.innerText = '';
        const carouselImg = document.querySelector('.carousel-inner .carousel-item.active img').getAttribute('src');
        const carouselMobileBg = document.querySelector('.carousel-inner .carousel-item.active .carousel-mobile-bg');
        carouselMobileBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0) 10%, rgba(0,0,0,0.8)), url("./${carouselImg}")`;
      }
    } else {
      const txtHeader1 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .txt-header1');
      const txtHeader2 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .txt-header2');
      const paraf1 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .text1');
      const paraf2 = document.querySelector('.carousel-inner .carousel-item.active .carousel-caption .textbawah1');
      // const parafFooter1 = document.querySelector('.footer-bottom .paraf-footer1');
      // const parafFooter2 = document.querySelector('.footer-bottom .paraf-footer2');
      // const parafFooter3 = document.querySelector('.footer-bottom .paraf-footer3');
      txtHeader1.innerText = 'Jasa Digital Marketing';
      txtHeader2.innerText = 'Indonesia';
      paraf1.innerText = 'Solusi untuk segala kendala dalam pengembangan';
      paraf2.innerText = 'bisnis online anda.';
      // parafFooter1.innerText = 'Ruko Sedayu square Blok N No.1 Jl.Kencana Timur';
      // parafFooter2.innerText = 'No.2, Cengkareng Barat,Cengkareng,Jakarta Barat';
      // parafFooter3.innerText = '11730';
    }
  }, 1000);
}