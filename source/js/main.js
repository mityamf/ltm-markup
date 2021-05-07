import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {stickNav} from './modules/stick-nav';
import {initSearch} from './modules/search';
import {initMenu} from './modules/init-menu';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
stickNav();
initSearch();
initMenu();

