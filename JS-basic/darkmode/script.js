let click = document.querySelector('.header');
let darkmodeOnBtn = document.querySelector('.darkmode');

let button = document.getElementById('button');

button.innerHTML = 'Dark';

function darkmodeOnOFF(){
    if(button.innerHTML == 'Dark'){
        click.classList.add('dark');
        button.innerHTML = 'Light';
    }else{
        click.classList.remove('dark');
        button.innerHTML = 'Dark';
    }
    console.log(button.innerHTML);
}

// darkmode 클릭 했을 때 클릭이벤트 추가
darkmodeOnBtn.addEventListener('click', darkmodeOnOFF);