import {iosVhFix} from './utils/ios-vh-fix';
import {toggleMenu} from './modules/mobile-menu';
import {alertShow} from './modules/form';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  toggleMenu();
  alertShow();
});
