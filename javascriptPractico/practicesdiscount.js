//ESTE ARRAY ES DE LA SOLUCION 1 Y 2.
const coupons = [
    "coupon1",
    "coupon2",
    "coupon3",
];

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onCLickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    // SOLUCION 1: ARRAYS Y SWITCH

//    switch(couponValue){
//        case coupons[0]: //coupon1
//            descuento = 15;
//        break;
//        case coupons[1]: //coupon2
//            descuento = 30;
//        break;
//        case coupons[2]: //coupon3
//            descuento = 25;
//        break;
//    }


    //SOLUCION 2: LEGIBILIDAD, ERROR FIRST Y MUERTE AL SWITCH

    if (!coupons.includes(couponValue)){
        alert("El cupón " + couponValue + " no es válido")
    }else if (couponValue === "coupon1") {
        descuento = 15;
    }else if (couponValue === "coupon2") {
        descuento = 30;
    }else if (couponValue === "coupon3"){
        descuento = 25;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
}


 //SOLUCION 3: ARRAYS Y CONDICIONALES MUCHO MAS INTELIGENTES

// const coupons = [
//    {
//        name: "coupon1",
//        discount: 15,
//    },
//    {
//        name: "coupon2",
//        discount: 30,
//    },
//    {
//        name: "coupon3",
//        discount: 25,
//    },
//];

//const isCouponValueValid = function(coupon) {
//    return coupon.name === couponValue;
//};

//const userCoupon = coupons.find(isCouponValueValid);

//if (!userCoupon) {
//    alert("El cupón " + userCouponValue + " no es válido")
//}else {
//    const descuento = userCoupon.discount;
//    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
//
//    const resultP = document.getElementById("ResultP");
//    resultP.innerText = "El precio con descuento son: $" + precioConDescuento:
//}