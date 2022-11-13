let list1 = document.querySelectorAll('menu')[0];
let list2 = document.querySelectorAll('menu')[1];

list1.addEventListener('click', changeIcon , false);
list2.addEventListener('click', changeIcon1 , false);


function changeIcon(event) {
  let item = event.target;
  if(item.nodeName === 'H3') {
    if (item.innerHTML == 'Ouvrir') {
      item.style.color = 'white';
      item.innerHTML = 'Fermer';
    }
    else if(item.innerHTML == 'Fermer' && item.id == 'left_open') {
      item.style.color = '#272727';
      item.innerHTML = 'Ouvrir';
    }
    else if(item.innerHTML == 'Fermer' && item.id == 'right_open') {
      item.style.color = 'rgb(139, 139, 139)';
      item.innerHTML = 'Ouvrir';
    }
  }
  if(item.nodeName === 'IMG') {
    let src = item.getAttribute('src');
    src = src.slice(4, -4);
    if(src.includes('Pressed')){
      src = src.replace('Pressed', '');
      item.src = `img/${src}.PNG`;
    }
    else if(!src.includes('Pressed')){
      item.src = `img/${src}Pressed.PNG`;
    }
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeIcon1(event) {
  let Button = event.target;
  let src = Button.getAttribute('src');
  src = src.slice(4, -4);
  if(src.includes('Pressed')){
      src = src.replace('Pressed', '');
      Button.src = `img/${src}.PNG`;
      event.path[1].querySelector('small').style.color = '#8A8B8B';
  }
  else if(!src.includes('Pressed')){
      if(event.path[1].querySelector('small').innerHTML == 'Klaxonner') {
        Button.src = `img/${src}Pressed.PNG`;
        event.path[1].querySelector('small').style.color = 'white';
        console.log("Avant les 3s");
        await sleep(1500);
        console.log("Après les 3s");
        src = src.replace('Pressed', '');
        Button.src = `img/${src}.PNG`;
        event.path[1].querySelector('small').style.color = '#8A8B8B';
      } else {
        Button.src = `img/${src}Pressed.PNG`;
        event.path[1].querySelector('small').style.color = 'white';
      }
      

  }
}