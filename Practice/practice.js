// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

 let createRandomUser = () =>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
  }

let user = [];
for(let i=1; i<5; i++){
user.push(createRandomUser())
}
console.log(user)
