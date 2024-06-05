"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const image = document.querySelector('.user__avatar');

/* window.addEventListener('load' , (ev) => {
    debugger;
    image.innerHTML = userAvatar;
    
}); */

image.src = userAvatar;

/* if (userAvatar = '') {
    return DEFAULT_AVATAR;
} else {
    return userAvatar;
} */
