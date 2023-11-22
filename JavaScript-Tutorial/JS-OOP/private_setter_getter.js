
function carDetails() { 
    let kms = 0; 
    let speed = 0; 
    this.speedUp = (intialSpeed) => { 
        speed += intialSpeed; 
        kms += speed; 
    }; 
    this.totalkmsDriven = () => kms; 
    return { speedUp, totalkmsDriven }; 
} 

let car_object = carDetails(); 
car_object.speedUp(7); 
car_object.speedUp(9); 
console.log(car_object.totalkmsDriven()); 

// Undefined, since it is made private: 
console.log(car_object.kms); 



const temperature = { 
	_celsius: 0, 
	get fahrenheit() { 
		return this._celsius * 1.8 + 32; 
	}, 
	set fahrenheit(value) { 
		this._celsius = (value - 32) / 1.8; 
	}, 
}; 

console.log(temperature.fahrenheit); // 32 
temperature.fahrenheit = 68; 
console.log(temperature._celsius); // 20
