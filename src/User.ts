class User{
  constructor(private name:string, private age:number){}

  speak():string{
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

export default User;