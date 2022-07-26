$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true
  });

  const menubtn = document.querySelector('.menu__button');
  const popup = document.querySelector('.popup');
  const logo = document.querySelector('.logo');
  const logoWhite = document.querySelector('.logo-white')
  const body = document.body

  const tabBtns = document.querySelectorAll('.menu-popup__btn');
  const tabs = document.querySelectorAll('.tab');
  const header = document.querySelector('.header');

  menubtn.addEventListener('click', function(){
    popup.classList.toggle('active');
    menubtn.classList.toggle('clicked');
    logo.classList.toggle('disabled');
    logoWhite.classList.toggle('active');
    body.classList.toggle('no-scroll');
    header.classList.toggle('popup-active')
  })

  for(let tabBtn of tabBtns){
    tabBtn.addEventListener('click', function(){
      let tabId = tabBtn.getAttribute('data-tab');
      let curTab = document.querySelector(tabId)
      for(let tabBtn of tabBtns){
        tabBtn.classList.remove('active')
      }
      for(let tab of tabs){
        tab.classList.remove('active')
      }
      tabBtn.classList.add('active');
      curTab.classList.add('active');
    })
  }
  
  

  