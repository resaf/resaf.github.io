"use strict";

window.onload = function () {
if(localStorage.getItem("book") === null) {
        localStorage.setItem("book", JSON.stringify([]))
    }

    let editName = document.getElementById("editName");
    let editPhone = document.getElementById("editPhone");
    let addBtn = document.getElementById("addBtn");

    function getAllRecords() {
        let bookFromStorage = localStorage.getItem("book");
        return JSON.parse(bookFromStorage);
    }

    function addRecord(record) {
        let bookMas = getAllRecords();
        bookMas.push(record);
        localStorage.setItem("book", JSON.stringify(bookMas))
    }

    addBtn.onclick = function () {
        let record = {
            name: editName.value,
            phone: editPhone.value
        };
		if(record.name !==  record.phone !== "") {
		if(record.name !==  record.phone !== "") {
			addRecord(record);
			editName.value = "";
			editPhone.value = "";
			alert("запись успешно добавлена")
		} else {
			alert("Заполните поля")
			}
		}
	};
	
	let findName = document.getElementById("findName");
	let findBtn = document.getElementById("findBtn");
	
	findBtn.onclick = function() {
		let name = findName.value;
		if (name !== "") {
			let book= getAllRecords();
			for let i = 0; < book.length; i++) {
			if book[i].name === name) {
			resultBox.innerHTML = resultBox.innerHTML + "<br>" + book[i].phone
			}
			
		}
		if (res
		}else{
			alert("Введите имя для поиска")
		}
	}
};