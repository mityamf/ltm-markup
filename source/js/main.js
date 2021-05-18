import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {stickNav} from './modules/stick-nav';
import {initSearch} from './modules/search';
import {initMenu} from './modules/init-menu';
import {toggleGallery} from './modules/toggle-gallery';
import {initGallerySwiper} from './modules/init-gallery-swiper';
import {initSwiper} from './modules/init-swiper';
import {initSmoothAnchors} from './modules/init-smooth-anchors';
import {dropdown} from './modules/dropdown';
import {initModalGallerySwiper} from './modules/init-modal-gallery-swiper';

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
toggleGallery();
initGallerySwiper();
initSwiper();
dropdown();
initSmoothAnchors();
initModalGallerySwiper();
