class pet {
    constructor(name, type) {
      this.name = name
      this.type = type
    }
  
    health = 30
  
    feed() {
      console.log(`${this.name} is feeding... hunger - 10 etc`)
      this.health -= 10
    }
  }
  
  exports.pet = pet