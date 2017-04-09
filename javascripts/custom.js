$(document).ready(function() {
	// Menu responsive
    $(".toggle-menu").click(function() {
        $(".header-top .box-menu .menu").slideToggle();
    });
    $(".title-left").click(function() {
        $("#duan .top-title .title-right").slideToggle();
    });
});
$(document).ready(function() {
    var id_button = '.btn-top';
    var id_trangchu = '#trang-chu';
    var id_linhvuc = '#linh-vuc';
    var id_tintuc = '#tin-tuc';
    var id_lienhe = '#lien-he';
    var id_duan = '#du-an';
    // Kéo xuống khoảng cách 220px thì xuất hiện button
    var offset = 1020;
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
    // Thêm sự kiện click vào button để khi click là trượt lên top
     $(id_button).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
      //TrangChu
     $(id_trangchu).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
     //linhvuchoatdong
     $(id_linhvuc).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 400}, duration);
        return false;
    });
     //Tin tuc
     $(id_tintuc).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 995}, duration);
        return false;
    });
      //Du An
     $(id_duan).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 690}, duration);
        return false;
    });
       //Lien He
     $(id_lienhe).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 1100}, duration);
        return false;
    });
});