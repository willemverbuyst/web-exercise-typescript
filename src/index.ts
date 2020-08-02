import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// user.set({ age: 999 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {});
user.on('click', () => {});
user.on('asdfad', () => {});

console.log(user.events);
