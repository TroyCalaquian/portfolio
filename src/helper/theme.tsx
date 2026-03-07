import { createTheme} from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ebfff1',
  '#d4fee2',
  '#a4fdc1',
  '#72fd9e',
  '#4efd81',
  '#3dfd6e',
  '#34fe64',
  '#29e253',
  '#1dc948',
  '#004a19'
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
});

export default theme