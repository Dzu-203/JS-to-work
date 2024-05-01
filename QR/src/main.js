courses = [
    {
        courseID : 'KH01',
        courseName : "Python",
        courseImg : "https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png",
        coursePrice : 250000
    },
    {
        courseID : 'KH02',
        courseName : "JavaScript",
        courseImg : "https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png",
        coursePrice : 370000
    },
    {
        courseID : 'KH03',
        courseName : "Reactjs",
        courseImg : "https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png",
        coursePrice : 650500
    }
]
const qr = {
    BANK_ID : "vietcombank",
    ACCOUNT_NO : "1016479551",
}

document.addEventListener('DOMContentLoaded',() => {
    const cardBox = document.querySelector('.card-box')
    let cardItemUI = ""
    courses.forEach((item,index) => {
        cardItemUI += `
        <div class="card-item rounded-lg p-3 w-[25%] bg-blue-500 flex justify-center flex-col items-center">
            <div class="w-28 h-28">
                <img class="w-full h-full object-cover" src="${item.courseImg}" alt="">
            </div>
            <h1 class="font-bold text-4xl">${item.courseName}</h1>
            <button class="btn-buy px-4 py-2 bg-blue-700 text-white rounded-full cursor-pointer hover:bg-blue-900 mt-4">Mua</button>
        </div>
        `
    });
    cardBox.innerHTML = cardItemUI
    const btnBuy = document.querySelectorAll('.btn-buy')
    btnBuy.forEach((item,index) => {
        item.addEventListener('click',(e) => {
            let qrURL = `https://img.vietqr.io/image/${qr.BANK_ID}-${qr.ACCOUNT_NO}-compact2.png?amount=${courses[index].coursePrice}`
            let content = document.querySelector('.qr-content')
            let price =  document.querySelector('.qr-price')
            let imgQR =  document.querySelector('.img-qr')
            console.log()
            imgQR.src = qrURL
            content.innerHTML = `${courses[index].courseID}1`
            price.innerHTML = `${courses[index].coursePrice}`
            
            
        })
    })
    //thanh toán qr
    
    
});