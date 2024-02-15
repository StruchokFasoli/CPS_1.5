var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let brands_repair__list =  document.querySelector('.brands_repair__list')
let brands_repair__card = brands_repair__list.querySelectorAll('.brands_repair__card')
let more_info__button = document.querySelector('.more_info__button')
let window_width = document.body.clientWidth
let flag = false

window.addEventListener("resize", function() {
  window_width = document.body.clientWidth
  not_active_btn(flag)
},);

function not_active_btn(flag){
  if(!flag){
    let count
    window_width == 1120? count = 8: count = 6
    for(let i = 0; i < brands_repair__card.length; i++){
      if( i < count){
        brands_repair__card[i].style.display = 'flex'
      } else {
        brands_repair__card[i].style.display = 'none'
      }
    }
  }
}

function initial_barnd_list(){
  let count
  window_width == 1120? count = 8: count = 6
  for(let i = count; i < brands_repair__card.length; i++){
    brands_repair__card[i].style.display = 'none'
  }
}


window.onload = initial_barnd_list()

more_info__button.addEventListener('click', function () {
  if(!flag){
    brands_repair__card.forEach(el => el.style.display = 'flex')
    more_info__button.textContent = 'Скрыть'
    more_info__button.classList.add('active');
    flag = true
  } else {
    initial_barnd_list()
    more_info__button.textContent = 'Показать все'
    more_info__button.classList.remove('active');
    flag = false
  }
});
