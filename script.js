'use strict';

const model = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');


const openModel = function(){
    model.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

const closeModel = function(){
    model.classList.add('hidden');
    overLay.classList.add('hidden');
}

for (let index = 0; index < btnsShowModal.length; index++) {
    btnsShowModal[index].addEventListener('click',openModel);
}

// Nhấn vào nút X thì đóng model
btnClose.addEventListener('click',closeModel);
// Nhấn vào lớp mờ overplay cũng đóng model
overLay.addEventListener('click',closeModel);
//Nhấn vào esc cũng đóng model
document.addEventListener('keydown',function(e){
    //Đối tượng e dùng để xác định được key của phím nhấn
    if(e.key === 'Escape' && !model.classList.contains('hidden')){
        closeModel();
    }
})