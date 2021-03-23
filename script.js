window.onscroll = function(){
    var scrollTop = window.pageYOffset;
    if(scrollTop > 750){
        document.getElementById('TopMenuText').classList.add('active');
        document.getElementById('TopMenu').classList.add('active');
    }else{
        document.getElementById('TopMenuText').classList.remove('active');
        document.getElementById('TopMenu').classList.remove('active');
    }
    if(scrollTop > 450){
        document.getElementById('content_text_header').classList.add('active');
    }else{
        document.getElementById('content_text_header').classList.remove('active');
    }
    if(scrollTop > 450){
        document.getElementById('About_us').classList.add('active');
        document.getElementById('content_1_text_side_div').classList.add('active');
        document.getElementById('content_1_text_mine_div').classList.add('active');
        document.getElementById('About_us_text_div_background').classList.add('active');
        document.getElementById('About_us_text').classList.add('active');
        document.getElementById('round_picture_bison').classList.add('active');
        document.getElementById('border_content_1').classList.add('active');
    }else{
        document.getElementById('About_us').classList.remove('active');
        document.getElementById('content_1_text_side_div').classList.remove('active');
        document.getElementById('content_1_text_mine_div').classList.remove('active');
        document.getElementById('About_us_text_div_background').classList.remove('active');
        document.getElementById('About_us_text').classList.remove('active');
        document.getElementById('border_content_1').classList.remove('active');
        document.getElementById('round_picture_bison').classList.remove('active');
    }
    if(scrollTop > 1000){
        document.getElementById('What_we_do').classList.add('active');
        document.getElementById('Read_more_content_2_txt').classList.add('active');
        document.getElementById('Read_more_content_2_BG').classList.add('active');
        document.getElementById('whatWeDo_background').classList.add('active');
        document.getElementById('WhatWeDo_text').classList.add('active');
        document.getElementById('border2').classList.add('active');
        document.getElementById('Content_2_picture_div').classList.add('active');
        
    }else{
        document.getElementById('What_we_do').classList.remove('active');
        document.getElementById('Read_more_content_2_txt').classList.remove('active');
        document.getElementById('Read_more_content_2_BG').classList.remove('active');
        document.getElementById('whatWeDo_background').classList.remove('active');
        document.getElementById('WhatWeDo_text').classList.remove('active');
        document.getElementById('border2').classList.remove('active');
        document.getElementById('Content_2_picture_div').classList.remove('active');

    }
    if(scrollTop > 2000){
        document.getElementById('Content_4').classList.add('active');
        document.getElementById('Port_border_1').classList.add('active');
        document.getElementById('Port_border_2').classList.add('active');
        
    }else{
        document.getElementById('Content_4').classList.remove('active');
        document.getElementById('Port_border_1').classList.remove('active');
        document.getElementById('Port_border_2').classList.remove('active');

    }
    if(scrollTop > 1700){
       document.getElementById("Our_works_BG").classList.add("active");
       document.getElementById("Our_works").classList.add("active");
       document.getElementById("Portfolio_text_mine").classList.add("active");

    }else{
       document.getElementById("Our_works_BG").classList.remove("active");
       document.getElementById("Portfolio_text_mine").classList.remove("active");
       document.getElementById("Our_works").classList.remove("active");
    }
    if(scrollTop > 3000){
       document.getElementById("youCan_text").classList.add("active");
    }else{
       document.getElementById("youCan_text").classList.remove("active");
    }
}
var img_port_1 = document.querySelector('.img_port_1');
var img_port_2 = document.querySelector('.img_port_2');
var img_port_3 = document.querySelector('.img_port_3');
var img_port_4 = document.querySelector('.img_port_4');
var img_port_5 = document.querySelector('.img_port_5');
var img_port_6 = document.querySelector('.img_port_6');

