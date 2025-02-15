const names = document.getElementById('name-input');
const error = document.getElementById('error');
const error_select = document.getElementById('error_select');
const error_date = document.getElementById('error_date');
const date = document.getElementById('date-datepicker');
const select = document.getElementById('select_Priority')
const summit = document.getElementById('add_list');
const item = document.getElementById('item');

console.log(item);

// for store all tasks
let list = [];

summit.addEventListener('click', function(e) {
    e.preventDefault(); 

    //checking and display error
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

    // store one task in object
    const task = {
        names : names.value,
        date : date.value,
        select : select.value,
    }

    
    if(names.value===''.trim() || date.value===''.trim() || select.value==='Select Priority'){
        return;
    }

    //get current date
    let currentDate = new Date();
    //make sure date is future date
    if(new Date(date.value) < currentDate){
        error_date.innerHTML = 'Please select a future date';
        return;
    }
    //push object task to list
    list.push(task);
    item.innerHTML = '';
    
    // Loop through the list and create table rows
    for (let i = 0; i < list.length; i++) {
        // Determine color based on list[i].select, not task.select
        let color = '';
        if (list[i].select === 'Low') {
            color = 'text-green-500';
        } else if (list[i].select === 'Medium') {
            color = 'text-orange-500';
        } else if (list[i].select === 'High') {
            color = 'text-red-500';
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 text-black">
                ${list[i].names}
            </td>
            <td class="px-6 py-4 text-black">
                ${list[i].date}
            </td>
            <td class="px-6 py-4 ${color}">
                ${list[i].select}
            </td>
            <td class="px-6 py-4">
                <button id="btn" class="bg-yellow-500 text-white px-2 py-1 rounded transition-all">Pending</button>
            </td>
        `;
        item.appendChild(tr);
    }
    btn();
    removeform();
    
});
const btn = () => {
    const buttons = document.querySelectorAll('#btn');

    buttons.forEach(btn => {
        let isCompleted = false;
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isCompleted) {
                btn.style.backgroundColor = 'green';
                btn.innerHTML = 'Completed';
                isCompleted = true;
            } else {
                btn.style.backgroundColor = '#EAB308';
                btn.innerHTML = 'Pending';
                isCompleted = false;
            }
        });
    });
}
const removeform = () => {
    names.value = '';
    date.value = '';
    select.value = 'Select Priority';
}