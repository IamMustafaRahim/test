class Mustafa {
	constructor (name,age){
		this.name = name;
		this.age = age;

	}
	echo(){
		console.log(`hello my name is ${this.name} and my age is ${this.age} `);
	}
}

const mustafa = new Mustafa('mustafa',18);
mustafa.echo();