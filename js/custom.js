$(function(){
    
    var accordionButtons = $('.service-collapse-wrapper .nav li a');
    // Attach a click event handler to each accordion button
    accordionButtons.click(function(event) {
      // Check if the current accordion item is already open
      var isOpen = $(this).attr('aria-expanded') === 'true';
  
      if (isOpen) {
        // Prevent the default behavior of collapsing the accordion
        event.preventDefault();
        event.stopPropagation();
      }
    });

	// scrollbar js initialization
	$(".nano").nanoScroller();

	// cloning menu items in mobile
	$mobileNav = $('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content');
	$mobileNav.append($('.header .mynav > ul').clone());

    // Cloning ContactInfo
	// $mobileContactInfo = $('<div id="mobileContactInfo"></div>').appendTo('.offcanvas .nano .nano-content');
	// $mobileContactInfo.append($('.header .contactinfo').clone());

	

    // DropDown Handlings
    $('#mobileNav > ul > li > a').click(function(e){
        findIfHasChildren = $(this).parent().find('ul');
        
        if(findIfHasChildren.length > 0){
            findSubMenuDisplay = $(this).parent().find('ul').css('display');
            if(findSubMenuDisplay == 'block'){
            // $(this).parent().find('ul').slideUp(350);
            }
            else{
                $('#mobileNav ul li ul').not('.sub-dropdown').slideUp(350);
                $(this).parent().find('ul').not('.sub-dropdown').slideDown(350);
                e.preventDefault();
            }
        }
    })


})

document.getElementById('menu-toggle')
  .addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
  document.querySelector(".offcanvas").classList.toggle('show-offcanvas');
  if($("body").hasClass("nav-open")){
    $(".body-inactive").fadeIn("slow");

  }else{
    $(".body-inactive").fadeOut("slow");
  }
  $("#m-contacts-list").slideUp("slow").removeClass("open");
	var closeImg = document.getElementById("close-img");
	var phoneIcon = document.getElementById("phone-icon");
	  if(closeImg.style.display!=="none"){
		  closeImg.style.display="none"
		  phoneIcon.style.display="inline-block"
	  }
});
document.addEventListener("DOMContentLoaded", function() {
  var phoneIcon = document.getElementById("phone-icon");
  var closeImg = document.getElementById("close-img");
  
  // Add click event listener to m-contacts-btn
  document.getElementById("m-contacts-btn").addEventListener("click", function() {
      // Toggle visibility of phone icon and close image
      if (phoneIcon.style.display !== "none") {
          phoneIcon.style.display = "none";
          closeImg.style.display = "inline-block"; // Display close image
      } else {
          phoneIcon.style.display = "inline-block"; // Display phone icon
          closeImg.style.display = "none";
      }
  });
});

$(document).ready(function(){
  $("#m-contacts-btn").click(function(){
 
    
    document.body.classList.remove('nav-open');
    document.querySelector(".offcanvas").classList.remove('show-offcanvas');
    $("#m-contacts-list").slideToggle("slow");
    if ($("#m-contacts-list").css('display') === 'block') {
      $(".body-inactive").fadeIn("slow")
    } else {
      $(".body-inactive").fadeOut("slow")
    }
  });
});

jQuery(function(){
    // Showing/Hiding More Faqs
    $('.show-hide-more-faqs').click(function(e){
      e.preventDefault();
      findFAQHeight = $(this).parent().prev('.hide-initially').height();
      if(findFAQHeight == 0){
        $(this).parent().prev('.hide-initially').addClass('show-more-faqs');
      }
      $(this).addClass('hide-this-button');
    })
})

$(".body-inactive").on("click", function(){
  changeButtons()
})

function changeButtons(){
  var phoneIcon = document.getElementById("phone-icon");
  var closeImg = document.getElementById("close-img");
  closeImg.style.display = "none";
  phoneIcon.style.display = "inline-block"; // Display close image
  $(".show-offcanvas").removeClass("show-offcanvas");
  $(".nav-open").removeClass("nav-open");
  $("#m-contacts-list").slideUp("slow");
  $(".body-inactive").fadeOut("slow");
}



// Hides LEARN MORE on mobile
function updateButtonText() {
  // Check if the screen width is 768px or smaller (mobile)
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.btn, .btn-primary, .btn-white').forEach(button => {
      // Remove "Learn More" if it exists
      button.textContent = button.textContent.replace(/Learn More\s?/gi, '').trim();
    });
  } else {
    document.querySelectorAll('.btn-primary').forEach(button => {
      // Optionally, restore the text or perform any desktop-specific logic
      // This block is left empty if no desktop adjustments are needed
    });
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateButtonText);

// Run on window resize
window.addEventListener("resize", updateButtonText);


$(document).ready(function () {

  $('.testimonials-slider-v4').slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});


// animation
function scrollTrigger(selector, options = {}) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Stop observing once active
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
}

// Example usage
scrollTrigger('.animation-box', {
  rootMargin: '0px 0px -200px 0px' // Trigger slightly before element enters viewport
});
