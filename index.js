//      document.documentElement.style.overflow = 'hidden';
//    document.body.scroll = "no";
//  window.onload = function(){
//    document.getElementById('overlay').style.opacity = '1';
//    document.getElementById('overlay').style.transform = 'translateY(0)';
//    document.getElementById('header').style.opacity = '1';
//    document.getElementById('header').style.transform = 'translateY(0)'; 
//      document.documentElement.style.overflow = 'auto'; 
//   document.body.scroll = "yes";
//  }
function showNav () {
    document.getElementById('menu-container').style.transform = 'translateX(0px)';
    document.getElementById('everything').addEventListener('click', hideNav);  
    
}
 
function hideNav () {
    document.getElementById('menu-container').style.transform = 'translateX(100%)';  
    document.getElementById('everything').removeEventListener('click', hideNav);
}
  function scrollToSection(id) {
    hideNav();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
  window.onload = ()=>{
    document.getElementById('video-background').style.transform === 'scale(1.1)';
  }





function show(target) {
    document.getElementById(target).style.display = 'block';
}
function hide(target) {
    document.getElementById(target).style.display = 'none';
}

    window.addEventListener('scroll', scrollNav);
function scrollNav () {

    if (window.scrollY >= ((window.innerHeight) * 0.73)){
        document.getElementById('footer').style.zIndex = '-95';
        document.getElementById('header-sticky').style.padding = '10px 0px';
    }  

    else if (window.scrollY < ((window.innerHeight) * 0.73)){
        document.getElementById('footer').style.zIndex = '-101';
        document.getElementById('header-sticky').style.padding = '20px 0';

    }
}
