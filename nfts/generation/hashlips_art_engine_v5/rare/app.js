// let rareBackground = ['Alienish Green Egg.png', 'Gold Egg.png'];
// let rareFace = ['Catrina.png', 'Cyclops.png', 'Dracula.png', 'Hero.png', 'Monster.png', 'Rage.png', 'Teeth Gap.png', 'Witch.png'];
// let rareHead = ['Beanie.png', 'Bear.png', 'Buns.png', 'Hat.png', 'Log Afro.png', 'Mohawk.png', 'Mohawk 2.png', 'Nurse.png'];

let rareBackground = ['Alienish Green Egg', 'Gold Egg'];
let rareFace = ['Catrina', 'Cyclops', 'Dracula', 'Hero', 'Monster', 'Rage', 'Teeth Gap', 'Witch'];
let rareHead = ['Beanie', 'Bear', 'Buns', 'Hat', 'Log Afro', 'Mohawk', 'Mohawk 2', 'Nurse'];

// let rareFace = ['Cyclops', 'Dracula', 'Hero', 'Monster', 'Witch'];
// let rareHead = ['Beanie', 'Bear', 'Buns', 'Hat', 'Log Afro', 'Mohawk', 'Mohawk 2', 'Nurse'];

function FetchJsonsAndFindRare(){
  let totalTokens = 1000;
  let rareTokens = [];

  for(let i=1; i<totalTokens; i++){
    fetch(`../build/json/${i}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let rareLayersCount = 0;

        if(rareBackground.includes(data.attributes[0].value)){
          // rareTokens.push(data.name)
          rareLayersCount++;
        }

        if(rareHead.includes(data.attributes[1].value)){
          // rareTokens.push(data.name)
          rareLayersCount++;
        }
        
        if(rareFace.includes(data.attributes[2].value)){
          // rareTokens.push(data.name)
          rareLayersCount++;
        }

        if(rareLayersCount >= 2){
          rareTokens.push(data.name)
        }else{
          // console.log(rareLayersCount)
        }

      }
    )
  }

  console.log(rareTokens)
}


FetchJsonsAndFindRare();