// PASO 1 Seleccionar msi elementos que voy a ocupar

let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemsList = document.getElementById("itemsListUrgente");

// Paso 2 Crear mi funcion

function addItemButtonClick(){
    let itemText = itemInput.value;
    let newItem = document.createElement('li');
    
    //Crear un elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    

    deleteButton.addEventListener('click',function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    itemsList.appendChild(newItem);
    itemInput.value = '';
};

addItemButton.addEventListener('click', addItemButtonClick);

// PASO 1 Seleccionar msi elementos que voy a ocupar

let itemInput2 = document.getElementById("itemInput2");
let addItemButton2 = document.getElementById("addItemButton2");
let itemsList2 = document.getElementById("itemsListImportantes");

// Paso 2 Crear mi funcion

function addItemButtonClick2(){
    let itemText = itemInput2.value;
    let newItem = document.createElement('li');
    
    //Crear un elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    

    deleteButton.addEventListener('click',function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    itemsList2.appendChild(newItem);
    itemInput2.value = '';
};

addItemButton2.addEventListener('click', addItemButtonClick2);

// PASO 1 Seleccionar msi elementos que voy a ocupar

let itemInput3 = document.getElementById("itemInput3");
let addItemButton3 = document.getElementById("addItemButton3");
let itemsList3 = document.getElementById("itemsListDespues");

// Paso 2 Crear mi funcion

function addItemButtonClick3(){
    let itemText = itemInput.value;
    let newItem = document.createElement('li');
    
    //Crear un elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    

    deleteButton.addEventListener('click',function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    itemsList3.appendChild(newItem);
    itemInput3.value = '';
};

addItemButton3.addEventListener('click', addItemButtonClick3);


// PASO 1 Seleccionar msi elementos que voy a ocupar

let itemInput4 = document.getElementById("itemInput4");
let addItemButton4 = document.getElementById("addItemButton4");
let itemsList4 = document.getElementById("itemsListNo");

// Paso 2 Crear mi funcion

function addItemButtonClick4(){
    let itemText = itemInput.value;
    let newItem = document.createElement('li');
    
    //Crear un elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    

    deleteButton.addEventListener('click',function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton);
    itemsList4.appendChild(newItem);
    itemInput4.value = '';
};

addItemButton4.addEventListener('click', addItemButtonClick4);