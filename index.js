let filterHouse = false

const characters = [
    {
      name: 'Jon Snow',
      house: 'Stark',
      age: 24,
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png',
      banner:'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
    },
    {
      name: 'Eddard Stark',
      house: 'Stark',
      age: 41,
      picture:
        'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/13/Eddard_Stark_HBO.jpg/revision/latest?cb=20181021172732&path-prefix=es',
      banner:
        'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
    },
    {
      name: 'Arya Stark',
      house: 'Stark',
      age: 11,
      picture:
        'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/a/a9/AryaShipIronThrone.PNG.png/revision/latest?cb=20190909001444&path-prefix=es',
      banner:
        'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
    },
    {
      name: 'Ramsay Bolton',
      house: 'Bolton',
      age: 20,
      picture:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg',
      banner:
        'https://static.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest?cb=20161231131431',
    },
    {
      name: 'Theon Greyjoy',
      house: 'Greyjoy',
      age: 19,
      picture:
        'https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg',
      banner:
        'https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png',
    },
    {
      name: 'Davos Seaworth',
      house: 'Seaworth',
      age: 37,
      picture:
        'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/0/00/DAVOSINFOBOXBELLS.PNG.png/revision/latest/top-crop/width/360/height/450?cb=20200518042045&path-prefix=es',
      banner:
        'https://awoiaf.westeros.org/images/thumb/6/61/House_Seaworth.svg/1200px-House_Seaworth.svg.png',
    },
    {
      name: 'Cersei Lannister',
      house: 'Lannister',
      age: 30,
      picture:
        'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/0/06/D83429bddc3666e1584276658ac7d215.png/revision/latest?cb=20190713200100&path-prefix=es',
      banner:
        'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
    },
    {
      name: 'Tyrion Lannister',
      house: 'Lannister',
      age: 24,
      picture:
        'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/4/46/42tgru65.jpg/revision/latest?cb=20190715005327&path-prefix=es',
      banner:
        'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
    },
    {
      name: 'Jaime Lannister',
      house: 'Lannister',
      age: 31,
      picture:
        'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/1e/Jaime_Lannister.jpg/revision/latest?cb=20181025045714&path-prefix=es',
      banner:
        'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
    },
  ];
  
  //const baseCard = `
  //  <div class="characters"
   // <h2>Name</h2>
   // <h3>house</h2>
   // <h2>age</h2>
    //<div><img src="picture" alt="name"></div>
   // <div><img src="banner" alt="name"></div>
  //`

  //2 Ahora que ya tenemos la base pintada vamos a poner un
  //filtro para las casas.

  function paintCharacters(character) {

    //Busco el contenedor con los personajes
    const characterContainer = document.querySelector('#characters');
    characterContainer.innerHTML = '';
    characters.forEach((character) => {
      // Creo un div como el de baseCard
      const characterDiv = document.createElement('div');
      // Le añado la clase .card
      characterDiv.className = 'card';
      // <div class="card"></div>
      
      
     // Le meto al <div> el contenido de la carta con la información del zapato
      characterDiv.innerHTML = `
         <h2 id=name>Name: ${character.name}</h2>
         <h3 id=house>House: ${character.house}</h3>
         <h4 id=age>Age: ${character.age}</h4>
         <div id=image-container><img src="${character.picture}" alt="${character.name}"></div>
         <div id=banner-container><img src="${character.banner}" alt="${character.house}"></div>
      `;
  
      // Añado este nuevo <div> como hijo del contenedor
      characterContainer.append(characterDiv);
  })}

//Creamos funcion para filtrar House.



//3 buscamos el boton para el filtro de houses
const houseSelectButton = document.querySelector('#houses-button');

//5 Pintamos la función que filtrará y pintará la casa seleccionada
function handleckickHouseSelection(houseSelected) {
  houseSelected = true;
  const houseFilter = characters.filter((house) => {
    return characters.house === houseSelected;
  });
  paintCharacters(houseFilter)
}

//4Creamos la funcion que filtrará
function handleckickHouseButton(event){
  houseSelected = event.target.value //qué casa ha escogido
  if(houseSelected) {
    handleckickHouseSelection()
  }else {
    paintCharacters(characters)
  }
}
houseSelectButton.addEventListener('change',handleckickHouseButton)

//Esta función es la que pita todas las cartas
paintCharacters(characters);