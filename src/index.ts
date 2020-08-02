import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// user.set({ age: 999 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
  console.log('change number 1');
});
user.on('click', () => {
  console.log('change number 2');
});
user.on('change', () => {
  console.log('change number 3');
});

user.trigger('click');
