$(document).ready(function() {
	//header
	$('.header-btn').on("click", function() {
		$('.header-btn').toggleClass('active')
		$('.header-menu').toggleClass('active')
		$('.header-search__content-wrapper').removeClass('active')
	})
	
	$('.header-search').on("click", function() {
		$('.header-search__content-wrapper').toggleClass('active')
		$('.header-search__content-wrapper').on("click", function(e){
			e.stopPropagation()
		})
		$('.header-menu').removeClass('active')
		$('.header-btn').removeClass('active')
	})
	
	// свайпер
	$('#shops').on('click', function(){
		$('#shops').addClass('active')
		$('#swiper-shops').addClass('active')
		$('#food').removeClass('active')
		$('#swiper-food').removeClass('active')
		$('#entertainment').removeClass('active')
		$('#swiper-entertainment').removeClass('active')
	})
	
	$('#food').on('click', function(){
		$('#food').addClass('active')
		$('#swiper-food').addClass('active')
		$('#swiper-shops').removeClass('active')
		$('#shops').removeClass('active')
		$('#entertainment').removeClass('active')
		$('#swiper-entertainment').removeClass('active')
	})
	
	$('#entertainment').on('click', function(){
		$('#entertainment').addClass('active')
		$('#swiper-entertainment').addClass('active')
		$('#shops').removeClass('active')
		$('#swiper-shops').removeClass('active')
		$('#food').removeClass('active')
		$('#swiper-food').removeClass('active')
	})
	
	const swiper = new Swiper('.swiper', {
		slidesPerView: 2.2,
		spaceBetween: 6,
		loop: true,
		breakpoints:{
			768:{
				slidesPerView: 1.3,
			},
			1024:{
				slidesPerView: 2.2,
			},
			1440:{
				slidesPerView: 3.3,
			},
			1920:{
				slidesPerView: 4.3,
			}
		}
	})
})