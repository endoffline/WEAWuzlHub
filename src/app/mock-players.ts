import {Player} from "../models/player";

export const PLAYERS: Player[] = [
  {
    Id: 1,
    IsAdmin: true,
    FirstName: 'Stefan',
    LastName: 'Höller',
    NickName: '',
    Email: '',
    Password: '',
    ProfileImage: '',
    Rating: {
      Id: 1,
      PlayerId: 1,
      Date: '27.01.2017',
      Rating: 1000
    },
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  },
  {
    Id: 2,
    IsAdmin: true,
    FirstName: 'Peter',
    LastName: 'Horitzer',
    NickName: '',
    Email: '',
    Password: '',
    ProfileImage: '',
    Rating: {
      Id: 2,
      PlayerId: 2,
      Date: '27.01.2017',
      Rating: 2000
    },
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  },
  {
    Id: 3,
    IsAdmin: true,
    FirstName: 'Simon',
    LastName: 'Nowak',
    NickName: '',
    Email: '',
    Password: '',
    ProfileImage: '',
    Rating: {
      Id: 1,
      PlayerId: 1,
      Date: '27.01.2017',
      Rating: 3000
    },
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  }
];
