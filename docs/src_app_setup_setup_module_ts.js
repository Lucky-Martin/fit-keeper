"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setup_setup_module_ts"],{

/***/ 80:
/*!***********************************************!*\
  !*** ./src/app/setup/setup-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPageRoutingModule": () => (/* binding */ SetupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _setup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.page */ 969);




const routes = [
    {
        path: '',
        component: _setup_page__WEBPACK_IMPORTED_MODULE_0__.SetupPage
    }
];
let SetupPageRoutingModule = class SetupPageRoutingModule {
};
SetupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetupPageRoutingModule);



/***/ }),

/***/ 7651:
/*!***************************************!*\
  !*** ./src/app/setup/setup.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPageModule": () => (/* binding */ SetupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-routing.module */ 80);
/* harmony import */ var _setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.page */ 969);







let SetupPageModule = class SetupPageModule {
};
SetupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetupPageRoutingModule
        ],
        declarations: [_setup_page__WEBPACK_IMPORTED_MODULE_1__.SetupPage]
    })
], SetupPageModule);



/***/ }),

/***/ 969:
/*!*************************************!*\
  !*** ./src/app/setup/setup.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPage": () => (/* binding */ SetupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _setup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.page.html?ngResource */ 3518);
/* harmony import */ var _setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.page.scss?ngResource */ 8696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/tracker/tracking.service */ 2456);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.model */ 8117);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ 9003);









let SetupPage = class SetupPage {
    constructor(toastController, userService, trackingService, router) {
        this.toastController = toastController;
        this.userService = userService;
        this.trackingService = trackingService;
        this.router = router;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_3__.User();
        this.slideIndex = 1;
    }
    ngAfterViewInit() {
        this.slides.lockSwipes(true);
    }
    selectGender(gender) {
        this.user.gender = gender;
    }
    nextSlide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            switch (this.slideIndex) {
                case 1:
                    if (!this.user.gender || !this.user.name || !this.user.age) {
                        return this.displayError('Моля попълнете всички данни!');
                    }
                    this.slideIndex = 2;
                    break;
                case 2:
                    if (!this.user.height || !this.user.weight) {
                        return this.displayError('Моля попълнете всички данни!');
                    }
                    this.slideIndex = 3;
                    break;
                case 3:
                    yield this.userService.createUser(this.user);
                    this.trackingService.calculateCalorieGoal(this.user);
                    this.router.navigate(['/home']);
                    break;
            }
            this.slides.lockSwipes(false);
            this.slides.slideNext().then(() => {
                this.slides.lockSwipes(true);
            });
        });
    }
    displayError(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: 'bottom',
                duration: 3000,
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
                message
            });
            yield toast.present();
        });
    }
};
SetupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__.TrackingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SetupPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSlides,] }]
};
SetupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-setup',
        template: _setup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetupPage);



/***/ }),

/***/ 8117:
/*!*************************************!*\
  !*** ./src/app/setup/user.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() {
        this.gender = 'male';
    }
}


/***/ }),

/***/ 8696:
/*!**************************************************!*\
  !*** ./src/app/setup/setup.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "h3 {\n  margin: 10px 0;\n}\n\n.age, .gender {\n  font-weight: bold;\n}\n\n.gender {\n  margin: 10px 0;\n}\n\n.button_margin {\n  margin: 0 10px 15px;\n}\n\nion-range::part(pin) {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: 50%;\n  transform: scale(1.01);\n  top: -26px;\n  min-width: 28px;\n  height: 28px;\n  transition: transform 120ms ease, background 120ms ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtBQURGIiwiZmlsZSI6InNldHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uYWdlLCAuZ2VuZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ2VuZGVyIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5idXR0b25fbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDE1cHg7XHJcbn1cclxuaW9uLXJhbmdlOjpwYXJ0KHBpbikge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuXHJcbiAgdG9wOiAtMjZweDtcclxuXHJcbiAgbWluLXdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgYmFja2dyb3VuZCAxMjBtcyBlYXNlO1xyXG59Il19 */";

/***/ }),

