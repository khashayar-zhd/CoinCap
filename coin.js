
function creat_chart(data){
    /**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

root.dateFormatter.setAll({
  dateFormat: "yyyy",
  dateFields: ["valueX"]
});

// var data = [{
//   "date": "2012-07-27",
//   "value": 13
// }, {
//   "date": "2012-07-28",
//   "value": 11
// }, {
//   "date": "2012-07-29",
//   "value": 15
// }, {
//   "date": "2012-07-30",
//   "value": 16
// }, {
//   "date": "2012-07-31",
//   "value": 18
// }, {
//   "date": "2012-08-01",
//   "value": 13
// }, {
//   "date": "2012-08-02",
//   "value": 22
// }, {
//   "date": "2012-08-03",
//   "value": 23
// }, {
//   "date": "2012-08-04",
//   "value": 20
// }, {
//   "date": "2012-08-05",
//   "value": 17
// }, {
//   "date": "2012-08-06",
//   "value": 16
// }, {
//   "date": "2012-08-07",
//   "value": 18
// }, {
//   "date": "2012-08-08",
//   "value": 21
// }, {
//   "date": "2012-08-09",
//   "value": 26
// }, {
//   "date": "2012-08-10",
//   "value": 24
// }, {
//   "date": "2012-08-11",
//   "value": 29
// }, {
//   "date": "2012-08-12",
//   "value": 32
// }, {
//   "date": "2012-08-13",
//   "value": 18
// }, {
//   "date": "2012-08-14",
//   "value": 24
// }, {
//   "date": "2012-08-15",
//   "value": 22
// }, {
//   "date": "2012-08-16",
//   "value": 18
// }, {
//   "date": "2012-08-17",
//   "value": 19
// }, {
//   "date": "2012-08-18",
//   "value": 14
// }, {
//   "date": "2012-08-19",
//   "value": 15
// }, {
//   "date": "2012-08-20",
//   "value": 12
// }, {
//   "date": "2012-08-21",
//   "value": 8
// }, {
//   "date": "2012-08-22",
//   "value": 9
// }, {
//   "date": "2012-08-23",
//   "value": 8
// }, {
//   "date": "2012-08-24",
//   "value": 7
// }, {
//   "date": "2012-08-25",
//   "value": 5
// }, {
//   "date": "2012-08-26",
//   "value": 11
// }, {
//   "date": "2012-08-27",
//   "value": 13
// }, {
//   "date": "2012-08-28",
//   "value": 18
// }, {
//   "date": "2012-08-29",
//   "value": 20
// }, {
//   "date": "2012-08-30",
//   "value": 29
// }, {
//   "date": "2012-08-31",
//   "value": 33
// }, {
//   "date": "2012-09-01",
//   "value": 42
// }, {
//   "date": "2012-09-02",
//   "value": 35
// }, {
//   "date": "2012-09-03",
//   "value": 31
// }, {
//   "date": "2012-09-04",
//   "value": 47
// }, {
//   "date": "2012-09-05",
//   "value": 52
// }, {
//   "date": "2012-09-06",
//   "value": 46
// }, {
//   "date": "2012-09-07",
//   "value": 41
// }, {
//   "date": "2012-09-08",
//   "value": 43
// }, {
//   "date": "2012-09-09",
//   "value": 40
// }, {
//   "date": "2012-09-10",
//   "value": 39
// }, {
//   "date": "2012-09-11",
//   "value": 34
// }, {
//   "date": "2012-09-12",
//   "value": 29
// }, {
//   "date": "2012-09-13",
//   "value": 34
// }, {
//   "date": "2012-09-14",
//   "value": 37
// }, {
//   "date": "2012-09-15",
//   "value": 42
// }, {
//   "date": "2012-09-16",
//   "value": 49
// }, {
//   "date": "2012-09-17",
//   "value": 46
// }, {
//   "date": "2012-09-18",
//   "value": 47
// }, {
//   "date": "2012-09-19",
//   "value": 55
// }, {
//   "date": "2012-09-20",
//   "value": 59
// }, {
//   "date": "2012-09-21",
//   "value": 58
// }, {
//   "date": "2012-09-22",
//   "value": 57
// }, {
//   "date": "2012-09-23",
//   "value": 61
// }, {
//   "date": "2012-09-24",
//   "value": 59
// }, {
//   "date": "2012-09-25",
//   "value": 67
// }, {
//   "date": "2012-09-26",
//   "value": 65
// }, {
//   "date": "2012-09-27",
//   "value": 61
// }, {
//   "date": "2012-09-28",
//   "value": 66
// }, {
//   "date": "2012-09-29",
//   "value": 69
// }, {
//   "date": "2012-09-30",
//   "value": 71
// }, {
//   "date": "2012-10-01",
//   "value": 67
// }, {
//   "date": "2012-10-02",
//   "value": 63
// }, {
//   "date": "2012-10-03",
//   "value": 46
// }, {
//   "date": "2012-10-04",
//   "value": 32
// }, {
//   "date": "2012-10-05",
//   "value": 21
// }, {
//   "date": "2012-10-06",
//   "value": 18
// }, {
//   "date": "2012-10-07",
//   "value": 21
// }, {
//   "date": "2012-10-08",
//   "value": 28
// }, {
//   "date": "2012-10-09",
//   "value": 27
// }, {
//   "date": "2012-10-10",
//   "value": 36
// }, {
//   "date": "2012-10-11",
//   "value": 33
// }, {
//   "date": "2012-10-12",
//   "value": 31
// }, {
//   "date": "2012-10-13",
//   "value": 30
// }, {
//   "date": "2012-10-14",
//   "value": 34
// }, {
//   "date": "2012-10-15",
//   "value": 38
// }, {
//   "date": "2012-10-16",
//   "value": 37
// }, {
//   "date": "2012-10-17",
//   "value": 44
// }, {
//   "date": "2012-10-18",
//   "value": 49
// }, {
//   "date": "2012-10-19",
//   "value": 53
// }, {
//   "date": "2012-10-20",
//   "value": 57
// }, {
//   "date": "2012-10-21",
//   "value": 60
// }, {
//   "date": "2012-10-22",
//   "value": 61
// }, {
//   "date": "2012-10-23",
//   "value": 69
// }, {
//   "date": "2012-10-24",
//   "value": 67
// }, {
//   "date": "2012-10-25",
//   "value": 72
// }, {
//   "date": "2012-10-26",
//   "value": 77
// }, {
//   "date": "2012-10-27",
//   "value": 75
// }, {
//   "date": "2012-10-28",
//   "value": 70
// }, {
//   "date": "2012-10-29",
//   "value": 72
// }, {
//   "date": "2012-10-30",
//   "value": 70
// }, {
//   "date": "2012-10-31",
//   "value": 72
// }, {
//   "date": "2012-11-01",
//   "value": 73
// }, {
//   "date": "2012-11-02",
//   "value": 67
// }, {
//   "date": "2012-11-03",
//   "value": 68
// }, {
//   "date": "2012-11-04",
//   "value": 65
// }, {
//   "date": "2012-11-05",
//   "value": 71
// }, {
//   "date": "2012-11-06",
//   "value": 75
// }, {
//   "date": "2012-11-07",
//   "value": 74
// }, {
//   "date": "2012-11-08",
//   "value": 71
// }, {
//   "date": "2012-11-09",
//   "value": 76
// }, {
//   "date": "2012-11-10",
//   "value": 77
// }, {
//   "date": "2012-11-11",
//   "value": 81
// }, {
//   "date": "2012-11-12",
//   "value": 83
// }, {
//   "date": "2012-11-13",
//   "value": 80
// }, {
//   "date": "2012-11-14",
//   "value": 81
// }, {
//   "date": "2012-11-15",
//   "value": 87
// }, {
//   "date": "2012-11-16",
//   "value": 82
// }, {
//   "date": "2012-11-17",
//   "value": 86
// }, {
//   "date": "2012-11-18",
//   "value": 80
// }, {
//   "date": "2012-11-19",
//   "value": 87
// }, {
//   "date": "2012-11-20",
//   "value": 83
// }, {
//   "date": "2012-11-21",
//   "value": 85
// }, {
//   "date": "2012-11-22",
//   "value": 84
// }, {
//   "date": "2012-11-23",
//   "value": 82
// }, {
//   "date": "2012-11-24",
//   "value": 73
// }, {
//   "date": "2012-11-25",
//   "value": 71
// }, {
//   "date": "2012-11-26",
//   "value": 75
// }, {
//   "date": "2012-11-27",
//   "value": 79
// }, {
//   "date": "2012-11-28",
//   "value": 70
// }, {
//   "date": "2012-11-29",
//   "value": 73
// }, {
//   "date": "2012-11-30",
//   "value": 61
// }, {
//   "date": "2012-12-01",
//   "value": 62
// }, {
//   "date": "2012-12-02",
//   "value": 66
// }, {
//   "date": "2012-12-03",
//   "value": 65
// }, {
//   "date": "2012-12-04",
//   "value": 73
// }, {
//   "date": "2012-12-05",
//   "value": 79
// }, {
//   "date": "2012-12-06",
//   "value": 78
// }, {
//   "date": "2012-12-07",
//   "value": 78
// }, {
//   "date": "2012-12-08",
//   "value": 78
// }, {
//   "date": "2012-12-09",
//   "value": 74
// }, {
//   "date": "2012-12-10",
//   "value": 73
// }, {
//   "date": "2012-12-11",
//   "value": 75
// }, {
//   "date": "2012-12-12",
//   "value": 70
// }, {
//   "date": "2012-12-13",
//   "value": 77
// }, {
//   "date": "2012-12-14",
//   "value": 67
// }, {
//   "date": "2012-12-15",
//   "value": 62
// }, {
//   "date": "2012-12-16",
//   "value": 64
// }, {
//   "date": "2012-12-17",
//   "value": 61
// }, {
//   "date": "2012-12-18",
//   "value": 59
// }, {
//   "date": "2012-12-19",
//   "value": 53
// }, {
//   "date": "2012-12-20",
//   "value": 54
// }, {
//   "date": "2012-12-21",
//   "value": 56
// }, {
//   "date": "2012-12-22",
//   "value": 59
// }, {
//   "date": "2012-12-23",
//   "value": 58
// }, {
//   "date": "2012-12-24",
//   "value": 55
// }, {
//   "date": "2012-12-25",
//   "value": 52
// }, {
//   "date": "2012-12-26",
//   "value": 54
// }, {
//   "date": "2012-12-27",
//   "value": 50
// }, {
//   "date": "2012-12-28",
//   "value": 50
// }, {
//   "date": "2012-12-29",
//   "value": 51
// }, {
//   "date": "2012-12-30",
//   "value": 52
// }, {
//   "date": "2012-12-31",
//   "value": 58
// }, {
//   "date": "2013-01-01",
//   "value": 60
// }, {
//   "date": "2013-01-02",
//   "value": 67
// }, {
//   "date": "2013-01-03",
//   "value": 64
// }, {
//   "date": "2013-01-04",
//   "value": 66
// }, {
//   "date": "2013-01-05",
//   "value": 60
// }, {
//   "date": "2013-01-06",
//   "value": 63
// }, {
//   "date": "2013-01-07",
//   "value": 61
// }, {
//   "date": "2013-01-08",
//   "value": 60
// }, {
//   "date": "2013-01-09",
//   "value": 65
// }, {
//   "date": "2013-01-10",
//   "value": 75
// }, {
//   "date": "2013-01-11",
//   "value": 77
// }, {
//   "date": "2013-01-12",
//   "value": 78
// }, {
//   "date": "2013-01-13",
//   "value": 70
// }, {
//   "date": "2013-01-14",
//   "value": 70
// }, {
//   "date": "2013-01-15",
//   "value": 73
// }, {
//   "date": "2013-01-16",
//   "value": 71
// }, {
//   "date": "2013-01-17",
//   "value": 74
// }, {
//   "date": "2013-01-18",
//   "value": 78
// }, {
//   "date": "2013-01-19",
//   "value": 85
// }, {
//   "date": "2013-01-20",
//   "value": 82
// }, {
//   "date": "2013-01-21",
//   "value": 83
// }, {
//   "date": "2013-01-22",
//   "value": 88
// }, {
//   "date": "2013-01-23",
//   "value": 85
// }, {
//   "date": "2013-01-24",
//   "value": 85
// }, {
//   "date": "2013-01-25",
//   "value": 80
// }, {
//   "date": "2013-01-26",
//   "value": 87
// }, {
//   "date": "2013-01-27",
//   "value": 84
// }, {
//   "date": "2013-01-28",
//   "value": 83
// }, {
//   "date": "2013-01-29",
//   "value": 84
// }, {
//   "date": "2013-01-30",
//   "value": 81
// }];


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  focusable: true,
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true
}));

var easing = am5.ease.linear;


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 0.1,
  groupData: false,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {

  }),
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.LineSeries.new(root, {
  minBulletDistance: 10,
  connect: false,
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "horizontal",
    labelText: "{valueY}"
  })
}));

series.fills.template.setAll({
  fillOpacity: 0.2,
  visible: true
});

series.strokes.template.setAll({
  strokeWidth: 2
});


// Set up data processor to parse string dates
// https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
series.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy-MM-dd",
  dateFields: ["date"]
});

series.data.setAll(data);

series.bullets.push(function() {
  var circle = am5.Circle.new(root, {
    radius: 4,
    fill: root.interfaceColors.get("background"),
    stroke: series.get("fill"),
    strokeWidth: 2
  })

  return am5.Bullet.new(root, {
    sprite: circle
  })
});


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  xAxis: xAxis,
  behavior: "none"
}));
cursor.lineY.set("visible", false);

// add scrollbar
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}
///////////////////////////////////////////////////////////////////////////











/////////////////////////////////////////////////////////////////////////////////
function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
function pureDate(histor){
    let DP_obj=[]
    histor.forEach((his)=>{
        let zaman = his.date
        let str = zaman.toString().split("T")
        let prc =After2Decimal(his.priceUsd)
         
        // console.log(str[0] , prc)
        DP_obj.push(
            {
                "date":String(str[0]),
                "value":Number(prc)
            }
        )
       
    })
    return DP_obj
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
        let date_price = pureDate(dade)
        console.log("this is PureTime",date_price)

        console.log("this is dade",dade)
        creat_chart(date_price)
        coin_history(dade)
    })

    


