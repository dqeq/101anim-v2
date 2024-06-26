window.addEventListener('scroll', function () {
    let square = document.querySelector('.cube');
    let scrollSpeed = window.pageYOffset;

    square.style.transform = 'rotate(' + scrollSpeed + 'deg)';
});
// Кубик в шапке

// МОБИЛЬНОЕ МЕНЮ

let burgerMenu = document.querySelector(".burgrer-menu");

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("burgrer-menu-active");
});

document.addEventListener('click', function(event) {
    const isClickInside = burgerMenu.contains(event.target);
    if (!isClickInside){
        burgerMenu.classList.remove("burgrer-menu-active");
    }
});


// МОБИЛЬНОЕ МЕНЮ

document.addEventListener('mousemove', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mouseleave', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.classList.add("hidden")
});
document.addEventListener('mouseout', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.classList.add("hidden")
});
document.addEventListener('mouseenter', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.classList.remove("hidden")
});

document.addEventListener('mouseover', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.classList.remove("hidden")
});

document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');
    let linkElements = document.querySelectorAll('.link-element');
    let isCursorOverLink = false;

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Проверяем, находится ли курсор над элементами .link-element
        isCursorOverLink = false;
        linkElements.forEach(function (element) {
            if (isCursorOverElement(e, element)) {
                isCursorOverLink = true;
            }
        });

        // Add or remove the cursor class based on whether the cursor is over any link element
        if (isCursorOverLink) {
            cursor.classList.add('cursor');
        } else {
            cursor.classList.remove('cursor');
        }
    });

    function isCursorOverElement(e, element) {
        let rect = element.getBoundingClientRect();
        return (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
    }
});

// ПРЕЛОДЕР

showPreloader()
function showPreloader() {
    setTimeout(function() {
      let preloader = document.querySelector('.preloader');
      let myBody = document.querySelector('.body-height');
      preloader.classList.remove('hide');
      myBody.classList.remove('body-height');
    }, 1000);
}

// ПРЕЛОДЕР

// АНИМАЦИЯ КНОПОК

document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

// АНИМАЦИЯ КНОПОК