class Triangle{
    constructor(aSide, bSide, cSide){
        this.aSide = aSide
        this.bSide = bSide
        this.cSide = cSide
    }

    getSides(){
        return new Array(this.aSide, this.bSide, this.cSide)
    }

    setSides(a,b,c){
        this.aSide = a
        this.bSide = b
        this.cSide = c
    }

    
    isEditable(){
        return (this.aSide + this.bSide > this.cSide) && (this.aSide + this.cSide > this.bSide) && (this.bSide + this.cSide > this.aSide) ? true : false
    }

    randomSideLength(){
        this.setSides(this.constructor.getRandomNumber(), this.constructor.getRandomNumber(), this.constructor.getRandomNumber())
    }

    calculatecSide(){
        this.setSides(this.aSide, this.bSide, Math.sqrt(Math.pow(this.aSide, 2) + Math.pow(this.bSide, 2)).toFixed(3))
    }

    static getRandomNumber(){
        return Math.round(Math.random() * (100 - 10 + 1) + 10)
    }
}

const inputValues = (inputs) => {
    return Array.from(inputs).map(input => parseFloat(input.value))
}

const inputs = document.querySelectorAll("input")
const buttons = document.querySelectorAll("button")
let triangle = new Triangle(0,0,0)

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        triangle.setSides(inputValues(inputs)[0], inputValues(inputs)[1], inputValues(inputs)[2])
        switch(e.target.id){
            case "isEditable":
                triangle.isEditable() ? alert("A derékszögű háromszög megszerkeszthető!") : alert("A derékszögű háromszög NEM szerkeszthető meg!")
                break
            case "randomSideLength":
                triangle.randomSideLength()
                let values = triangle.getSides()
                for(let i = 0; i < inputs.length; i++){
                    inputs[i].value = values[i] 
                }
                break
            case "calculatecSide":
                triangle.calculatecSide()
                inputs[2].value = triangle.getSides()[2]
                break
        }
    })
})