img_port_1.addEventListener("click", function(){
    document.querySelector(".img_port_2_div").classList.remove("active");
    document.querySelector(".img_port_6_div").classList.remove("active");
    document.querySelector(".img_port_3_div").classList.remove("active");
    document.querySelector(".img_port_4_div").classList.remove("active");
    document.querySelector(".img_port_5_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.toggle("active");

    document.querySelector(".img_port_2_div").classList.toggle("dark");
    document.querySelector(".img_port_6_div").classList.toggle("dark");
    document.querySelector(".img_port_3_div").classList.toggle("dark");
    document.querySelector(".img_port_4_div").classList.toggle("dark");
    document.querySelector(".img_port_5_div").classList.toggle("dark");
})
img_port_2.addEventListener("click", function(){
    document.querySelector(".img_port_2_div").classList.toggle("active");
    document.querySelector(".img_port_6_div").classList.remove("active");
    document.querySelector(".img_port_3_div").classList.remove("active");
    document.querySelector(".img_port_4_div").classList.remove("active");
    document.querySelector(".img_port_5_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.remove("active");

    document.querySelector(".img_port_1_div").classList.toggle("dark");
    document.querySelector(".img_port_6_div").classList.toggle("dark");
    document.querySelector(".img_port_3_div").classList.toggle("dark");
    document.querySelector(".img_port_4_div").classList.toggle("dark");
    document.querySelector(".img_port_5_div").classList.toggle("dark");
})
img_port_3.addEventListener("click", function(){
    document.querySelector(".img_port_5_div").classList.remove("active");
    document.querySelector(".img_port_3_div").classList.toggle("active");
    document.querySelector(".img_port_2_div").classList.remove("active");
    document.querySelector(".img_port_4_div").classList.remove("active");
    document.querySelector(".img_port_6_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.remove("active");

    document.querySelector(".img_port_1_div").classList.toggle("dark");
    document.querySelector(".img_port_6_div").classList.toggle("dark");
    document.querySelector(".img_port_2_div").classList.toggle("dark");
    document.querySelector(".img_port_4_div").classList.toggle("dark");
    document.querySelector(".img_port_5_div").classList.toggle("dark");
})
img_port_4.addEventListener("click", function(){
    document.querySelector(".img_port_4_div").classList.toggle("active");
    document.querySelector(".img_port_3_div").classList.remove("active");
    document.querySelector(".img_port_2_div").classList.remove("active");
    document.querySelector(".img_port_5_div").classList.remove("active");
    document.querySelector(".img_port_6_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.remove("active");

    document.querySelector(".img_port_1_div").classList.toggle("dark");
    document.querySelector(".img_port_6_div").classList.toggle("dark");
    document.querySelector(".img_port_3_div").classList.toggle("dark");
    document.querySelector(".img_port_2_div").classList.toggle("dark");
    document.querySelector(".img_port_5_div").classList.toggle("dark");
})
img_port_5.addEventListener("click", function(){
    document.querySelector(".img_port_5_div").classList.toggle("active");
    document.querySelector(".img_port_4_div").classList.remove("active");
    document.querySelector(".img_port_3_div").classList.remove("active");
    document.querySelector(".img_port_2_div").classList.remove("active");
    document.querySelector(".img_port_6_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.remove("active");

    document.querySelector(".img_port_1_div").classList.toggle("dark");
    document.querySelector(".img_port_6_div").classList.toggle("dark");
    document.querySelector(".img_port_3_div").classList.toggle("dark");
    document.querySelector(".img_port_2_div").classList.toggle("dark");
    document.querySelector(".img_port_4_div").classList.toggle("dark");
})
img_port_6.addEventListener("click", function(){
    document.querySelector(".img_port_6_div").classList.toggle("active");
    document.querySelector(".img_port_5_div").classList.remove("active");
    document.querySelector(".img_port_4_div").classList.remove("active");
    document.querySelector(".img_port_3_div").classList.remove("active");
    document.querySelector(".img_port_2_div").classList.remove("active");
    document.querySelector(".img_port_1_div").classList.remove("active");

    document.querySelector(".img_port_1_div").classList.toggle("dark");
    document.querySelector(".img_port_5_div").classList.toggle("dark");
    document.querySelector(".img_port_3_div").classList.toggle("dark");
    document.querySelector(".img_port_2_div").classList.toggle("dark");
    document.querySelector(".img_port_4_div").classList.toggle("dark");
})

function changeItem(){
    document.getElementById("view_All_works_BG").classList.add("mouseOn")
    document.getElementById('view_All_works').classList.add("mouseOn")
}
function rechangeItem(){
    document.getElementById("view_All_works_BG").classList.remove("mouseOn")
    document.getElementById('view_All_works').classList.remove("mouseOn")
}
function readMore(){
    document.getElementById("Read_more_content_2_txt").classList.add("mouseOn")
    document.getElementById("Read_more_content_2_BG").classList.add("mouseOn")
}
function ReversReadMore(){
    document.getElementById("Read_more_content_2_txt").classList.remove("mouseOn")
    document.getElementById("Read_more_content_2_BG").classList.remove("mouseOn")
}
var img_port_1_div = document.querySelector(".img_port_1_div");
var MouseHover = document.querySelector(".img_port_1_div.active:hover");
