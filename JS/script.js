const names = document.getElementById('name-input');
const error = document.getElementById('error');
const error_select = document.getElementById('error_select');
const error_date = document.getElementById('error_date');
const date = document.getElementById('date-datepicker');
const select = document.getElementById('select_Priority')
const summit = document.getElementById('add_list');
const item = document.getElementById('item');

console.log(item);

let list = [];


summit.addEventListener('click', function(e) {
    e.preventDefault(); 
    if(date.value===''.trim()){
        error_date.innerHTML = 'Please select a date';
    }else{
        error_date.innerHTML = '';
    }
    if(names.value===''.trim()){
        error.innerHTML = 'Please enter a name';
    }else{
        error.innerHTML = '';
    }
    if(select.value==='Select Priority'){
        error_select.innerHTML = 'Please select a priority';
    }else{
        error_select.innerHTML = ' ';
    }
    const task = {
        names : names.value,
        date : date.value,
        select : select.value,
    }

    if(names.value===''.trim() || date.value===''.trim() || select.value==='Select Priority'){
        return;
    }
    list.push(task);
    item.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4">
            ${list[i].names}
            </td>
            <td class="px-6 py-4">
            ${list[i].date}
            </td>
            <td class="px-6 py-4">
            ${list[i].select}
            </td>
            <td class="px-6 py-4">
            <button id = "btn"class="bg-green-500 text-white px-2 py-1 rounded"></button>
            </td>
        `;
        item.appendChild(tr);
        
    }
    removeform();
    
});



const removeform = () => {
    names.value = '';
    date.value = '';
    select.value = 'Select Priority';
}



