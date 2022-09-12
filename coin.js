
function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

//تبدیل به دو رقم اعشار
function After2Decimal(number) {
    return Number.parseFloat(number).toFixed(2)
}
// تابع گرفتن میانگین و نمایش با دو رقم اعشار ** توجه درون تابع از تابع دیگری برای دو رقم اعشار استفاده شده **
function average(numbers){
    let sum = 0 
    let avg
    numbers.forEach((num)=>{
        sum+=num
    })
    avg = sum/numbers.length
    return After2Decimal(avg)
    
}


// function for  label T/M/B/k
function convertToCurrencySystem(labelValue) {
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

// تابع اطلاعات ارز 
function coin_content(list) {
    list.forEach((coin) => {
        let target_id = coin.id

        if (target_id == id) {
            function change24Color(container) {
                let changePercent = Number(After2Decimal(coin.changePercent24Hr))
                if (changePercent < 0) {
                    container.classList.remove("green-text")
                    container.classList.add("red-text")
                }

                return changePercent + "%"
            }
            let photo_src = "https://assets.coincap.io/assets/icons/" + coin.symbol.toLowerCase() + "@2x.png"
            let today = new Date()
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            let day =today.getDate()
            let month =monthNames[today.getMonth()]
            let year = today.getFullYear()
            
            //header part

            let rank = document.querySelector(".rank_Flag h1")
            rank.textContent = coin.rank

            let name = document.querySelector(".main_detail .name_asset")
            name.textContent = coin.name + " " + "(" + coin.symbol + ")"

            let price = document.querySelector(".main_detail .value_asset .value")
            price.textContent = "$" + separator(After2Decimal(coin.priceUsd))

            let change = document.querySelector(".main_detail .value_asset .change")
             change.textContent= change24Color(change)

            let MarcetCap = document.querySelector(".right_asset .sub_detail .detail_container .mc")
            MarcetCap.textContent = "$" + convertToCurrencySystem(coin.marketCapUsd)

            let volume = document.querySelector(".right_asset .sub_detail .detail_container .vol")
            volume.textContent = "$" + convertToCurrencySystem(coin.volumeUsd24Hr)

            let supply = document.querySelector(".right_asset .sub_detail .detail_container .supp")
            supply.textContent = convertToCurrencySystem(coin.supply) + " " + coin.symbol

            let title = document.querySelector("head title")
            title.textContent = coin.name + " " + "(" + coin.symbol + ")"

            // history part

            let change_history = document.querySelector(".history_title .coin_key_points .column .Chang_value")
            change_history.textContent = change24Color(change_history)

            let coin_photo = document.querySelector(".coin_identity .identity_img img")
            coin_photo.setAttribute("src", photo_src)

            let name_history = document.querySelector(".coin_identity .identity_content h3")
            name_history.textContent = coin.name + " " + "(" + coin.symbol + ")"

            let to_day = document.querySelector(".coin_identity .identity_content p .day")
            to_day.textContent = day + " " + month

            let to_year = document.querySelector(".coin_identity .identity_content p .year")
            to_year.textContent=year

        }
    })
}



// تابع بخش تاریخچه 
function coin_history(list) {
    let numbers=[]
    list.forEach((item)=>{
        nmb = Number(item.priceUsd);
         numbers.push(nmb)
    })
    
    let averagePrice = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    let maxPrice = Math.max(...numbers)
    let minPrice = Math.min(...numbers)

    let High = document.querySelector(".coin_key_points .column .High_value")
    let Low = document.querySelector(".coin_key_points .column .Low_value")
    let Avreg = document.querySelector(".coin_key_points .column .avr_value")

    High.textContent =  "$" + separator(After2Decimal(maxPrice))
    Low.textContent =  "$" + separator(After2Decimal(minPrice))
    Avreg.textContent =  "$" + separator(After2Decimal(averagePrice))
    





    // console.log("average func =" , average(numbers))
    // console.log("average line =" , averagePrice)
    // console.log(" max =" , maxPrice)
    // console.log(" min =" , minPrice)
    // console.log(average)
}


//taking the ID variable from URL and build the history URL with that ID

let coin_url = "https://api.coincap.io/v2/assets"
let searchString = document.location.search;

let params = new URLSearchParams(searchString);

let id = params.get("id")
let history_url = "https://api.coincap.io/v2/assets/" + id + "/history?interval=d1"




fetch(coin_url)
    .then(function received(response) {

        return response.json();
    })
    .then(function whatnow(vurudi) {
        let list = vurudi.data
        console.log(list)

        coin_content(list)

    })

fetch(history_url)
    .then(function khas(ress) {
        return ress.json();
    })
    .then(function unic(data) {
        let dade = data.data
        console.log(dade)
        coin_history(dade)
    })




