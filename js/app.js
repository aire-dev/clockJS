
setInterval(() => {
    let time = new Date();
    let date = document.querySelector('#date');
    let hours = document.querySelector('#hours');

    let week = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Septiembre','Octubre','Noviembre','Diciembre']; 
    
    date.innerHTML = `${week[time.getDay()]} ${time.getDay()} de ${months[time.getMonth()]} del ${time.getFullYear()}`;

    let hour =time.getHours(),
      minutes = time.getMinutes(), 
      seconds=time.getSeconds();
    
    if(hour < 10){
        hour = '0' + hour;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    hours.innerHTML = `${hour}:${minutes}:${seconds}`
}, 1000);

let changeColor = (color) =>{
    let clock = document.querySelector('#clock');
    let btnPink =  document.querySelector('#btnPink'),
        btnBlue =  document.querySelector('#btnBlue'),
        btnGreen =  document.querySelector('#btnGreen');
    
        btnPink.className='btn btn-pink';
        btnBlue.className='btn btn-blue';
        btnGreen.className='btn btn-green';

    switch(color){
        case 'pink':
            clock.className='pink';
            btnPink.className +=' btn-select';
            break;
        case 'blue':
            clock.className='blue';
            btnBlue.className +=' btn-select';
            break;
        case 'green':
            clock.className='green';
            btnGreen.className +=' btn-select';
            break;
        default:
            console.log('error');
    }
}