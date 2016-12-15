//slideshow
   var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("slide");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex> slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 1000); // Change image every 2 seconds
        }
//end_slideshow



$(document).ready(function() {

    var id_button = '#pagetop';
    var id_tabmenu = '#tabmenu';

    // Kéo xuống khoảng cách 220px thì xuất hiện button
    var offset = 1020;
    var offtab = 220;



    // THời gian di trượt là 0.5 giây
    var duration = 900;

    // Thêm vào sự kiện scroll của window, nghĩa là lúc trượt sẽ
    // kiểm tra sự ẩn hiện của button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(id_button).fadeIn(duration);
        } else {
            $(id_button).fadeOut(duration);
        }
    });
    //kiem tra an hien tabmenu
      $(window).scroll(function() {
        if ($(this).scrollTop() > offtab) {
            $(id_tabmenu).fadeIn(duration);
        } else {
            $(id_tabmenu).fadeOut(duration);
        }
    });
    // Thêm sự kiện click vào button để khi click là trượt lên top
     $(id_button).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

   

});

 