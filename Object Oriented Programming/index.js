class vehicles {
    constructor(name, wheels, production) {
        this.name = name
        this.wheels = wheels
        this.production = production
    }
    wheels() {
        return `The ${this.name} is a  ${this.wheels} wheeler vehicle and is produced in the year ${production}`
    }
}

class cars extends vehicles {
    constructor(name, wheels, production, brand, color) {
        super(name, wheels, production)
        this.brand = brand
        this.color = color

    }
    car_info() {
        return `This ${this.name} brand name is ${this.brand} and is of ${color} color`
    }
}

class hybrid extends cars {
    constructor(name, wheels, production, brand, color) {
        super(name, wheels, production, brand, color)
    }
    function() {
        return `${this.brand} can run manually as well as automatic.`
    }

}
class manual extends cars {
    constructor(name, wheels, production, brand, color) {
        super(name, wheels, production, brand, color)
    }
    function() {
        return `${this.brand} can run manually only.`
    }
}
class automatic extends cars {
    constructor(name, wheels, production, brand, color) {
        super(name, wheels, production, brand, color)
    }
    function() {
        return `${this.brand} can run automatically.`
    }
}
let vehicle1 = new hybrid("car", 4, 2022, "Sportage", "White")
let vehicle2 = new manual("car", 4, 1990, "Mehran", "Red")
let vehicle3 = new automatic("car", 4, 2010, "Alto", "Silver")
console.log(vehicle1, vehicle2, vehicle3)
console.log(vehicle1.function(), vehicle2.function(), vehicle3.function())
