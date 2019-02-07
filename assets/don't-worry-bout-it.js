let xyz = ""
let zyx = document.getElementsByClassName('dont-worry-about-it')

function checkCode (e) {
    xyz += e.key
    if(xyz.includes('adamapproves')){
        console.log(xyz.includes('adamapproves'));
        xyz = ""
        TweenMax.to(zyx, 2, {bottom:500, rotation: 720})
        TweenMax.to(zyx, 2, {delay: 3, bottom:-500, rotation: -720})
    }else if ( xyz.includes('adamswatching')){
        xyz = ""
        TweenMax.to(zyx, 2, {bottom:-300})
        TweenMax.to(zyx, 2, {delay: 3, bottom:-500})
    }
}

window.addEventListener('keydown', checkCode)