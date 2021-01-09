export default class Food{

  constructor(name,p,c,f){
    this.name = name;
    this.p = p;
    this.f =f;
    this.c = c;
  }

  getTotalCalories(){
    return (this.p*4+4*this.c+9*this.f);
  }
  getName(){
    return this.name;
  }
  getP(){
    return this.p;
  }
  getC(){
    return this.c;
  }
  getF(){
    return this.f;
  }

}