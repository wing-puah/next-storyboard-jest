import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';

addDecorator(storyFn =>
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

// automatically import all files ending in *.stories.js
const req = requireContext('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
