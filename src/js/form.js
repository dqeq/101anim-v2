// ФОРМА

// Select the elements
const agreeText = document.querySelector('.agree-text');
const checkedElement = document.querySelector('.checked');

// Add class on hover
agreeText.addEventListener('mouseover', function() {
  checkedElement.classList.add('hovered');
});

// Remove class when not hovering
agreeText.addEventListener('mouseout', function() {
  checkedElement.classList.remove('hovered');
});


// ВАЛИДАЦИЯ ОБВОДКИ АКТИВНОЙ

document.addEventListener('DOMContentLoaded', function() {
  let formItems = document.querySelectorAll('.form-item');
  let formInputs = document.querySelectorAll('.form-item input ');
  let formWrap = document.querySelector('.form-wrap');

  formItems.forEach(function(item) {
    const current = item;
    const input = item.querySelector('input');
    if(input){
        input.addEventListener('focus',()=>{
            formItems.forEach(function(item) {
                item.classList.remove('form-item-border');
            });
            current.classList.add('form-item-border');
        });
    }else{
        item.addEventListener('click', function() {
            formItems.forEach(function(item) {
                item.classList.remove('form-item-border');
            });
            this.classList.add('form-item-border');
        });
    }
  });


  document.addEventListener('click', function(e) {
    var target = e.target;

    if (!formWrap.contains(target)) {
      formItems.forEach(function(item) {
        item.classList.remove('form-item-border');
      });
    }
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   let formItems = document.querySelectorAll('.form-green-active');

//   formItems.forEach(function(item) {
//     item.addEventListener('click', function() {
//       let formItem = this.closest('.form-item');

//       formItems.forEach(function(item) {
//         item.closest('.form-item').classList.remove('form-item-border');
//       });

//       formItem.classList.add('form-item-border');
//     });
//   });

//   document.addEventListener('click', function(e) {
//     var target = e.target;

//     if (!target.closest('.form-wrap')) {
//       formItems.forEach(function(item) {
//         item.closest('.form-item').classList.remove('form-item-border');
//       });
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  let formItems = document.querySelectorAll('.form-green-active');

  formItems.forEach(function(item) {
    item.addEventListener('focus', function() {
      let formItem = this.closest('.form-item');

      formItems.forEach(function(item) {
        item.closest('.form-item').classList.remove('form-item-border');
      });

      formItem.classList.add('form-item-border');
    });

    item.addEventListener('blur', function() {
      let formItem = this.closest('.form-item');
      formItem.classList.remove('form-item-border');
    });
  });
});
// ВАЛИДАЦИЯ ОБВОДКИ АКТИВНОЙ


// ВАЛИДАЦИЯ КВАДРАТИКА

function checkInputValues() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
  
    let btnName = document.querySelector(".placeholder-name");
    let btnMail = document.querySelector(".placeholder-mail");
    let btnPhone = document.querySelector(".placeholder-phone");
  
    if (name.value !== "") {
      btnName.classList.add('btn-ok');
    } else {
      btnName.classList.remove('btn-ok');
    }
  
    if (email.value !== "") {
      btnMail.classList.add('btn-ok');
    } else {
      btnMail.classList.remove('btn-ok');
    }
  
    if (phone.value !== "") {
      btnPhone.classList.add('btn-ok');
    } else {
      btnPhone.classList.remove('btn-ok');
    }
  }
  document.getElementById("name").addEventListener("input", checkInputValues);
  document.getElementById("email").addEventListener("input", checkInputValues);
  document.getElementById("phone").addEventListener("input", checkInputValues);
  checkInputValues();
  
  // ВАЛИДАЦИЯ КВАДРАТИКА
  
  // ВАЛИДАЦИЯ ТЕЛЕФОНА

  let phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('keydown', function(event) {
        if (event.key.match(/[a-zа-я]/i) && event.key !== 'Backspace') {
            event.preventDefault(); // Prevent typing any letters except Backspace
        }
    });
  phoneInput.addEventListener('input', function() {
    let inputValue = this.value;
    // Check if the value starts with any of the specified phone codes
    let startsWithCode = inputValue.startsWith("375") || 
        inputValue.startsWith("+375") || 
        inputValue.startsWith("8044") || 
        inputValue.startsWith("8033") ||
        inputValue.startsWith("8029") ||
        inputValue.startsWith("8025");
    // Check if the value starts with any of the specified phone codes
    let startsWithNINE = inputValue.startsWith("9");
      if (startsWithNINE) {
          // Remove the phone mask and limit the digits to 18
          var formattedValue = "+7 "+inputValue;
      }
    if (startsWithCode) {
      var formattedValue = inputValue.replace(/\D/g, '').replace(/\++/g, '+').replace(/^(\+?\d{3})(\d{2})(\d{3})(\d{2})(\d{1,9})$/, '+$1 ($2) $3-$4-$5');
    } else {
        let startsWithSEVEN = inputValue.startsWith("7");
        let startsWithPLSEVEN = formattedValue.startsWith("+7");
        if(startsWithPLSEVEN){
            inputValue = formattedValue.replaceAll("+",'').replaceAll(" ",'');
            startsWithSEVEN = true;
        }
        if(startsWithSEVEN){
            var formattedValue = inputValue.replace(/\++/g, '+').replace(/^(\+?\d)(\d{3})(\d{3})(\d{2})(\d{2,9})$/, '+$1 ($2) $3-$4-$5');
        }else{
            var formattedValue = inputValue.replace(/\++/g, '+').replace(/^(\+?\d{3})(\d{2})(\d{1})(\d{2})(\d{2})(\d{2})$/, '+$1 ($2) $3 $4-$5$6');
        }
      // Remove consecutive plus signs and format the phone code and phone number
    }
  
    // Truncate additional characters if the number of digits is greater than or equal to 18
    if (formattedValue.length >= 25) {
      formattedValue = formattedValue.slice(0, 25);
    }
  
    // Update the input value with the formatted value
    this.value = formattedValue;
  });

  // ВАЛИДАЦИЯ ТЕЛЕФОНА
  
  function submitForm(event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages
      clearErrors();
      // Get form values
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      // let message = document.getElementById("message").value.trim();
      let agree = document.getElementById("agree").checked;
      let contactSend = document.querySelector(".contact-send");
      let body = document.querySelector(".body");
      
  
      let formName = document.querySelector(".form-name");
      let formMail = document.querySelector(".form-mail");
      let formPhone = document.querySelector(".form-phone");
      let formAgree = document.querySelector(".form-agree");
  
      let errorName = document.querySelector(".error-name");
      let errorPhone = document.querySelector(".error-phone");
      let errorMail = document.querySelector(".error-mail");
      let errorAgree = document.querySelector(".error-agree");
      let errorList = document.querySelector(".error-list");
  
      let btnName = document.querySelector(".placeholder-name");
      let btnMail = document.querySelector(".placeholder-mail");
      let btnPhone = document.querySelector(".placeholder-phone");
  
      formName.addEventListener("click", function() {
        errorName.classList.remove('error-item-active');
        formName.classList.remove('form-rerror-active');
      });
  
      formMail.addEventListener("click", function() {
        errorMail.classList.remove('error-item-active');
        formMail.classList.remove('form-rerror-active');
      });
  
      formPhone.addEventListener("click", function() {
        errorPhone.classList.remove('error-item-active');
        formPhone.classList.remove('form-rerror-active');
      });
  
      formAgree.addEventListener("click", function() {
        errorAgree.classList.remove('error-item-active');
        formAgree.classList.remove('form-rerror-active');
      });


      function updateErrorListMargin() {
      
        if (
          !errorName.classList.contains('error-item-active') &&
          !errorMail.classList.contains('error-item-active') &&
          !errorPhone.classList.contains('error-item-active') &&
          !errorAgree.classList.contains('error-item-active')
        ) {
          errorList.classList.remove('list-margin');
        } else {
          errorList.classList.add('list-margin');
        }
      }
      setInterval(updateErrorListMargin, 500)
      updateErrorListMargin();

      // errorName.addEventListener('input', updateErrorListMargin);
      // errorMail.addEventListener('input', updateErrorListMargin);
      // errorPhone.addEventListener('input', updateErrorListMargin);
      
  
      // Validate form fields
      let isValid = true;
  
      // Validate name
  
      let digitRegex = /\d/;
  
      if (name === "" || digitRegex.test(name)) {
          // document.getElementById("nameError").textContent = "Name is required";
          isValid = false;
          errorName.classList.add('error-item-active');
          errorList.classList.add('list-margin');
          formName.classList.add('form-rerror-active');
          btnName.classList.remove('btn-ok');
      } else errorList.classList.remove('list-margin');
  
      let russianLettersRegex = /[а-яА-Я]/;
      let atSymbolRegex = /@/;
      // let postfixRegex = /\.(ru|google.com)$/;
      let postfixRegex = /@.*\..+/;
  
      // Validate email
      if (email === "" || russianLettersRegex.test(email) || !atSymbolRegex.test(email) || !postfixRegex.test(email)) {
          // document.getElementById("emailError").textContent = "Email is required";
        
          if (russianLettersRegex.test(email) || !atSymbolRegex.test(email) || !postfixRegex.test(email)) {
            formMail.classList.add("form-rerror-active");
          }
          isValid = false;
          errorList.classList.add('list-margin');
          errorMail.classList.add('error-item-active');
          formMail.classList.add('form-rerror-active');
          btnMail.classList.remove('btn-ok');
      } else errorList.classList.remove('list-margin');
  
      // Validate phone
      if (phone === "") {
          // document.getElementById("phoneError").textContent = "Phone number is required";
          isValid = false;
          errorList.classList.add('list-margin');
          errorPhone.classList.add('error-item-active');
          formPhone.classList.add('form-rerror-active');
          btnPhone.classList.remove('btn-ok');
      } else errorList.classList.remove('list-margin');
  
      // Validate agreement

      let agrees = document.querySelector('.checked');
      let agreeText = document.querySelector('.agree-text');

      agrees.addEventListener("click", function() {
        agrees.classList.remove('checked-error');
        agreeText.classList.remove('agree-text-error');
      });

      if (!agree) {
        isValid = false;
        errorList.classList.add('list-margin');
        agreeText.classList.add('agree-text-error');
        agrees.classList.add('checked-error');
        errorAgree.classList.add('error-item-active');
      } else errorList.classList.remove('list-margin');
  
      // If form is valid, submit the form
      if (isValid) {
          // Reset the form
          let contactForm = document.querySelector('.form-title');
          let contactFooter = document.querySelector('.contact-footer');
          contactForm.style.display = 'none';
          contactFooter.style.display = 'none';
          contactSend.classList.add('contact-send-active')
          // if (window.matchMedia("(min-width: 1000px)").matches) {
          //   body.style.overflow = 'hidden';
          // }
  
          if (window.matchMedia("(min-width: 320px)").matches) {
            let footerMobile = document.querySelector('.footer-hidden');
            footerMobile.classList.add('footer-hidden-active')
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          fetch('https://100-1.tech/form', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: email, name: name, phone:phone})
          })
          document.getElementById("contactForm").reset();
      }
  }
      // Function to clear error messages
      function clearErrors() {
          let errorElements = document.getElementsByClassName("error");
          for (let i = 0; i < errorElements.length; i++) {
              errorElements[i].textContent = "";
          }
      }
  
  // Function to validate email format
  
  // ФОРМА