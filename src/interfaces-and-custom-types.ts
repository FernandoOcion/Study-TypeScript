type Coordinate = {
	x: number;
	y: number;
};

function calculateDIstance(pontA: Coordinate, pontB: Coordinate): number {
	const dx = pontB.x - pontA.x;
	const dy = pontB.y - pontA.y;

	const result = Math.sqrt(dx * dx + dy * dy);

	return result;
}

const coordinateA: Coordinate = {
	x: 20,
	y: 8,
};

const coordinateB: Coordinate = {
	x: 15,
	y: 30,
};

// console.log(calculateDIstance(coordinateA, coordinateB));

////////////////////////////////////////////////////////

interface Car {
	brand: string;
	model: string;
	year: number;
	startEngine: () => void;
}

const myCar: Car = {
	brand: "Audi",
	model: "A3",
	year: 2023,
	startEngine: () => {
		console.log("Engine Started!");
	},
};

const myCar2: Car = {
	brand: "Honda",
	model: "Civic",
	year: 2017,
	startEngine: () => {
		console.log("Engine Started!");
	},
};

function drive(car: Car): void {
	console.log(`Driving my ${car.brand} - ${car.model}`);

	car.startEngine();
}

drive(myCar2);
