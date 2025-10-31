/*
    物件導向
    封裝（Encapsulation）、繼承（Inheritance）和多型（Polymorphism）
    先聽過這三個就好
*/ 

// Q: 什麼是物件?
// A: 任何東西都可以是物件

function Student(name, old, bmi){
    this.name = name;
    this.old = old;
    this.BMI = bmi
}

Student.prototype.doHomeWork = function(param){
    
}

Student.prototype.goHome = function(param){

}

// Q:如何使用物件?
// A: 這裡要講到 Class(類別) 與 Instance(實體)

// ex: 學生是一個類別,老師是一個類別
// 王OO是一位學生, 這是一個實體, 林XX是個老師 這是一個實體

const tom = new Student("Tom", 21, 23.5);
const john = new Student("John", 22, 21.5);


// 還有一種物件(js特別的東西), Json, 這是一個複合式的資料結構

const alice = {
    name: 'Alice',
    old: 25,
    bmi: 18
}