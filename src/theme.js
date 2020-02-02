
const white = '#FFFFFF';
const black = '#161617';
const grey = '#F8F8F9';

const lightTheme = {
  background: grey,
  body: black,
  color: 'red',
};

const darkTheme = {
  background: black,
  body: white,
}

const theme = mode =>(mode === 'dark' ? darkTheme : lightTheme);

export default theme;