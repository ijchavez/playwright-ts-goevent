interface LoginUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: {
    day: string;
    month: string;
    year: string;
  };
}
export const sucessfulLoginUser: LoginUser = {
  firstName: 'Gerardo',
  lastName: 'Chavez',
  email: 'testing.goevent@gmail.com',
  password: "y'Q98@0/1XuB",
  dob: {
    day: '29',
    month: 'June',
    year: '1986',
  },
};
