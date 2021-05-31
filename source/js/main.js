import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {stickNav} from './modules/stick-nav';
import {initSearch} from './modules/search';
import {initMenu} from './modules/init-menu';
import {toggleGallery} from './modules/toggle-gallery';
import {initGallerySwiper} from './modules/init-gallery-swiper';
import {regSwiper} from './modules/sliders/reg-swiper';
import {homeSwiper} from './modules/sliders/home-swiper';
import {photosSwiper} from './modules/sliders/photos-swiper';
import {eventSwiper} from './modules/sliders/event-swiper';
import {cardSwiper} from './modules/sliders/card-swiper';
import {initSmoothAnchors} from './modules/init-smooth-anchors';
import {dropdown} from './modules/dropdown';
import {initModalGallerySwiper} from './modules/init-modal-gallery-swiper';
import {buyerSwiper} from './modules/sliders/buyer-swiper';
import {directionSlider} from './modules/sliders/direction-swiper';
import {initResizePhotos} from './modules/admin-gallery';
import {initLogin} from './modules/init-login';

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
photosSwiper();
eventSwiper();
cardSwiper();
dropdown();
initSmoothAnchors();
homeSwiper();
initModalGallerySwiper();
initResizePhotos();
regSwiper();
buyerSwiper();
directionSlider();
initLogin();
