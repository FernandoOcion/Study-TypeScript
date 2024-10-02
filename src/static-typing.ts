const age: number = 35;
const fullname: string = "Fernando";
const milionário: boolean = true;

function greeting(fullName: string): string | void {
	if (fullName) {
		return `Olá, ${fullName}`;
	}
}

function stringOrNumberSize(value: string | number): number {
	if (typeof value === "string") {
		return value.length;
	}

	return value;
}
