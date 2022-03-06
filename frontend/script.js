function loadEvent () {

  const input = document.querySelector('input');
  const log = document.getElementById('values');

  input.addEventListener('input', updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  };

//=== GENDER===//
  const gender = document.getElementById('list-1')
  console.log(gender)

  gender.addEventListener('input', function(e){
    console.log(e.target.value)
  
    if (e.target.value === "Female"){
      document.getElementById('female-image').classList.add('visible')
      document.getElementById('male-image').classList.remove('visible')
      
    } else {
      document.getElementById('male-image').classList.add('visible')
      document.getElementById('female-image').classList.remove('visible')
    }
  }); 
  //===RACE===//
  const race = document.getElementById('list-2')
  console.log(race)

  race.addEventListener('input', function(e){
    console.log(e.target.value)
  
    if (e.target.value === "Cat-anoid"){
      document.getElementById('catanoid').classList.add('visible')
      document.getElementById('catdwarf').classList.remove('visible')
      document.getElementById('catelf').classList.remove('visible')
      
    } else if (e.target.value === "Cat-anoid"){
      document.getElementById('catdwarf').classList.add('visible')
      document.getElementById('catanoid').classList.remove('visible')
      document.getElementById('catelf').classList.remove('visible')
    } else {
      document.getElementById('catelf').classList.add('visible')
      document.getElementById('catanoid').classList.remove('visible')
      document.getElementById('catdwarf').classList.remove('visible')

    }
  }); 
  
  //===CLASS===//
  const gameClass = document.getElementById('list-3')
  console.log(gameClass)

  gameClass.addEventListener('input', function(e){
    console.log(e.target.value)
  
    if (e.target.value === "Cat-Warrior"){
      document.getElementById('catwarrior').classList.add('visible')
      document.getElementById('cathunter').classList.remove('visible')
      document.getElementById('catpriest').classList.remove('visible')
      
    } else if (e.target.value === "Cat-Hunter"){
      document.getElementById('cathunter').classList.add('visible')
      document.getElementById('catwarrior').classList.remove('visible')
      document.getElementById('catpriest').classList.remove('visible')
    } else {
      document.getElementById('catpriest').classList.add('visible')
      document.getElementById('catwarrior').classList.remove('visible')
      document.getElementById('cathunter').classList.remove('visible')
    }
  }); 

}

window.addEventListener("load", loadEvent)  