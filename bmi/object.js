const person = {
    for: 'francis',
    const: '30',
    let: 90,
    "course code": 112,
    12: 900
}

const teacher = {
    name: 'franc enemuo',
    town: 'anambra',
    hobbies: ['reading', 'writting', 'coding']
    statement: function(){
        alert('Hello my name is ${this.name}, I am from ${this.town}. I love ${this.hobbies}')
    }
}
teacher.name = 'chianme enemuo'
teacher.age = 55
teacher['town'] = 'umuchu'

delete teacher.hobbies

function teacher[fname, age, course]{
    this.fname = fname,
    this.age = age,
    this.course = course,
    this.statement = function[]{
        alert('Hello my name is ${this.fname}, I am from ${this.town}. I love ${this.hobbies}')
    }
}

const teacher = new Teacher('franc enemuo', 20, 'front with react')
const teacher = new Teacher('proper Edwaed', 25, 'backed with Django') 