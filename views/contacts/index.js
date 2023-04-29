const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last-name');
const numberInput = document.querySelector('#number');
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const saveBtn = document.querySelector('#save-btn');
const invalidCheck = document.querySelector('.invalid-check');
const form = document.querySelector('#form');
const totalCountSpan = document.querySelector('.total-count');
const completedCountSpan = document.querySelector('.completed-count');
const incompletedCountSpan = document.querySelector('.incompleted-count');

saveBtn.addEventListener('click', async e =>{
	const { data } = await axios.patch(`/api/todos`);
console.log(data);


	// const listItem = document.createElement('li');
	// listItem.id = data._id
	// console.log(listItem.id);
	// listItem.classList.add('flex', 'flex-row');
	// listItem.innerHTML = `
	// 	<div class="group grow flex flex-row justify-between">
	// 		<button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
	// 			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	// 				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	// 			</svg>
	// 		</button>
	// 		<p class="p-4 break-words grow">${data.nombre}</p>
	// 		<p class="p-4 break-words grow">${data.apellido}</p>
	// 		<p class="p-4 break-words grow">${data.numero}</p>
	// 	</div>
	// 	<button class="edit-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-orange-300 transition duration-300 easy-in-out">
	// 	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	// 	<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
	//   	</svg>	  
	// 	</button>
	// `;

	// // Append listItem
	// ul.append(listItem);

	// // Empty input
	// nameInput.value = '',
	// lastNameInput.value = '',
	// number.value = ''

	// todoCount();
});



const totalCount = () => {
	const howMany = document.querySelector('ul').children.length; 
	totalCountSpan.innerHTML = howMany;
};

const todoCount = () => {
	totalCount();
};

form.addEventListener('submit', async e => {
	e.preventDefault();

	// Check if the input is empty
	if (nameInput.value === '' && lastNameInput.value === '' && number.value === '') {
		nameInput.classList.remove('focus:ring-2', 'focus:ring-violet-600');
		nameInput.classList.add('focus:ring-2', 'focus:ring-rose-600');
		lastNameInput.classList.remove('focus:ring-2', 'focus:ring-violet-600');
		lastNameInput.classList.add('focus:ring-2', 'focus:ring-rose-600');
		numberInput.classList.remove('focus:ring-2', 'focus:ring-violet-600');
		numberInput.classList.add('focus:ring-2', 'focus:ring-rose-600');
		invalidCheck.classList.remove('hidden');
		return
	}

	// Remove classes and hide invalidCheck
	nameInput.classList.remove('focus:ring-2', 'focus:ring-rose-600', 'border-2', 'border-rose-600');
	nameInput.classList.add('focus:ring-2', 'focus:ring-violet-600');
	lastNameInput.classList.remove('focus:ring-2', 'focus:ring-rose-600', 'border-2', 'border-rose-600');
	lastNameInput.classList.add('focus:ring-2', 'focus:ring-violet-600');
	numberInput.classList.remove('focus:ring-2', 'focus:ring-rose-600', 'border-2', 'border-rose-600');
	numberInput.classList.add('focus:ring-2', 'focus:ring-violet-600');
	invalidCheck.classList.add('hidden');

	console.log(nameInput.value, lastNameInput.value, numberInput.value);

	// Create list item
	const { data } = await axios.post('/api/todos', { nombre: nameInput.value, apellido: lastNameInput.value, numero: numberInput.value } );


	const listItem = document.createElement('li');
	listItem.id = data.id
	listItem.classList.add('flex', 'flex-row');
	listItem.innerHTML = `
		<div class="group grow flex flex-row justify-between">
			<button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<p class="p-4 break-words grow">${data.nombre}</p>
			<p class="p-4 break-words grow">${data.apellido}</p>
			<p class="p-4 break-words grow">${data.numero}</p>
		</div>
		<button class="edit-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-orange-300 transition duration-300 easy-in-out">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
	  	</svg>	  
		</button>
	`;
	console.log(listItem.id);

	// Append listItem
	ul.append(listItem);

	// Empty input
	nameInput.value = '',
	lastNameInput.value = '',
	number.value = ''

	todoCount();
});

ul.addEventListener('click', async e => {

	// Select delete-icon
	if (e.target.closest('.delete-icon')) {
		const li = e.target.closest('.delete-icon').parentElement.parentElement;
		await axios.delete(`/api/todos/${li.id}`);
		li.remove();
		todoCount();
	}

	// Select edit-icon
	if (e.target.closest('.edit-icon')) {
		const editIcon = e.target.closest('.edit-icon');
		const listNombre = editIcon.parentElement.children[0].children[1].textContent;
		const listApellido = editIcon.parentElement.children[0].children[2].textContent;
		const listNumber = editIcon.parentElement.children[0].children[3].textContent;
		document.getElementById('name').value = listNombre;
		document.getElementById('last-name').value = listApellido;
		document.getElementById('number').value = listNumber;
		saveBtn.disabled = false;
		addBtn.disabled = true;
		
		// if (!listItem.classList.contains('line-through')) {
		// 	await axios.patch(`/api/todos/${ listItem.id }`, { checked: true });
		// 	editIcon.classList.add('bg-green-400');
		// 	editIcon.classList.remove('hover:bg-green-300');
		// 	listItem.classList.add('line-through', 'text-slate-400', 'dark:text-slate-600');
		// } else {
		// 	await axios.patch(`/api/todos/${ listItem.id }`, { checked: false });
		// 	editIcon.classList.remove('bg-green-400');
		// 	editIcon.classList.add('hover:bg-green-300');
		// 	listItem.classList.remove('line-through', 'text-slate-400', 'dark:text-slate-600');
		// }
	}
});

( async () => {
	try {
		const { data } = await axios.get('/api/todos',{
			withCredentials: true
		}); 

		data.forEach(contact => {
			
	const listItem = document.createElement('li');
	listItem.id = contact.id;
	listItem.classList.add('flex', 'flex-row');
	listItem.innerHTML = `
		<div class="group grow flex flex-row justify-between">
			<button class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<p class="p-4 break-words grow">${contact.nombre}</p>
			<p class="p-4 break-words grow">${contact.apellido}</p>
			<p class="p-4 break-words grow">${contact.numero}</p>
		</div>
		<button class="edit-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 easy-in-out">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
	  	</svg>
		</button>
	`;
		
	ul.append(listItem);
		});
		todoCount();

	} catch (error) {
		window.location.pathname = '/login'
	}
	
})();
