const btn = document.getElementById('create');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'gray';
});



/*
const card2 = document.querySelector('.card2');
form = card2.querySelectorAll('.form');
submitInput  = form[0].querySelector('input[type="submit"]');

function getDataForm(e){
  e.preventDefault();
  $("form").submit(function() {
    console.log($(this).formToJson());
    return false;
  });

}


document.addEventListener('DOMContentLoaded' , function() {
  submitInput.addEventListener('click', getDataForm, false);
}, false);*/
