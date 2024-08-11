function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  const bannerImages = [
    "assets/img/banner-farmacia.jpeg",
    "assets/img/banner-farmacia.jpeg",
    "assets/img/banner-farmacia2.jpeg",
    "assets/img/banner-farmacia3.jpeg",
    "assets/img/banner-farmacia4.jpeg",
    "assets/img/banner-farmacia5.jpeg",
    "assets/img/banner-farmacia5.jpeg",
  ];
  
  let currentIndex = 0;
  
  function changeBannerImage() {
    const bannerImageElement = document.getElementById('bannerImage');
    currentIndex = (currentIndex + 1) % bannerImages.length;
    bannerImageElement.src = bannerImages[currentIndex];
  }
  
  setInterval(changeBannerImage, 1000);
  
  function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
  }