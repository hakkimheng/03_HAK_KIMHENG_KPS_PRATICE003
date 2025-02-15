let names = document.getElementById('name-input');
let error = document.getElementById('error');
let error_select = document.getElementById('error-select');
let error_date = document.getElementById('error_date');
let date = document.getElementById('date-datepicker');
let select = document.getElementById('select_Priority')
let summit = document.getElementById('add_list');

summit.addEventListener('click', function(e) {
    e.preventDefault(); 
    if(date.value===''.trim()){
        error_date.innerHTML = 'Please select a date';
    }
    if(names.value===''.trim()){
        error.innerHTML = 'Please enter a name';
    }
    if(select.value==='Select Priority'){
        error_select.innerHTML = 'Please select a priority';
    }
});



