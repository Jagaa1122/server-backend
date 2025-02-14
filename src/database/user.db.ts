type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  roles?: string;
};

export const users: User[] = [
  {
    _id: "1",
    name: "John Doe",
    email: "test@gmail.com",
    password: "123456",
  },
];
