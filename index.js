// document.documentElement.style.overflow = 'hidden';
// document.body.scroll = "no";

window.onload = ()=>{
    // document.getElementById('overlay').style.opacity = '1';
    // document.getElementById('overlay').style.transform = 'translateY(0)';
    // document.getElementById('header').style.opacity = '1';
    // document.getElementById('header').style.transform = 'translateY(0)'; 
    // document.documentElement.style.overflow = 'auto'; 
    // document.body.scroll = "yes";
    const footer = document.getElementById('footer').getClientRects();
    console.log(footer[0].height + 'px');
    document.getElementById('everything-under-top').style.marginBottom = footer[0].height + 'px';
    document.getElementById('video-background').style.transform = 'scale(1)';
}

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

function show(target) {
    document.getElementById(target).style.display = 'block';
}
function hide(target) {
    document.getElementById(target).style.display = 'none';
}

window.addEventListener('scroll', scrollNav);

function scrollNav () {
    if (window.scrollY >= ((window.innerHeight) * 0.73)) {
        document.getElementById('footer').style.zIndex = '-95';
        document.getElementById('header-sticky').style.padding = '10px 0px';
    } else if (window.scrollY < ((window.innerHeight) * 0.73)) {
        document.getElementById('footer').style.zIndex = '-101';
        document.getElementById('header-sticky').style.padding = '20px 0';
    }
}

const video = {
    appendVid: (name) => {
        if (name === 'franzese'){
            video.buildVid('https://www.youtube.com/embed/gMvmhN1CKls')
        } else if (name === 'pathway') {
            video.buildVid('https://player.vimeo.com/video/232508495')
        }
    },
    buildVid: (url) => {
        const sponsor = document.getElementById('fixed');
        var modalWrapper = document.createElement('div');
        modalWrapper.classList.add('outer-modal');
        var modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add('shadow-modal');
        modal.id = 'modal';
        var iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.src = url;
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay;encrypted-media';
        var closeWrapper = document.createElement('div');
        closeWrapper.classList.add('close-button-wrapper');
        closeWrapper.id = 'close';
        var close = document.createElement('div');
        close.onclick = () => video.removeModal();
        close.classList.add('close-button');
        close.innerHTML = 'X';
        closeWrapper.appendChild(close);
        modalWrapper.appendChild(closeWrapper);
        modal.appendChild(iframe);
        modalWrapper.appendChild(modal);
        sponsor.appendChild(modalWrapper);
        setTimeout(function() {
            document.getElementById('close').style.transform = 'translate(0px, 0px)';
            document.getElementById('close').style.opacity = '1';
            document.getElementById('modal').style.transform = 'translateY(0px)';
            document.getElementById('modal').style.opacity = '1';
        }, 001);
    },
    removeModal: () => {
        document.getElementById('close').style.transform = 'translate(-50px, 350px)';
        document.getElementById('modal').style.transform = 'translateY(300px)';
        document.getElementById('close').style.opacity = '0';
        document.getElementById('modal').style.opacity = '0';
        let parent = document.getElementById('fixed');
        setTimeout(function() {
           parent.removeChild(parent.childNodes[parent.childNodes.length - 1]);
        }, 300);
    }
}
