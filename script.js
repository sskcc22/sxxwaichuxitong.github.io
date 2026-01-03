// 简单的表单处理脚本
var form = document.getElementById('contact-form');
if (form) {
    form.onsubmit = function(event) {
        event.preventDefault();
        alert('表单已提交！');
        return false;
    };
}

// 首页工区图片轮播
var workGallerySlides = document.querySelectorAll('.work-gallery-slide');
if (workGallerySlides.length > 0) {
    var currentWorkSlide = 0;
    setInterval(function() {
        workGallerySlides[currentWorkSlide].classList.remove('active');
        currentWorkSlide = (currentWorkSlide + 1) % workGallerySlides.length;
        workGallerySlides[currentWorkSlide].classList.add('active');
    }, 3000);
}
