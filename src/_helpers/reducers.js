import sortReducers from '../utils/sortReducers';
import themeReducer, { themeModule } from '../../src/components/ThemeProvider/ThemeDucks';

export default sortReducers({
  [themeModule]: themeReducer,
});
