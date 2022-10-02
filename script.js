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
toiMinus.addEventListener("click", () => {
       decrease(inputtoi)
    })
        
    toiPlus.addEventListener("click", () => {
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
        console.log(selectedFreq)
    })
})

const calculatePrice = () => {
    if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 1) {
        bedPrice = 3500;
        livPrice = inputLiv.textContent * roomPrice,
    toiPrice = inputtoi.textContent * roomPrice,
    kitPrice = inputKit.textContent * roomPrice,
    stuPrice = inputStu.textContent * roomPrice,
    outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
      prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 2) {
        bedPrice = 4000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 3) {
        bedPrice = 7000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 4) {
        bedPrice = 9000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 5) {
        bedPrice = 10000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`
    
    } else if ((selectedFreq === "onceAMonth" || selectedFreq === "oneOff") && inputBed.textContent == 6) {
        bedPrice = 11000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`
    
    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 1) {
        bedPrice = 12000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 2) {
        bedPrice = 14000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 3) {
        bedPrice = 24000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 4) {
        bedPrice = 32000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 5) {
        bedPrice = 35000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "onceAWeek" && inputBed.textContent == 6) {
        bedPrice = 38000;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 1) {
        bedPrice = 6700;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 2) {
        bedPrice = 7700;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 3) {
        bedPrice = 13600;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 4) {
        bedPrice = 17500;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 5) {
        bedPrice = 18600;
        livPrice = inputLiv.textContent * roomPrice,
        toiPrice = inputtoi.textContent * roomPrice,
        kitPrice = inputKit.textContent * roomPrice,
        stuPrice = inputStu.textContent * roomPrice,
        outPrice = inputOut.textContent * roomPrice;
        totalPrice = bedPrice + livPrice + toiPrice + kitPrice + stuPrice + outPrice;
        totalSpan.textContent = totalPrice;
        prompT.textContent = `${inputBed.textContent} bedroom, ${inputLiv.textContent} living room, ${inputtoi.textContent} toilet, ${inputKit.textContent} kitchen, ${inputStu.textContent} Study/store and ${inputOut.textContent} Outdoor/Balcony`

    } else if (selectedFreq === "twiceAMonth" && inputBed.textContent == 6) {
        bedPrice = 20000;
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
