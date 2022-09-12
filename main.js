

//جدا کردن هر سه رقم با ویرگول
function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

//تبدیل به دو رقم اعشار
function After2Decimal(number){
    return Number.parseFloat(number).toFixed(2)
}


// function for  label T/M/B/k
function convertToCurrencySystem (labelValue) {
  // Twelve Zeroes for Trillion
  return Math.abs(Number(labelValue)) >= 1.0e+12
  ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "t"
  // Nine Zeroes for Billions 
  : Math.abs(Number(labelValue)) >= 1.0e+9

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "b"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "m"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "k"

  : Math.abs(Number(labelValue));

}

function creat_row(list){

    

    for(let i =0 ; i < 20 ; i++){

        function change24Color (){
            let changePercent = Number(After2Decimal(iner_data.changePercent24Hr))
            if(changePercent < 0){
                change.classList.remove("green-text")
                change.classList.add("red-text")
            }
            
            change.textContent = changePercent + "%"
        }
        
        let iner_data = list[i];
        let Image_src = "https://assets.coincap.io/assets/icons/" +iner_data.symbol.toLowerCase() + "@2x.png"
        let coin_href = "coin.html?id="+iner_data.id
        
    let table_element = document.querySelector(".table-element")

    let row = document.createElement("div");
    row.classList.add("row"); 

    let rank = document.createElement("div");
    rank.classList.add("small-box", "larg-text", "black-text")
    
    

    let Name = document.createElement("div");
    Name.classList.add("Name", "larg-box", "black-text")

        let img_container = document.createElement("div")
        let image = document.createElement("img")
        image.classList.add("coin-img")
        image.setAttribute("src",Image_src)
        

        let name_link = document.createElement("a")
        name_link.setAttribute("href" , coin_href)//"coin.html?id=bitcoin"
        name_link.classList.add("larg-text" ,"black-text")
        
            let coinName = document.createElement("div")
            let name_symbol = document.createElement("p")
            name_symbol.classList.add( "small-text", "gray-text")
            
        name_link.appendChild(coinName)
        name_link.appendChild(name_symbol)
        img_container.appendChild(image)
    Name.appendChild(img_container)
    Name.appendChild( name_link)
    
    let price = document.createElement("div")
    price.classList.add("medium-box", "larg-text" ,"black-text")
    

    let MarcetCap = document.createElement("div")
    MarcetCap.classList.add("medium-box", "larg-text" ,"black-text")
    
    
    let VWAP = document.createElement("div")
    VWAP.classList.add("medium-box", "larg-text" ,"black-text")
    

    let supply = document.createElement("div")
    supply.classList.add("medium-box", "larg-text" ,"black-text")
    

    let volume = document.createElement("div")
    volume.classList.add("medium-box", "larg-text" ,"black-text")
    

    let change = document.createElement("div")
    change.classList.add("medium-box", "larg-text" ,"green-text")
    

    // value for structure 

    rank.textContent=iner_data.rank
    
    coinName.textContent =iner_data.name
    name_symbol.textContent =iner_data.symbol
    price.textContent="$"+ separator(After2Decimal(iner_data.priceUsd))
    MarcetCap.textContent="$" + convertToCurrencySystem(iner_data.marketCapUsd)
    VWAP.textContent="$" + separator(After2Decimal(iner_data.vwap24Hr))
    supply.textContent = convertToCurrencySystem(iner_data.supply)
    volume.textContent="$" + convertToCurrencySystem(iner_data.volumeUsd24Hr)

    // change color of Change Percent (24Hr) for posetive green  and red for negetive and add value to textContent
    change24Color() 



    //append child to row
    row.appendChild(rank )
    row.appendChild(Name)
    row.appendChild(price)
    row.appendChild(MarcetCap)
    row.appendChild(VWAP)
    row.appendChild(supply)
    row.appendChild(volume)
    row.appendChild(change)
    
    //append row to table
    table_element.appendChild(row)

    }// payan halghe
}





let url = "https://api.coincap.io/v2/assets"


fetch(url)
.then(function received(response) {
    
    return response.json();
})
.then(function whatnow(vurudi) {
    
    let dmc = vurudi.data

    creat_row(dmc)

    

    
    // console.log(dmc)

    // for(let i =0;i < dmc.length;i++){
    //     let item = dmc[i];
    //     console.log(item)
    // }
})



