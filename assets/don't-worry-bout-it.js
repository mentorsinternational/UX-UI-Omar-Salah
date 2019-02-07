let keylog = ""
let target = document.getElementsByClassName('dont-worry-about-it')

function checkCode (e) {
    keylog += e.key
    if(keylog.includes('adamapproves')){
        console.log(keylog.includes('adamapproves'));
        keylog = ""
        TweenMax.to(target, 2, {bottom:500})
        TweenMax.to(target, 2, {delay: 3, bottom:-500})
    }else if ( keylog.includes('adamswatching')){
        keylog = ""
        TweenMax.to(target, 2, {bottom:-300})
        TweenMax.to(target, 2, {delay: 7, bottom:-500})
    }

}

window.addEventListener('keydown', checkCode)

