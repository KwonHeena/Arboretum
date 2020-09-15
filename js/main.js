
//section01  Script
// 디바이스 크기가 작아지면 메뉴를 토글방식으로 변경
$(function(){
    $(".g-btn").click(function(){
        $(".menu li a").slideToggle();
    });
});

/**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
if (jQuery(window).width() > 0) {
jQuery(window).on("scroll",function(ev){
if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
    jQuery('.menu').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
}
else{
    jQuery('.menu').removeClass('fixed');
}
return false;
});
}
/**마우스 부드럽게 해당위치로 이동**/
$(function(){
$(".menu0").click(function(){
var offset = $("#section01").offset();
$("html,body").animate({scrollTop : offset.top}, 800);
});
$(".menu1").click(function(){
    var offset = $("#section01").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
});
$(".menu2").click(function(){
    var offset = $("#section02").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
}); 
$(".menu3").click(function(){
    var offset = $("#section03").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
}); 
$(".menu4").click(function(){
    var offset = $("#section04").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
}); 
$(".menu5").click(function(){
    var offset = $("#section05").offset();
    $("html,body").animate({scrollTop : offset.top}, 800);
}); 
});

//section02 WOW Script
new WOW().init();

//section04 Swiper Script
 var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },   
    },
});
//section04 Modal Script
function openModal(modalname){
    document.get
    $("#modal").fadeIn(300);
    $("."+modalname).fadeIn(300);
}

$("#modal, .close").on('click',function(){
    $("#modal").fadeOut(300);
    $(".modal-con").fadeOut(300);
});

//section05 Map Script
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.801547, 126.874017), // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/logo1.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(30, 50), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(16, 65)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new kakao.maps.LatLng(37.801547, 126.874017); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition,
image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
'  <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=7892614" target="_blank">' +
'    <span class="sec05-title">벽초지수목원</span>' +
'  </a>' +
'</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.801547, 126.874017);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
map: map,
position: position,
content: content,
yAnchor: 1 
});