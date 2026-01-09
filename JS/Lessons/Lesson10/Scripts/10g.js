function func(param){
  const button = document.querySelector('.js-button' + param).classList;
  if(button.contains('is-toggled')){
    button.remove('is-toggled');
  }
  else{
    turnOffPrevious();
    button.add('is-toggled');
  }
}

function turnOffPrevious(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}