/***/ 3518:
/*!**************************************************!*\
  !*** ./src/app/setup/setup.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-justify-content-center ion-align-items-center\">\r\n  <div class=\"setup_container\">\r\n    <ion-slides style=\"height: 90vh;\">\r\n      <!-- Slide 1 -->\r\n      <ion-slide>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Пол & Възраст</ion-card-title>\r\n            <ion-card-subtitle>Инициализация 1/3</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <h2>Изберете пол</h2>\r\n            <p *ngIf=\"user.gender === 'male'\" class=\"gender\">Мъж</p>\r\n            <p *ngIf=\"user.gender === 'female'\" class=\"gender\">Жена</p>\r\n            <ion-segment value=\"default\">\r\n              <ion-segment-button value=\"default\" (click)=\"selectGender('male')\">\r\n                <ion-icon name=\"man\"></ion-icon>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"segment\" (click)=\"selectGender('female')\">\r\n                <ion-icon name=\"woman\"></ion-icon>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n            <h3>Въведете възраст</h3>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Въведи възраст</ion-label>\r\n              <ion-input placeholder=\"Възраст...\" type=\"number\" [(ngModel)]=\"user.age\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-top\">\r\n                <ion-label position=\"stacked\">Въведи име</ion-label>\r\n                <ion-input placeholder=\"Име...\" [(ngModel)]=\"user.name\"></ion-input>\r\n              </ion-item>\r\n          </ion-card-content>\r\n          <div class=\"button_margin\">\r\n            <ion-button\r\n              expand=\"block\"\r\n              class=\"next_button\"\r\n              (click)=\"nextSlide()\">\r\n              Напред\r\n              <ion-icon name=\"arrow-forward-sharp\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n      <!-- Slide 2 -->\r\n      <ion-slide>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Височина & Тегло</ion-card-title>\r\n            <ion-card-subtitle>Инициализация 2/3</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item fill=\"solid\">\r\n              <ion-label position=\"floating\">Височина</ion-label>\r\n              <ion-input type=\"number\" [(ngModel)]=\"user.height\"></ion-input>\r\n              <ion-note slot=\"helper\">Въведете височина в CM</ion-note>\r\n            </ion-item>\r\n            <ion-item fill=\"solid ion-margin-top\">\r\n              <ion-label position=\"floating\">Тегло</ion-label>\r\n              <ion-input type=\"number\" [(ngModel)]=\"user.weight\"></ion-input>\r\n              <ion-note slot=\"helper\">Въведете тегло в KG</ion-note>\r\n            </ion-item>\r\n          </ion-card-content>\r\n          <div class=\"button_margin\">\r\n            <ion-button\r\n              expand=\"block\"\r\n              class=\"next_button\"\r\n              (click)=\"nextSlide()\">\r\n              Напред\r\n              <ion-icon name=\"arrow-forward-sharp\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n      <!-- Slide 3 -->\r\n      <ion-slide>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Активност & Цел</ion-card-title>\r\n            <ion-card-subtitle>Инициализация 3/3</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <h3>Изберете активност</h3>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-select class=\"select-full-width\" placeholder=\"Моля изберете седмична активност\" [(ngModel)]=\"user.activity\">\r\n                  <ion-select-option value=\"sedentary\">Ниска (слаба или никаква активност)</ion-select-option>\r\n                  <ion-select-option value=\"lightly_active\">Леко активен (1–3 дни/седмица)</ion-select-option>\r\n                  <ion-select-option value=\"moderately_active\">Активен (3–5 дни/седмица)</ion-select-option>\r\n                  <ion-select-option value=\"very_active\">Високо активен (6–7 дни/седмица)</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n            <h3>Изберете цел</h3>\r\n            <ion-list>\r\n              <ion-radio-group value=\"loose_weight\" [(ngModel)]=\"user.goal\">\r\n                <ion-item>\r\n                  <ion-label>Понижаване на тегло</ion-label>\r\n                  <ion-radio slot=\"end\" value=\"loose_weight\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>Поддържане на тегло</ion-label>\r\n                  <ion-radio slot=\"end\" value=\"maintain_weight\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>Повишаване на тегло</ion-label>\r\n                  <ion-radio slot=\"end\" value=\"gain_weight\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-card-content>\r\n          <div class=\"button_margin\">\r\n            <ion-button\r\n              expand=\"block\"\r\n              class=\"next_button\"\r\n              (click)=\"nextSlide()\">\r\n              Завършване\r\n            </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_setup_setup_module_ts.js.map