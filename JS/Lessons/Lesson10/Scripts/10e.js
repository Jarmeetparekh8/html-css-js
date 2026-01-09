function func(param){
    const button = document.querySelector('.js-button'+param).classList;
    if(button.contains('is-toggled')){
      button.remove('is-toggled');
    }
    else{
      button.add('is-toggled');
    }
  }