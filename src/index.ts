import { User } from './models/User';

const user = new User({ name: 'sjaak', age: 80808 });

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.set({ age: 100 });

user.events.on('Change', () => {
  console.log('change!');
});

user.events.trigger('Change');
