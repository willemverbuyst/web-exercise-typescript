import { User } from './models/User';

const user = new User({ name: 'sjaak', age: 80808 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('user was changed again');
});

user.set({ name: 'new names' });
