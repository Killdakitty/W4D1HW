class Hamster{
    constructor(owner, name, price){
        this.owner=owner;
        this.name=name;
        this.price=price;
    }

    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        return this.price;
    }
    
}

const Gus=new Hamster('Timmy', 'Gus', 100);
console.log(Gus);
Gus.wheelRun();
Gus.eatFood();
Gus.getPrice();



 class Person{
    constructor(name, age=0, height=0, weight=0, mood=0, hamsters=[], bankAccount=0){
        this.name=name;
        this.age=age;
        this.height=height;
        this.weight=weight;
        this.mood=mood;
        this.hamsters=hamsters;
        this.bankAccount=bankAccount;
    }

    getName(){
       return this.getName;
    
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`This person's name is ${this.name}`);
    }

    eat(){
        this.weight++; this.mood++;
    }
    eatTimes(num){
        this.weight+=num; this.mood+=num
    }
    exrcise(){
        this.weight--;
    }
    exrciseTimes(num){
        this.weight-=num
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    ageUpTimes(num){
        this.age+=num;
        this.height+=num;
        this.weight+=num;
        this.mood-=num;
        this.bankAccount+=num;
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount+=hamster.getPrice();
    }
 }
const Timmy = new Person('Timmy', 5);
Timmy.eatTimes(5); 
Timmy.exrciseTimes(5);
Timmy.ageUpTimes(9);
Timmy.buyHamster(Gus);
Timmy.ageUpTimes(15);
Timmy.ageUpTimes(2);
Timmy.exrcise(2);

console.log(Timmy);
