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
    console.log(response);
    console.log(response["House Stark"]["Jon Snow"].title);
    console.log(response["House Targaryen"]["Daenerys Targaryen"].title);
    
    
    // const houseStark = response["House Stark"];

    // new object with response
    
    // const houses = 
    // {
    //     houseStark : response["House Stark"],
    //     houseTargaryen : response["House Targaryen"]
    // };

    console.log(houses.houseStark);



}

gotHouses();
