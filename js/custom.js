/*---------------------------------
[Master Javascript]

Project: Travel

-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Travel = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Travel Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Homeslider();
			this.Testimonial_crousel();
			this.Brandcrousel();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.MailFunction();
			this.wowanimation();
		},
		/*-------------- Travel Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		
		//caption slider
		Homeslider: function() {
			if($(".banner_slider").length > 0){ 
				$('.banner_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:false,
					autoplayTimeout:4000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:true,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					}
				})
			}
		},
		//Testimonial slider
		Testimonial_crousel: function() {
			if($(".test_slider").length > 0){ 
				$('.test_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:true,
					autoplayTimeout:4000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:true,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					}
				})
			}
		},
		//Brands crousel
		Brandcrousel: function() {
			if($(".brand_crousel").length > 0){ 
				$('.brand_crousel').owlCarousel({
					loop:true,
					margin:5,
					items:5,
					autoplay:true,
					autoplayTimeout:3000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						480:{
							items:2      
						},
						600:{
							items:3
						},
						768:{
							items:4
						},
						1000:{
							items:5
						}
					}
				})
			}
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".middle_menu").slideToggle(500);
			});
		},
		//Dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () <= 991){
				$(".middle_menu ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
				$(".dropdown_toggle").append("<span class='caret_down'></span>");
				$(".caret_down").on("click",function(){
					$(this).toggleClass("caret_up");
					$(this).prev("ul").slideToggle();
					//$('.caret_down').not(this).prev("ul").slideUp();
					//$('.caret_down').not(this).removeClass("caret_up");
				});
			}
			else {
				
			}
		},
		//contact form mail script
		MailFunction:function(){
			$('.submit_btn').on('click', function(){
				var name=$('#your_name').val();
				var email=$('#your_email').val();
				var phone=$('#phone_number').val();
				var u_msg=$('#your_message').val();
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':name,
						'useremail':email,
						'userphone':phone,
						'usermsg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#your_name').val("");
							$('#your_email').val("");
							$('#phone_number').val("");
							$('#your_message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#your_name').val(name);
							$('#your_email').val(email);
							$('#phone_number').val(phone);
							$('#your_message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
		//animation on page scroll
		wowanimation:function(){
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
   };
	Travel.init();
	//window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
	//window scroll function
	$(window).bind('scroll', function() {
		var scroll_top = $(".pl_header_section").next("div").outerHeight();
        if ($(window).scrollTop() > scroll_top ) {
            $('.pl_header_section').addClass('fixed_top_menu');
        }
		else {
            $('.pl_header_section').removeClass('fixed_top_menu');
        }
    });
})(jQuery);
