// shop API
//logo from bannerImage
const logoImg = document.getElementById("logoImg")
//slide 
const slideimg1 = document.getElementById("slide-Img1")
const slideimg2 = document.getElementById("slide-Img2")
const slideimg3 = document.getElementById("slide-Img3")
//primarycolor
const navBgColor = document.getElementById("home")
const footerBgColor = document.getElementById("footer")
const aboutColor = document.getElementById("aboutheading")
const welcomeNoteColor = document.getElementById("subHead")
const servicesColor = document.getElementById("services")
//secondaryColor
const aboutPara = document.getElementById("para")
//const tableBodyColor = document.getElementById("tableBody")
const addressLines1 = document.getElementById("addressLines1")
const addressLines2 = document.getElementById("addressLines2")
const phoneNumberColor = document.getElementById("phoneNumber")
const openHoursTableColor = document.getElementById("openHoursTable")
//aboutinfo from Description
const about = document.getElementById("para")
//shopname
const shopName = document.getElementById("shopName")
//address
const addressLine1 = document.getElementById("addressLine1")
const addressLine2 = document.getElementById("addressLine2")
const city = document.getElementById("city")
const pinCode = document.getElementById("pinCode")
//phonenumber
const phoneNumber = document.getElementById("phoneNumber")
//openinghours
const mondayOpen = document.getElementById("mondayOpen")
const tuesdayOpen = document.getElementById("tuesdayOpen")
const wednesdayOpen = document.getElementById("wednesdayOpen")
const thursdayOpen = document.getElementById("thursdayOpen")
const fridayOpen = document.getElementById("fridayOpen")
const saturdayOpen = document.getElementById("saturdayOpen")
const sundayOpen = document.getElementById("sundayOpen")
//closinghours
const mondayClose = document.getElementById("mondayClose")
const tuesdayClose = document.getElementById("tuesdayClose")
const wednesdayClose = document.getElementById("wednesdayClose")
const thursdayClose = document.getElementById("thursdayClose")
const fridayClose = document.getElementById("fridayClose")
const saturdayClose = document.getElementById("saturdayClose")
const sundayClose = document.getElementById("sundayClose")
let api;
async function getShop(url) {
    const respone = await fetch("https://demo.vshops.fi/api/shop/65c493079b4573572606f7ec");
    // method: "GET", headers: {Accept: 'application.json',}, body: data,
    const data = await respone.json()
    api = data;
    showShop(data)
}
getShop("");
// Adding the shop name

let slideIndex = 0;
function showShop(api) {
    console.log(api)
    //console.log(api.data.theme.slides)
    logoImg.src = api.data.theme.bannerImage;
    slideimg1.src = api.data.theme.slides[0].image;
    slideimg2.src = api.data.theme.slides[1].image;
    slideimg3.src = api.data.theme.slides[2].image;

    //console.log(api.data.theme.primaryColor)
    /*primaryColor*/
    navBgColor.style.backgroundColor = api.data.theme.primaryColor;
    footerBgColor.style.backgroundColor = api.data.theme.primaryColor;
    aboutColor.style.color = api.data.theme.primaryColor;
    welcomeNoteColor.style.color = api.data.theme.primaryColor;
    servicesColor.style.color = api.data.theme.primaryColor;
    //secondaryColor
    aboutPara.style.color = api.data.theme.secondaryColor;
    //tableBodyColor.style.color = api.data.theme.secondaryColor;
    addressLines1.style.color = api.data.theme.secondaryColor;
    addressLines2.style.color = api.data.theme.secondaryColor;
    phoneNumberColor.style.color = api.data.theme.secondaryColor;
    openHoursTableColor.style.color = api.data.theme.secondaryColor;
    about.innerHTML = api.data.description;
    shopName.innerHTML = api.data.name;
    addressLine1.innerText = api.data.address.addressLine1;
    addressLine2.innerHTML = api.data.address.addressLine2;
    city.innerHTML = api.data.address.city;
    pinCode.innerHTML = api.data.address.pincode + ", ";
    phoneNumber.innerHTML = api.data.phoneNumber;
    mondayOpen.innerHTML = api.data.shopTiming.monday.opening;
    tuesdayOpen.innerHTML = api.data.shopTiming.tuesday.opening;
    wednesdayOpen.innerHTML = api.data.shopTiming.wednesday.opening;
    thursdayOpen.innerHTML = api.data.shopTiming.thursday.opening;
    fridayOpen.innerHTML = api.data.shopTiming.friday.opening;
    saturdayOpen.innerHTML = api.data.shopTiming.saturday.opening;
    sundayOpen.innerHTML = api.data.shopTiming.sunday.opening;
    mondayClose.innerHTML = api.data.shopTiming.monday.closing;
    tuesdayClose.innerHTML = api.data.shopTiming.tuesday.closing;
    wednesdayClose.innerHTML = api.data.shopTiming.wednesday.closing;
    thursdayClose.innerHTML = api.data.shopTiming.thursday.closing;
    fridayClose.innerHTML = api.data.shopTiming.friday.closing;
    saturdayClose.innerHTML = api.data.shopTiming.saturday.closing;
    sundayClose.innerHTML = api.data.shopTiming.sunday.closing;

}
/*var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}*/

//Appoinment API
const aboutImg = document.getElementById("aboutImg")
const tableBody = document.getElementById("tableBody")

async function getAppointment(url) {
    const respone = await fetch("https://demo.vshops.fi/api/appointments/65c493079b4573572606f7ec");
    // method: "GET", headers: {Accept: 'application.json',}, body: data,
    const data = await respone.json()
    console.log(data)
    showAppointment(data.data)
}
getAppointment("");

function showAppointment(data) {
    console.log(data)
    // fetching service image for about us image 
    aboutImg.src = data[0].image;

    // Adding Service table details
    for (let i = 0; i < data.length; i++) {
        const row = tableBody.insertRow();
        // fetching service name to table row services
        row.insertCell(0).innerText = data[i].names[0].name;

        // fetching service price to table row price

        if (data[i].type == 'detail') {
            //checking if the offer price available
            if (data[i].prices[0].offerPrice > 0) {
                const price = document.createElement("p");
                price.style = "text-decoration:line-through";
                price.innerText = data[i].prices[0].price;
                const offerPrice = document.createElement("p");
                offerPrice.innerText = data[i].prices[0].offerPrice;
                let prc = row.insertCell(1);
                prc.appendChild(price);
                prc.appendChild(offerPrice);
            }
            else if (data[i].prices[0].price > 0) {
                const price = document.createElement("p");
                price.innerText = data[i].prices[0].price;
                let prc = row.insertCell(1);
                prc.appendChild(price);
            }

        }
        else if (data[i].type == 'simple') {
            //fetching price
            if (data[i].offerPrice > 0) {
                //row.insertCell(1).innerText = data[i].price.style.line-through;
                const price = document.createElement("p");
                price.style = "text-decoration:line-through";
                price.innerText = data[i].price;
                const offerPrice = document.createElement("p");
                offerPrice.innerText = data[i].offerPrice;
                let prc = row.insertCell(1);
                prc.appendChild(price);
                prc.appendChild(offerPrice);
            }
            else if (data[i].price > 0) {
                const price = document.createElement("p");
                price.innerText = data[i].price;
                let prc = row.insertCell(1);
                prc.appendChild(price);
            }
            tableBody.appendChild(row)

        }

    }

}
