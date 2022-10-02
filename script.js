const dropdown = document.querySelector("div.dropdown");
const prompT = document.querySelector("p.statement"),
    btnDone = document.querySelector(".done"),
    // Minus
    bedMinus = document.querySelector(".b-minus"),
    livMinus = document.querySelector(".l-minus"),
    toiMinus = document.querySelector(".t-minus"),
    kitMinus = document.querySelector(".k-minus"),
    stuMinus = document.querySelector(".s-minus"),
    outMinus = document.querySelector(".o-minus"),
    // Plus
    bedPlus = document.querySelector(".b-plus"),
    livPlus = document.querySelector(".l-plus"),
    toiPlus = document.querySelector(".t-plus"),
    kitPlus = document.querySelector(".k-plus"),
    stuPlus = document.querySelector(".s-plus"),
    outPlus = document.querySelector(".o-plus");

// Inputs
let inputBed = document.querySelector("#b-input"),
    inputLiv = document.querySelector("#l-input"),
    inputtoi = document.querySelector("#t-input"),
    inputKit = document.querySelector("#k-input"),
    inputStu = document.querySelector("#s-input"),
    inputOut = document.querySelector("#o-input");



prompT.addEventListener("click", () => {
    console.log(dropdown.style)
    dropdown.classList.toggle("show")
})

btnDone.addEventListener("click", () => {
    dropdown.classList.remove('show')
})

const increase = (theInput) => {
    console.log(theInput.textContent)
    if (theInput.textContent < 6) {
        let resu = parseInt(theInput.textContent) + 1;
        theInput.textContent = resu;
    }
}

const decrease = (theInput) => {
    console.log(theInput.textContent)
    if (theInput.textContent > 0) {
        let resu = parseInt(theInput.textContent) - 1;
        theInput.textContent = resu;
    }
}

// Bedroom
bedMinus.addEventListener("click", () => {
    if (inputBed.textContent > 1) {
        let resu = parseInt(inputBed.textContent) - 1;
        inputBed.textContent = resu;
    }
    })
        
bedPlus.addEventListener("click", () => {
        console.log("plus")
        increase(inputBed)
    })

// Living room
livMinus.addEventListener("click", () => {
   decrease(inputLiv)
})
    
livPlus.addEventListener("click", () => {
    increase(inputLiv)
})

// toilets
bedMinus.addEventListener("click", () => {
    if (inputtoi.textContent > 1) {
        let resu = parseInt(inputtoi.textContent) - 1;
        inputtoi.textContent = resu;
    }
    })
        
    bedPlus.addEventListener("click", () => {
        increase(inputtoi)
    })

    // Kitchen
 kitMinus.addEventListener("click", () => {
        decrease(inputKit)
     })
         
kitPlus.addEventListener("click", () => {
         increase(inputKit)
})
     
// Study/store
stuMinus.addEventListener("click", () => {
    decrease(inputStu)
 })
     
 stuPlus.addEventListener("click", () => {
     increase(inputStu)
 })

//  Outdoor
 outMinus.addEventListener("click", () => {
    decrease(inputOut)
 })
     
 outPlus.addEventListener("click", () => {
     increase(inputOut)
 })


//  For the main calculation
const roomPrice = 700;
// let livPrice = 0 * roomPrice,
    // toiPrice = inputtoi.textContent * roomPrice,
    // kitPrice = inputKit.textContent * roomPrice,
    // stuPrice = inputLiv.textContent * roomPrice,
    // outPrice = inputOut.textContent * roomPrice;

    



let selectedFreq, totalPrice,
totalSpan = document.querySelector(".total-price")
const freqBtns = document.querySelectorAll(".freq button");

// Selecteed frequency
freqBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedFreq = btn.id;
        error.style.display = "none";
        calculatePrice()
    })
})

const calculatePrice = () => {
    if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 1) {
        bedPrice = 1400;
        livPrice = inputLiv.textContent * roomPrice,
    toiPrice = inputtoi.textContent * roomPrice,
    kitPrice = inputKit.textContent * roomPrice,
    stuPrice = inputStu.textContent * roomPrice,
    outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
      prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 2) {
        bedPrice = 1900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 3) {
        bedPrice = 4900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 4) {
        bedPrice = 6900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 5) {
        bedPrice = 7900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`
    
    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 6) {
        bedPrice = 8900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`
    
    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 1) {
        bedPrice = 9900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 2) {
        bedPrice = 11900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 3) {
        bedPrice = 21900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 4) {
        bedPrice = 29900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 5) {
        bedPrice = 32900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 6) {
        bedPrice = 35900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 1) {
        bedPrice = 4600;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 2) {
        bedPrice = 5600;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 3) {
        bedPrice = 11500;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 4) {
        bedPrice = 15400;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice =  roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 5) {
        bedPrice = 16500;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 6) {
        bedPrice = 17900;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`
    }
}

error = document.querySelector(".error")
calculateBtn = document.querySelector("#calculate")
console.log(totalSpan.textContent)
console.log(selectedFreq)

calculateBtn.addEventListener("click", () => {
    if (selectedFreq == undefined) {
        error.style.display = "block"
    } else {
        error.style.display = "none"
    }
})
calculateBtn.addEventListener("click", calculatePrice)




