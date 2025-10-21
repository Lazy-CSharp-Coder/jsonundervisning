// const data = 
// {
//     houseStark : {
//                     Eddard : { nickname : "Ned", title : "Hand of the King"                          },
//                     Caitlyn : { nickname : "Cat", title : "unknown"}

//                  },
//     houseLannister : { 
//                        Tywin : { nickname : null, }


//                      }

// };

// Async function

async function gotHouses()
{
    // hente fil 
    const data = await fetch("houses.json");
    console.log(data);

    // hente data fra fil
    const response = await data.json();
    // console.log(response);
    // console.log(response["House Stark"]["Jon Snow"].title);
    // console.log(response["House Targaryen"]["Daenerys Targaryen"].title);
    
    const gotCharacter = document.querySelector("#gotCharacter");
    // console.log(gotCharacter);
    const houses = Object.keys(response);
    const houseStark = Object.keys(response["House Stark"]);

    // console.log(houses);
    // gotCharacter.innerHTML = 
    // `
    //     <h1 class="characterName">${houseStark[7]}</h1>
    //     <h3>${houses[0]}</h3>
    //     <p>${response["House Stark"]["Jon Snow"].title}</p>
       
    // `

    const home = document.querySelector("#home");
    
    for(let i = 0; i < houseStark.length; ++i)
    {
        const newCharacterDiv = document.createElement("div");
        newCharacterDiv.innerHTML =
        `
            <h1 class="characterName">${houseStark[i]}</h1>
            <h3>${houseStark[i].nickname}</h3>
            <p>${houseStark[i].title}</p>
         `
         console.log(newCharacterDiv);
         home.appendChild(newCharacterDiv);

    }
    // const houseStark = response["House Stark"];

    // new object with response
    
    // const houses = 
    // {
    //     houseStark : response["House Stark"],
    //     houseTargaryen : response["House Targaryen"]
    // };
}

gotHouses();

// hente fra api

async function catFacts()
{
    const data = await fetch("https://catfact.ninja/facts");
    console.log(data);

    const response = await data.json();
    console.log(response);
    console.log(response.data);
    const catFactArray = response.data;

    catFactArray.forEach(item =>
    {
        console.log(item.fact);
        
    });

    console.log("nå andre veien")

    for(let i = catFactArray.length-1; i > 0; i--)
    {
        console.log(catFactArray[i].fact);

    }
}

// catFacts();


