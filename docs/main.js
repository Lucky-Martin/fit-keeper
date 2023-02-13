(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-search/food-search.component */ 7019);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history/history.component */ 3656);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.page */ 2267);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup/user.service */ 9003);
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts/workouts.component */ 9311);









const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [_setup_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService],
        component: _home_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage
    },
    {
        path: 'meal_history',
        canActivate: [_setup_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService],
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_1__.HistoryComponent
    },
    {
        path: 'food',
        canActivate: [_setup_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService],
        component: _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_0__.FoodSearchComponent
    },
    {
        path: 'workouts',
        canActivate: [_setup_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService],
        component: _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_5__.WorkoutsComponent
    },
    {
        path: 'settings',
        canActivate: [_setup_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService],
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent
    },
    {
        path: 'setup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_setup_setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setup/setup.module */ 7651)).then(m => m.SetupPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup/user.service */ 9003);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);






let AppComponent = class AppComponent {
    constructor(userService) {
        this.userService = userService;
        this.appearanceKey = 'APPEARANCE';
        this.userService.userLoggedStatus.subscribe(value => {
            this.loggedIn = value;
        });
        this.userService.fetchUser().then(value => {
            this.loggedIn = !!value;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({ key: this.appearanceKey });
            this.updateTheme(value);
        });
    }
    updateTheme(value) {
        switch (value) {
            case 'light_mode':
                document.body.setAttribute('color-theme', 'light');
                break;
            case 'dark_mode':
                document.body.setAttribute('color-theme', 'dark');
                break;
            default:
                value = 'light_mode';
                break;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _setup_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _headers_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers/home-header/home-header.component */ 5565);
/* harmony import */ var _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-search/food-search.component */ 7019);
/* harmony import */ var _food_search_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-search/food-list/food-list.component */ 9387);
/* harmony import */ var _food_search_add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-search/add-food-modal/add-food-modal.component */ 2261);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.page */ 2267);
/* harmony import */ var _home_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/tracker/tracker.component */ 9606);
/* harmony import */ var _food_search_food_list_food_graph_preview_food_graph_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-search/food-list/food-graph-preview/food-graph-preview.component */ 3691);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_meal_history_meal_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/meal-history/meal-history.component */ 6892);
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workouts/workouts.component */ 9311);
/* harmony import */ var _home_tracker_tracker_nutrient_tracker_nutrient_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/tracker/tracker-nutrient/tracker-nutrient.component */ 6841);
/* harmony import */ var _home_day_selector_day_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/day-selector/day-selector.component */ 5635);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 1987);
/* harmony import */ var _headers_meal_history_header_meal_history_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./headers/meal-history-header/meal-history-header.component */ 5687);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ 3656);
/* harmony import */ var _food_search_add_food_modal_nutrient_button_nutrient_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./food-search/add-food-modal/nutrient-button/nutrient-button.component */ 7455);
/* harmony import */ var _food_search_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./food-search/favourites/favourites.component */ 7981);
/* harmony import */ var _history_history_food_list_history_food_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./history/history-food-list/history-food-list.component */ 9495);
/* harmony import */ var _history_favourites_card_favourites_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./history/favourites-card/favourites-card.component */ 5174);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _settings_settings_button_settings_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings/settings-button/settings-button.component */ 1981);
/* harmony import */ var _settings_edit_setting_modal_edit_setting_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/edit-setting-modal/edit-setting-modal.component */ 8074);
/* harmony import */ var _settings_edit_setting_modal_profile_setting_content_profile_setting_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/edit-setting-modal/profile-setting-content/profile-setting-content.component */ 3097);
/* harmony import */ var _settings_edit_setting_modal_goals_setting_component_goals_setting_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/edit-setting-modal/goals-setting-component/goals-setting-component.component */ 1403);
/* harmony import */ var _settings_edit_setting_modal_appearance_setting_component_appearance_setting_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/edit-setting-modal/appearance-setting-component/appearance-setting-component.component */ 5578);
/* harmony import */ var _workouts_workout_group_workout_group_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./workouts/workout-group/workout-group.component */ 1182);
/* harmony import */ var _home_weight_tracker_weight_tracker_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/weight-tracker/weight-tracker.component */ 3814);
/* harmony import */ var _food_search_scan_food_barcode_scan_food_barcode_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./food-search/scan-food-barcode/scan-food-barcode.component */ 405);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 2703);





































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_31__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _headers_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_2__.HomeHeaderComponent, _headers_meal_history_header_meal_history_header_component__WEBPACK_IMPORTED_MODULE_14__.MealHistoryHeaderComponent, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__.ToolbarComponent,
            _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_3__.FoodSearchComponent, _food_search_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_4__.FoodListComponent, _food_search_add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddFoodModalComponent,
            _home_home_page__WEBPACK_IMPORTED_MODULE_6__.HomePage, _history_history_component__WEBPACK_IMPORTED_MODULE_15__.HistoryComponent, _home_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_7__.TrackerComponent, _food_search_food_list_food_graph_preview_food_graph_preview_component__WEBPACK_IMPORTED_MODULE_8__.FoodGraphPreviewComponent,
            _home_meal_history_meal_history_component__WEBPACK_IMPORTED_MODULE_9__.MealHistoryComponent, _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_10__.WorkoutsComponent, _home_tracker_tracker_nutrient_tracker_nutrient_component__WEBPACK_IMPORTED_MODULE_11__.TrackerNutrientComponent,
            _home_day_selector_day_selector_component__WEBPACK_IMPORTED_MODULE_12__.DaySelectorComponent, _home_meal_history_meal_history_component__WEBPACK_IMPORTED_MODULE_9__.MealHistoryComponent, _food_search_add_food_modal_nutrient_button_nutrient_button_component__WEBPACK_IMPORTED_MODULE_16__.NutrientButtonComponent,
            _food_search_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_17__.FavouritesComponent, _history_history_food_list_history_food_list_component__WEBPACK_IMPORTED_MODULE_18__.HistoryFoodListComponent, _history_favourites_card_favourites_card_component__WEBPACK_IMPORTED_MODULE_19__.FavouritesCardComponent,
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_20__.SettingsComponent, _settings_settings_button_settings_button_component__WEBPACK_IMPORTED_MODULE_21__.SettingsButtonComponent, _settings_edit_setting_modal_edit_setting_modal_component__WEBPACK_IMPORTED_MODULE_22__.EditSettingModalComponent,
            _settings_edit_setting_modal_profile_setting_content_profile_setting_content_component__WEBPACK_IMPORTED_MODULE_23__.ProfileSettingContentComponent, _settings_edit_setting_modal_goals_setting_component_goals_setting_component_component__WEBPACK_IMPORTED_MODULE_24__.GoalsSettingComponentComponent, _settings_edit_setting_modal_appearance_setting_component_appearance_setting_component_component__WEBPACK_IMPORTED_MODULE_25__.AppearanceSettingComponentComponent,
            _workouts_workout_group_workout_group_component__WEBPACK_IMPORTED_MODULE_26__.WorkoutGroupComponent, _home_weight_tracker_weight_tracker_component__WEBPACK_IMPORTED_MODULE_27__.WeightTrackerComponent, _food_search_scan_food_barcode_scan_food_barcode_component__WEBPACK_IMPORTED_MODULE_28__.ScanFoodBarcodeComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_33__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule],
        providers: [_awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_29__.BarcodeScanner, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_33__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2261:
/*!************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/add-food-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFoodModalComponent": () => (/* binding */ AddFoodModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_food_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-food-modal.component.html?ngResource */ 4414);
/* harmony import */ var _add_food_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-food-modal.component.scss?ngResource */ 9123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_food_search_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/food-search/favourites/favourites.service */ 7652);
/* harmony import */ var _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/tracker/food.model */ 2690);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! translate */ 6486);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(translate__WEBPACK_IMPORTED_MODULE_4__);








let AddFoodModalComponent = class AddFoodModalComponent {
    constructor(favouritesService, modalController) {
        this.favouritesService = favouritesService;
        this.modalController = modalController;
        this.button = true;
        this.quantity = 1;
        this.favourite = false;
        this.favourites = [];
        if (!this.food) {
            this.food = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__.Food();
        }
        this.favouritesService.fetchFavourites().then(value => {
            this.favourites = value;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.favourite = this.favourites.indexOf(this.food.name) > -1;
            this.food.name = yield translate__WEBPACK_IMPORTED_MODULE_4___default()(this.food.name, { from: 'en', to: 'bg' });
        });
    }
    toggleFavourite() {
        if (this.favourite) {
            this.favouritesService.removeFoodFromFavourites(this.food.name).then(() => {
                this.favourite = false;
            });
        }
        else {
            this.favouritesService.addFoodToFavourites(this.food.name).then(() => {
                this.favourite = true;
            });
        }
    }
    onWeightChanged(event) {
        if (event.value && event.value < 1) {
            return this.food.weight = 1;
        }
        else if (event.value > 1000) {
            return this.food.weight = 1000;
        }
        if (!this.initialFood) {
            this.initialFood = this.food;
        }
        this.food.weight = event.value;
        const multiplier = event.value / 100;
        const foodCopyJson = JSON.stringify(this.initialFood);
        this.food.macros.protein = Math.round(this.initialFood.macros.protein * multiplier);
        this.food.macros.carbs = Math.round(this.initialFood.macros.carbs * multiplier);
        this.food.macros.fats = Math.round(this.initialFood.macros.fats * multiplier);
        this.food.calories = Math.round(this.initialFood.calories * multiplier);
        this.initialFood = JSON.parse(foodCopyJson);
    }
    onMacrosChanged(nutrientName, value) {
        let difference = value - Math.round(this.food.macros[nutrientName]);
        let multiplier = 1;
        value > this.food.macros[nutrientName] ? multiplier : -multiplier;
        this.food.macros[nutrientName] = value;
        console.log(value, multiplier, (difference * 4) * multiplier);
        switch (nutrientName) {
            case 'protein' || 0:
                this.food.calories += (difference * 4) * multiplier;
                break;
            case 'fats':
                this.food.calories += (difference * 9) * multiplier;
                break;
        }
    }
    updateQuantity(increase) {
        if (!increase && this.quantity === 1) {
            return;
        }
        this.quantity += increase ? 1 : -1;
    }
    cancel() {
        this.reset();
        return this.modalController.dismiss(null, 'cancel');
    }
    confirm() {
        const foodCopy = this.food;
        this.reset();
        return this.modalController.dismiss({ food: foodCopy, quantity: this.quantity }, 'confirm');
    }
    reset() {
        this.food = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__.Food();
    }
};
AddFoodModalComponent.ctorParameters = () => [
    { type: src_app_food_search_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__.FavouritesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AddFoodModalComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['modal',] }]
};
AddFoodModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-custom-food-modal',
        template: _add_food_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_food_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddFoodModalComponent);



/***/ }),

/***/ 7455:
/*!*****************************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/nutrient-button/nutrient-button.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NutrientButtonComponent": () => (/* binding */ NutrientButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nutrient_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nutrient-button.component.html?ngResource */ 8058);
/* harmony import */ var _nutrient_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nutrient-button.component.scss?ngResource */ 5377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);





let NutrientButtonComponent = class NutrientButtonComponent {
    constructor(pickerControler) {
        this.pickerControler = pickerControler;
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    openPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const options = [];
            const kilogram = 1000;
            let selectedIndex = 0;
            for (let i = 0; i <= kilogram; i++) {
                if (Math.round(this.value) === i) {
                    selectedIndex = i;
                }
                options.push({
                    text: i.toString(),
                    value: i
                });
            }
            const picker = yield this.pickerControler.create({
                columns: [
                    {
                        name: 'weight',
                        options: options
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            this.onChangeValue(value.weight.value);
                        },
                    },
                ],
            });
            picker.columns[0].selectedIndex = selectedIndex;
            yield picker.present();
        });
    }
    onChangeValue(value) {
        this.changeValue.emit({ key: this.nutrientName, value });
    }
    onChangeValueEvent(event) {
        this.changeValue.emit({ key: this.nutrientName, value: this.value });
    }
};
NutrientButtonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PickerController }
];
NutrientButtonComponent.propDecorators = {
    nutrientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    changeValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
NutrientButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-nutrient-button',
        template: _nutrient_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nutrient_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NutrientButtonComponent);



/***/ }),

/***/ 7981:
/*!****************************************************************!*\
  !*** ./src/app/food-search/favourites/favourites.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesComponent": () => (/* binding */ FavouritesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favourites_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.component.html?ngResource */ 6975);
/* harmony import */ var _favourites_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.component.scss?ngResource */ 4782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_home_tracker_food_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/tracker/food.model */ 2690);
/* harmony import */ var src_app_home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/tracker/tracking.service */ 2456);
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../food.service */ 6727);
/* harmony import */ var _favourites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites.service */ 7652);
/* harmony import */ var _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-food-modal/add-food-modal.component */ 2261);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! translate */ 6486);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(translate__WEBPACK_IMPORTED_MODULE_7__);











let FavouritesComponent = class FavouritesComponent {
    constructor(favouritesService, trackingService, modalController, foodService) {
        this.favouritesService = favouritesService;
        this.trackingService = trackingService;
        this.modalController = modalController;
        this.foodService = foodService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.favourites = [];
        this.favouritesBG = [];
        this.open = true;
        this.fetching = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadFavourites();
        });
    }
    onAddFood(foodData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const food = new src_app_home_tracker_food_model__WEBPACK_IMPORTED_MODULE_2__.Food();
            food.name = foodData.text;
            food.image = foodData.parsed[0].food.image;
            food.weight = 100;
            food.macros.protein = foodData.parsed[0].food.nutrients.PROCNT;
            food.macros.carbs = foodData.parsed[0].food.nutrients.CHOCDF;
            food.macros.fats = foodData.parsed[0].food.nutrients.FAT;
            food.calories = foodData.parsed[0].food.nutrients.ENERC_KCAL;
            const modal = yield this.modalController.create({
                component: _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_6__.AddFoodModalComponent,
                componentProps: { food }
            });
            yield this.onClose();
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                yield this.trackingService.addFood(data.food, data.quantity);
            }
        });
    }
    removeFromFavourites(food) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.fetching = true;
            yield this.favouritesService.removeFoodFromFavourites(food.text);
            yield this.loadFavourites();
        });
    }
    onClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.open = false;
            yield this.modal.dismiss();
            this.closed.emit();
        });
    }
    loadFavourites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const favouritesList = (yield this.favouritesService.fetchFavourites()) || [];
            this.favouritesBG = favouritesList;
            this.fetching = true;
            this.favourites = [];
            for (let i = 0; i < favouritesList.length; i++) {
                this.foodService.fetchFoodData(yield translate__WEBPACK_IMPORTED_MODULE_7___default()(favouritesList[i], { from: 'bg', to: 'en' })).subscribe(food => {
                    this.favourites.push(food);
                    if (i === favouritesList.length - 1) {
                        this.fetching = false;
                    }
                });
            }
            if (favouritesList.length === 0) {
                this.fetching = false;
            }
        });
    }
};
FavouritesComponent.ctorParameters = () => [
    { type: _favourites_service__WEBPACK_IMPORTED_MODULE_5__.FavouritesService },
    { type: src_app_home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _food_service__WEBPACK_IMPORTED_MODULE_4__.FoodService }
];
FavouritesComponent.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['modal',] }]
};
FavouritesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-favourites',
        template: _favourites_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favourites_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritesComponent);



/***/ }),

/***/ 7652:
/*!**************************************************************!*\
  !*** ./src/app/food-search/favourites/favourites.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesService": () => (/* binding */ FavouritesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);



let FavouritesService = class FavouritesService {
    constructor() {
        this.favouritesKey = 'FAVOURITES';
        this.initiate();
    }
    addFoodToFavourites(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const favourites = yield this.fetchFavourites();
            favourites.push(name);
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key: this.favouritesKey, value: JSON.stringify(favourites) });
        });
    }
    removeFoodFromFavourites(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let favourites = yield this.fetchFavourites();
            const foodIndex = favourites.indexOf(name);
            if (foodIndex > -1 && favourites.length === 1) {
                favourites = [];
            }
            else {
                favourites.splice(foodIndex, 1);
            }
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key: this.favouritesKey, value: JSON.stringify(favourites) });
        });
    }
    fetchFavourites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: this.favouritesKey });
            return JSON.parse(value);
        });
    }
    checkIfFavourite(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fetchFavourites()[name];
        });
    }
    initiate() {
        this.fetchFavourites().then((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!value) {
                yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key: this.favouritesKey, value: '[]' });
            }
        }));
    }
};
FavouritesService.ctorParameters = () => [];
FavouritesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FavouritesService);



/***/ }),

/***/ 3691:
/*!******************************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-graph-preview/food-graph-preview.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodGraphPreviewComponent": () => (/* binding */ FoodGraphPreviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _food_graph_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-graph-preview.component.html?ngResource */ 6318);
/* harmony import */ var _food_graph_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-graph-preview.component.scss?ngResource */ 6705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var _update_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-graph.service */ 6420);






let FoodGraphPreviewComponent = class FoodGraphPreviewComponent {
    constructor(updateGraphService) {
        this.updateGraphService = updateGraphService;
    }
    ngAfterViewInit() {
        this.updateGraphService.getUpdateGraphAsObservable().subscribe(this.updateGraph.bind(this));
        this.graph = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.graphRef.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Protein', 'Carbs', 'Fats'],
                datasets: [{
                        label: 'Macros',
                        data: [this.food.macros.protein, this.food.macros.carbs, this.food.macros.fats],
                        backgroundColor: [
                            '#4DB4D7',
                            '#48BF91',
                            '#333333'
                        ],
                        hoverBackgroundColor: [
                            '#4DB4D7',
                            '#48BF91',
                            '#333333'
                        ]
                    }]
            }
        });
    }
    updateGraph(macros) {
        this.graph.data.datasets[0].data.pop();
        this.graph.data.datasets[0].data.pop();
        this.graph.data.datasets[0].data.pop();
        this.graph.data.datasets[0].data.push(macros.protein);
        this.graph.data.datasets[0].data.push(macros.carbs);
        this.graph.data.datasets[0].data.push(macros.fats);
        this.graph.update();
    }
};
FoodGraphPreviewComponent.ctorParameters = () => [
    { type: _update_graph_service__WEBPACK_IMPORTED_MODULE_3__.UpdateGraphService }
];
FoodGraphPreviewComponent.propDecorators = {
    food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    graphRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['graph',] }]
};
FoodGraphPreviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-food-graph-preview',
        template: _food_graph_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_food_graph_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoodGraphPreviewComponent);



/***/ }),

/***/ 6420:
/*!**********************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-graph-preview/update-graph.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateGraphService": () => (/* binding */ UpdateGraphService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);



let UpdateGraphService = class UpdateGraphService {
    constructor() {
        this.updatePreviewGraph = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    updateGraphPreview(macros) {
        this.updatePreviewGraph.next(macros);
    }
    getUpdateGraphAsObservable() {
        return this.updatePreviewGraph.asObservable();
    }
};
UpdateGraphService.ctorParameters = () => [];
UpdateGraphService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UpdateGraphService);



/***/ }),

/***/ 9387:
/*!**************************************************************!*\
  !*** ./src/app/food-search/food-list/food-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodListComponent": () => (/* binding */ FoodListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _food_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-list.component.html?ngResource */ 6213);
/* harmony import */ var _food_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-list.component.scss?ngResource */ 5675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favourites/favourites.service */ 7652);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! translate */ 6486);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(translate__WEBPACK_IMPORTED_MODULE_3__);






let FoodListComponent = class FoodListComponent {
    constructor(favouritesService) {
        this.favouritesService = favouritesService;
        this.foodSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.favourites = [];
        this.fetchFavourites();
    }
    ngOnInit() {
    }
    addToFavourites(food) {
        this.favouritesService.addFoodToFavourites(food).then(() => {
            this.fetchFavourites();
        });
    }
    removeFromFavourites(food) {
        this.favouritesService.removeFoodFromFavourites(food).then(() => {
            console.log('here');
            this.fetchFavourites();
        });
    }
    selected(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.foodSelected.emit(yield translate__WEBPACK_IMPORTED_MODULE_3___default()(item, { from: 'bg', to: 'en' }));
        });
    }
    fetchFavourites() {
        this.favouritesService.fetchFavourites().then(value => {
            this.favourites = value;
        });
    }
};
FoodListComponent.ctorParameters = () => [
    { type: _favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__.FavouritesService }
];
FoodListComponent.propDecorators = {
    foodList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    foodSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
FoodListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-food-list',
        template: _food_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_food_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoodListComponent);



/***/ }),

/***/ 7019:
/*!******************************************************!*\
  !*** ./src/app/food-search/food-search.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodSearchComponent": () => (/* binding */ FoodSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _food_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-search.component.html?ngResource */ 8634);
/* harmony import */ var _food_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-search.component.scss?ngResource */ 1021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/tracker/food.model */ 2690);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/tracker/tracking.service */ 2456);
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food.service */ 6727);
/* harmony import */ var _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-food-modal/add-food-modal.component */ 2261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var transliteration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! transliteration */ 2311);
/* harmony import */ var transliteration__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(transliteration__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! translate */ 6486);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(translate__WEBPACK_IMPORTED_MODULE_7__);












let FoodSearchComponent = class FoodSearchComponent {
    constructor(router, route, trackingService, foodService, modalController) {
        this.router = router;
        this.route = route;
        this.trackingService = trackingService;
        this.foodService = foodService;
        this.modalController = modalController;
        this.foundFoods = [];
        this.fetching = false;
        this.favouritesOpened = false;
        this.predefinedDate = null;
        this.predefinedFoodQuery = null;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.route.queryParams
                .subscribe(params => {
                this.predefinedDate = params.day;
                this.predefinedFoodQuery = params.food;
                console.log(this.predefinedDate, this.predefinedFoodQuery);
                if (this.predefinedFoodQuery) {
                    this.fetching = true;
                    this.foodService.fetchFoodData(this.predefinedFoodQuery).subscribe((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        const food = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_2__.Food();
                        food.name = value.text;
                        food.image = value.parsed[0].food.image;
                        food.weight = 100;
                        food.macros.protein = value.parsed[0].food.nutrients.PROCNT;
                        food.macros.carbs = value.parsed[0].food.nutrients.CHOCDF;
                        food.macros.fats = value.parsed[0].food.nutrients.FAT;
                        food.calories = value.parsed[0].food.nutrients.ENERC_KCAL;
                        this.openInputModal(food);
                    }), err => {
                        console.log(err);
                    });
                }
            });
        });
    }
    openFavourites() {
        this.favouritesOpened = true;
    }
    closeFavourites() {
        this.favouritesOpened = false;
    }
    inputChanged(event, trl = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const query = event.detail.value;
            if (query === '') {
                this.foundFoods = [];
                return;
            }
            let translatedQuery;
            if (trl) {
                translatedQuery = (0,transliteration__WEBPACK_IMPORTED_MODULE_6__.transliterate)(query);
            }
            else {
                translatedQuery = yield translate__WEBPACK_IMPORTED_MODULE_7___default()(query, { from: 'bg', to: 'en' });
            }
            this.fetching = true;
            this.foodService.fetchFoodAutocomplete(translatedQuery).subscribe((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                for (let i = 0; i < value.length; i++) {
                    value[i] = yield translate__WEBPACK_IMPORTED_MODULE_7___default()(value[i], { from: 'en', to: 'bg' });
                }
                this.foundFoods = value;
                if (this.foundFoods.length === 0 && !trl) {
                    return this.inputChanged(event, true);
                }
                this.fetching = false;
            }), err => {
                console.log(err);
                this.fetching = false;
            });
        });
    }
    onFoodSelected(food) {
        this.fetching = true;
        this.query = '';
        this.foundFoods = [];
        // Fetch food data
        this.foodService.fetchFoodData(food).subscribe((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const food = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_2__.Food();
            food.name = value.text;
            food.image = value.parsed[0].food.image;
            food.weight = 100;
            food.macros.protein = value.parsed[0].food.nutrients.PROCNT;
            food.macros.carbs = value.parsed[0].food.nutrients.CHOCDF;
            food.macros.fats = value.parsed[0].food.nutrients.FAT;
            food.calories = value.parsed[0].food.nutrients.ENERC_KCAL;
            this.openInputModal(food);
        }), err => {
            console.log(err);
        });
    }
    openInputModal(food) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.fetching = false;
            this.query = '';
            const modal = yield this.modalController.create({
                component: _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddFoodModalComponent,
                componentProps: { food }
            });
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                this.onAddFood(data);
            }
            else {
                this.predefinedFoodQuery = null;
            }
        });
    }
    onAddFood({ food, quantity }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!food.calories) {
                food.calories += food.macros.protein * 4;
                food.calories += food.macros.carbs * 4;
                food.calories += food.macros.fats * 9;
            }
            if (this.predefinedDate) {
                if (this.predefinedDate === new Date().toDateString()) {
                    yield this.trackingService.addFood(food, quantity);
                    yield this.trackingService.saveCurrentDayFoods();
                    yield this.router.navigate(['/meal_history'], {
                        queryParams: { day: this.predefinedDate }
                    });
                    return;
                }
                const mealHistory = yield this.trackingService.fetchMealHistory();
                let meals = mealHistory[this.predefinedDate];
                if (!meals) {
                    meals = [];
                }
                for (let i = 0; i < quantity; i++) {
                    meals.push(food);
                }
                mealHistory[this.predefinedDate] = meals;
                this.trackingService.saveMealHistory(JSON.stringify(mealHistory));
                yield this.router.navigate(['/meal_history'], {
                    queryParams: { day: this.predefinedDate }
                });
            }
            else {
                this.trackingService.addFood(food, quantity);
                yield this.router.navigate(['/home']);
            }
        });
    }
};
FoodSearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService },
    { type: _food_service__WEBPACK_IMPORTED_MODULE_4__.FoodService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
FoodSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-food-search',
        template: _food_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_food_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoodSearchComponent);



/***/ }),

/***/ 6727:
/*!*********************************************!*\
  !*** ./src/app/food-search/food.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodService": () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let FoodService = class FoodService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.autoCompleteAP = "https://api.edamam.com/auto-complete";
        this.foodDataAP = "https://api.edamam.com/api/food-database/v2/parser";
        this.fetchFoodLimit = 75;
    }
    fetchFoodAutocomplete(search) {
        return this.httpClient.get(this.autoCompleteAP, {
            params: {
                app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appId,
                app_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appKey,
                q: search,
                limit: this.fetchFoodLimit
            }
        });
    }
    fetchFoodData(food) {
        return this.httpClient.get(this.foodDataAP, {
            params: {
                app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appId,
                app_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appKey,
                ingr: food
            }
        });
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FoodService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FoodService);



/***/ }),

/***/ 2911:
/*!******************************************************************!*\
  !*** ./src/app/food-search/scan-food-barcode/barcode.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeService": () => (/* binding */ BarcodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let BarcodeService = class BarcodeService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https://world.openfoodfacts.org/api/v0/product/';
    }
    fetchProductData(productBarcodeId) {
        return this.httpService.get(this.apiUrl + productBarcodeId + '.json');
    }
};
BarcodeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
BarcodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], BarcodeService);



/***/ }),

/***/ 405:
/*!******************************************************************************!*\
  !*** ./src/app/food-search/scan-food-barcode/scan-food-barcode.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanFoodBarcodeComponent": () => (/* binding */ ScanFoodBarcodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scan_food_barcode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-food-barcode.component.html?ngResource */ 3785);
/* harmony import */ var _scan_food_barcode_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-food-barcode.component.scss?ngResource */ 8250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 2703);
/* harmony import */ var _barcode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barcode.service */ 2911);
/* harmony import */ var _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/tracker/food.model */ 2690);
/* harmony import */ var _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-food-modal/add-food-modal.component */ 2261);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home/tracker/tracking.service */ 2456);










let ScanFoodBarcodeComponent = class ScanFoodBarcodeComponent {
    constructor(barcodeScanner, barcodeService, modalController, trackingService, toastController) {
        this.barcodeScanner = barcodeScanner;
        this.barcodeService = barcodeService;
        this.modalController = modalController;
        this.trackingService = trackingService;
        this.toastController = toastController;
    }
    ngOnInit() { }
    scanBarcode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.barcodeScanner.scan().then(barcodeData => {
                this.barcodeService.fetchProductData(barcodeData.text).subscribe((productData) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (!productData.product) {
                        yield this.displayNotFound();
                        return;
                    }
                    yield this.addFood(productData);
                }));
            }).catch(err => {
                console.log('Error', err);
            });
        });
    }
    addFood(foodData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const food = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_4__.Food();
            food.name = foodData.product.product_name;
            food.image = foodData.product.image_front_url;
            food.weight = Number(foodData.product.product_quantity);
            food.macros.protein = foodData.product.nutriments.proteins_serving;
            food.macros.carbs = foodData.product.nutriments.carbohydrates_serving;
            food.macros.fats = foodData.product.nutriments.fat_serving;
            food.calories = foodData.product.nutriments['energy-kcal_serving'];
            const modal = yield this.modalController.create({
                component: _add_food_modal_add_food_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddFoodModalComponent,
                componentProps: { food }
            });
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                yield this.trackingService.addFood(data.food, data.quantity);
            }
        });
    }
    displayNotFound() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: 'bottom',
                duration: 3000,
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ],
                message: 'Продуктът не е намерен'
            });
            yield toast.present();
        });
    }
};
ScanFoodBarcodeComponent.ctorParameters = () => [
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _barcode_service__WEBPACK_IMPORTED_MODULE_3__.BarcodeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_6__.TrackingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ScanFoodBarcodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-scan-food-barcode',
        template: _scan_food_barcode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_food_barcode_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanFoodBarcodeComponent);



/***/ }),

/***/ 5565:
/*!**************************************************************!*\
  !*** ./src/app/headers/home-header/home-header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeHeaderComponent": () => (/* binding */ HomeHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-header.component.html?ngResource */ 9693);
/* harmony import */ var _home_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-header.component.scss?ngResource */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomeHeaderComponent = class HomeHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HomeHeaderComponent.ctorParameters = () => [];
HomeHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-header',
        template: _home_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeHeaderComponent);



/***/ }),

/***/ 5687:
/*!******************************************************************************!*\
  !*** ./src/app/headers/meal-history-header/meal-history-header.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealHistoryHeaderComponent": () => (/* binding */ MealHistoryHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _meal_history_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-history-header.component.html?ngResource */ 3990);
/* harmony import */ var _meal_history_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-history-header.component.scss?ngResource */ 6063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MealHistoryHeaderComponent = class MealHistoryHeaderComponent {
    constructor() {
        this.dayChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onSelectDay() {
        this.dayChanged.emit("select_day");
    }
    onDaySelected() {
        this.dayChanged.emit(this.day);
    }
    onPreviousClicked() {
        this.dayChanged.emit("previous");
    }
    onNextClicked() {
        this.dayChanged.emit("next");
    }
};
MealHistoryHeaderComponent.ctorParameters = () => [];
MealHistoryHeaderComponent.propDecorators = {
    day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dayChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
MealHistoryHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-meal-history-header',
        template: _meal_history_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_meal_history_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MealHistoryHeaderComponent);



/***/ }),

/***/ 5174:
/*!**********************************************************************!*\
  !*** ./src/app/history/favourites-card/favourites-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesCardComponent": () => (/* binding */ FavouritesCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favourites_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites-card.component.html?ngResource */ 4243);
/* harmony import */ var _favourites_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites-card.component.scss?ngResource */ 2359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_food_search_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/food-search/favourites/favourites.service */ 7652);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! translate */ 6486);
/* harmony import */ var translate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(translate__WEBPACK_IMPORTED_MODULE_3__);







let FavouritesCardComponent = class FavouritesCardComponent {
    constructor(router, favouritesService) {
        this.router = router;
        this.favouritesService = favouritesService;
        this.addFood = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.favourites = yield this.favouritesService.fetchFavourites();
            this.router.events.subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url.includes('meal_history')) {
                    this.favourites = yield this.favouritesService.fetchFavourites();
                }
            }));
        });
    }
    addFavouriteFood(food) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.addFood.emit(yield translate__WEBPACK_IMPORTED_MODULE_3___default()(food, { from: 'bg', to: 'en' }));
        });
    }
};
FavouritesCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_food_search_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__.FavouritesService }
];
FavouritesCardComponent.propDecorators = {
    addFood: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
FavouritesCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-favourites-card',
        template: _favourites_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favourites_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritesCardComponent);



/***/ }),

/***/ 9495:
/*!**************************************************************************!*\
  !*** ./src/app/history/history-food-list/history-food-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryFoodListComponent": () => (/* binding */ HistoryFoodListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _history_food_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-food-list.component.html?ngResource */ 1095);
/* harmony import */ var _history_food_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-food-list.component.scss?ngResource */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let HistoryFoodListComponent = class HistoryFoodListComponent {
    constructor() { }
    ngOnInit() { }
};
HistoryFoodListComponent.ctorParameters = () => [];
HistoryFoodListComponent.propDecorators = {
    meals: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HistoryFoodListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-history-food-list',
        template: _history_food_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_history_food_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryFoodListComponent);



/***/ }),

/***/ 3656:
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component.html?ngResource */ 4575);
/* harmony import */ var _history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.component.scss?ngResource */ 6777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/tracker/tracking.service */ 2456);
/* harmony import */ var _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/tracker/food.model */ 2690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let HistoryComponent = class HistoryComponent {
    constructor(router, route, trackingService) {
        this.router = router;
        this.route = route;
        this.trackingService = trackingService;
        this.date = new Date();
        this.macrosOverview = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__.Macros();
        this.fetching = false;
        this.totalCalories = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.day = new Date().toDateString();
            yield this.fetchMeals();
            this.router.events.forEach((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url.includes('meal_history')) {
                    this.date = new Date();
                    this.day = new Date().toDateString();
                    yield this.fetchMeals();
                }
            }));
            this.route.queryParams.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (params.day) {
                    this.date = new Date(params.day);
                    this.day = this.date.toDateString();
                }
                else {
                    this.date = new Date();
                    this.day = new Date().toDateString();
                }
                yield this.fetchMeals();
            }));
        });
    }
    addFood(food) {
        this.router.navigate(['/food'], {
            queryParams: { day: this.day, food }
        });
    }
    onDateSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const date = event.detail.value;
            this.day = new Date(date).toDateString();
            this.selectingDay = false;
            yield this.fetchMeals();
        });
    }
    onDateChanged(changeString) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            switch (changeString) {
                case 'select_day':
                    this.selectingDay = true;
                    break;
                case 'previous':
                    const yesterday = this.date.getDate() - 1;
                    this.date = new Date(this.date.setDate(yesterday));
                    this.day = this.date.toDateString();
                    yield this.fetchMeals();
                    break;
                case 'next':
                    const tomorrow = this.date.getDate() + 1;
                    this.date = new Date(this.date.setDate(tomorrow));
                    this.day = this.date.toDateString();
                    yield this.fetchMeals();
                    break;
                default:
                    break;
            }
        });
    }
    fetchMeals() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.fetching = true;
            this.macrosOverview = new _home_tracker_food_model__WEBPACK_IMPORTED_MODULE_3__.Macros();
            const mealHistory = yield this.trackingService.fetchMealHistory();
            this.totalCalories = 0;
            this.meals = mealHistory[this.day];
            if (!this.meals) {
                this.meals = [];
            }
            for (let i = 0; i < this.meals.length; i++) {
                const meal = this.meals[i];
                this.macrosOverview.protein += meal.macros.protein;
                this.macrosOverview.carbs += meal.macros.carbs;
                this.macrosOverview.fats += meal.macros.fats;
                this.totalCalories += meal.calories;
            }
            this.fetching = false;
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__.TrackingService }
];
HistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-history',
        template: _history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryComponent);



/***/ }),

/***/ 5635:
/*!*************************************************************!*\
  !*** ./src/app/home/day-selector/day-selector.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaySelectorComponent": () => (/* binding */ DaySelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _day_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-selector.component.html?ngResource */ 9494);
/* harmony import */ var _day_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-selector.component.scss?ngResource */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tracker/tracking.service */ 2456);





let DaySelectorComponent = class DaySelectorComponent {
    constructor(trackingService) {
        this.trackingService = trackingService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.daySelected = (new Date(yield this.trackingService.fetchCurrentDay()).getDay() - 1).toString();
        });
    }
    onDaySelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const mondayDate = this.trackingService.getMondayOfWeek();
            mondayDate.setDate(mondayDate.getDate() + Number(this.daySelected));
            this.trackingService.setDay(mondayDate);
        });
    }
};
DaySelectorComponent.ctorParameters = () => [
    { type: _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__.TrackingService }
];
DaySelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-day-selector',
        template: _day_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_day_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DaySelectorComponent);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker/tracking.service */ 2456);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup/user.service */ 9003);






let HomePage = class HomePage {
    constructor(trackingService, userService) {
        this.trackingService = trackingService;
        this.userService = userService;
        this.slideOpts = {
            scrollbar: true,
            slidesPerView: 1.2
        };
        this.trackingService.getMacrosAsObservable().subscribe((value) => {
            this.macros = value;
        });
        this.userService.fetchUser().then(value => {
            this.username = value.name;
        });
    }
    ngOnInit() {
        this.macros = this.trackingService.getMacros();
    }
};
HomePage.ctorParameters = () => [
    { type: _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__.TrackingService },
    { type: _setup_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6892:
/*!*************************************************************!*\
  !*** ./src/app/home/meal-history/meal-history.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealHistoryComponent": () => (/* binding */ MealHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _meal_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-history.component.html?ngResource */ 4297);
/* harmony import */ var _meal_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-history.component.scss?ngResource */ 4930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tracker/tracking.service */ 2456);






let MealHistoryComponent = class MealHistoryComponent {
    constructor(trackingService) {
        this.trackingService = trackingService;
        this.daysInAWeek = 7;
        this.trackingService.getMacrosAsObservable().subscribe(this.updateGraph.bind(this));
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let calories = yield this.calculateCaloriesForDay();
            this.graph = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.graphRef.nativeElement, {
                type: 'bar',
                data: {
                    labels: ['ПОН', 'ВТО', 'СРЯ', 'ЧЕТ', 'ПЕТ', 'СЪБ', 'НЕД'],
                    datasets: [{
                            label: 'KCAL',
                            data: calories,
                            backgroundColor: [
                                '#ffffff'
                            ]
                        }]
                },
                options: {
                    scales: {
                        x: {
                            ticks: {
                                color: "#ffffff",
                                font: {
                                    family: "OpenSans"
                                }
                            },
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            ticks: {
                                color: "#ffffff",
                                font: {
                                    family: "OpenSans"
                                }
                            },
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
            this.graph.config.options.color = "#ffffff";
        });
    }
    calculateCaloriesForDay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const mealHistory = yield this.trackingService.fetchMealHistory();
            const current = new Date();
            const calories = [];
            var week = [];
            // Starting Monday not Sunday
            current.setDate((current.getDate() - current.getDay() + 1));
            for (var i = 0; i < 7; i++) {
                week.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
            for (let i = 0; i < this.daysInAWeek; i++) {
                const dateString = week[i].toDateString();
                if (mealHistory[dateString]) {
                    let caloriesForDay = 0;
                    for (let j = 0; j < mealHistory[dateString].length; j++) {
                        caloriesForDay += mealHistory[dateString][j].calories;
                    }
                    calories.push(Math.round(caloriesForDay));
                }
                else {
                    calories.push(0);
                }
            }
            return calories;
        });
    }
    updateGraph() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let calories = yield this.calculateCaloriesForDay();
            this.graph.data.datasets[0].data = null;
            this.graph.data.datasets[0].data = calories;
            this.graph.update();
        });
    }
};
MealHistoryComponent.ctorParameters = () => [
    { type: _tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService }
];
MealHistoryComponent.propDecorators = {
    graphRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['graph',] }]
};
MealHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-meal-history',
        template: _meal_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_meal_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MealHistoryComponent);



/***/ }),

/***/ 2690:
/*!********************************************!*\
  !*** ./src/app/home/tracker/food.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Food": () => (/* binding */ Food),
/* harmony export */   "Macros": () => (/* binding */ Macros)
/* harmony export */ });
class Macros {
    constructor() {
        this.protein = 0;
        this.carbs = 0;
        this.fats = 0;
    }
}
class Food {
    constructor() {
        this.name = '';
        this.calories = 0;
        this.macros = new Macros();
    }
}


/***/ }),

/***/ 6841:
/*!*****************************************************************************!*\
  !*** ./src/app/home/tracker/tracker-nutrient/tracker-nutrient.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackerNutrientComponent": () => (/* binding */ TrackerNutrientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tracker_nutrient_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker-nutrient.component.html?ngResource */ 1188);
/* harmony import */ var _tracker_nutrient_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker-nutrient.component.scss?ngResource */ 9042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TrackerNutrientComponent = class TrackerNutrientComponent {
    constructor() { }
    ngOnInit() {
        switch (this.key) {
            case 'protein':
                this.goal = this.macroGoal.protein;
                break;
            case 'carbs':
                this.goal = this.macroGoal.carbs;
                break;
            case 'fat':
                this.goal = this.macroGoal.fats;
                break;
        }
    }
};
TrackerNutrientComponent.ctorParameters = () => [];
TrackerNutrientComponent.propDecorators = {
    macroGoal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TrackerNutrientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tracker-nutrient',
        template: _tracker_nutrient_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tracker_nutrient_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrackerNutrientComponent);



/***/ }),

/***/ 9606:
/*!***************************************************!*\
  !*** ./src/app/home/tracker/tracker.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackerComponent": () => (/* binding */ TrackerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tracker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker.component.html?ngResource */ 8261);
/* harmony import */ var _tracker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker.component.scss?ngResource */ 4271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var _tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracking.service */ 2456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.defaults.color = '#000';
let TrackerComponent = class TrackerComponent {
    constructor(trackingService, route) {
        this.trackingService = trackingService;
        this.route = route;
        this.caloriesLeft = 0;
        this.trackingService.getMacrosAsObservable().subscribe(this.updateChart.bind(this));
        this.trackingService.getCaloriesLeft().then((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.caloriesLeft = value;
            this.macroGoal = yield this.trackingService.fetchMacroGoal();
        }));
        this.route.params.subscribe(() => {
            this.trackingService.getMacrosAsObservable().subscribe(this.updateChart.bind(this));
            this.trackingService.getCaloriesLeft().then(value => {
                this.caloriesLeft = value;
            });
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.caloriesLeft = yield this.trackingService.getCaloriesLeft();
            this.graph = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.graphRef.nativeElement, {
                type: 'doughnut',
                options: {
                    animation: {
                        animateScale: false
                    }
                },
                data: {
                    labels: ['Консумирани', 'Остават'],
                    datasets: [{
                            label: 'Calories',
                            data: [Math.round(this.trackingService.calories), Math.round(this.caloriesLeft)],
                            backgroundColor: [
                                '#802E11',
                                '#E76B3F'
                            ],
                        }]
                }
            });
        });
    }
    updateChart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.caloriesLeft = yield this.trackingService.getCaloriesLeft();
            this.graph.data.datasets[0].data.pop();
            this.graph.data.datasets[0].data.pop();
            this.graph.data.datasets[0].data.push(this.trackingService.calories);
            this.graph.data.datasets[0].data.push(this.caloriesLeft);
            this.graph.update();
        });
    }
};
TrackerComponent.ctorParameters = () => [
    { type: _tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
TrackerComponent.propDecorators = {
    macros: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    graphRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['graph',] }]
};
TrackerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tracker',
        template: _tracker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tracker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrackerComponent);



/***/ }),

/***/ 2456:
/*!**************************************************!*\
  !*** ./src/app/home/tracker/tracking.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingService": () => (/* binding */ TrackingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.model */ 2690);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 5191);





let TrackingService = class TrackingService {
    constructor() {
        this.foods = [];
        this.calories = 0;
        this.macrosListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.calorieGoalKey = 'CALORIE_GOAL';
        this.consumedCaloriesKey = 'CONSUMED_CALORIES';
        this.mealHistoryKey = 'MEAL_HISTORY';
        this.currentDayKey = 'CURRENT_DAY';
        this.currentDayFoodsKey = 'CURRENT_DAY_FOODS';
        this.macroGoalKey = 'MACRO_GOAL';
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.currentDay = new Date().toDateString();
            yield this.fetchCalorieGoal();
            yield this.fetchMacroGoal();
            yield this.fetchConsumedCalories();
            if (this.currentDay !== (yield this.fetchCurrentDay())) {
                yield this.addCurrentDayToMealHistory().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.reset();
                    yield this.saveCurrentDayFoods(true);
                    this.setCurrentDay().then(() => {
                        this.macrosListener.next(this.getMacros());
                    });
                    yield this.setDay(new Date());
                }));
            }
            else {
                yield this.setDay(new Date());
            }
        });
    }
    setDay(day) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.addCurrentDayToMealHistory();
            this.reset();
            this.currentDay = day.toDateString();
            yield this.setCurrentDay(this.currentDay);
            yield this.saveConsumedCalories(0);
            const meals = yield this.fetchMealHistory();
            let foodForTheDay = [];
            if (meals[this.currentDay]) {
                foodForTheDay = meals[this.currentDay];
                for (let i = 0; i < foodForTheDay.length; i++) {
                    this.calories += this.calculateCalories(foodForTheDay[i].macros);
                }
            }
            this.foods = foodForTheDay;
            yield this.saveCurrentDayFoods();
            this.macrosListener.next(this.getMacros());
        });
    }
    calculateCalories(macros) {
        let calories = 0;
        calories += macros.protein * 4;
        calories += macros.carbs * 4;
        calories += macros.fats * 9;
        return calories;
    }
    getMondayOfWeek() {
        const date = new Date();
        const day = date.getDay() || 7;
        if (day !== 1) {
            date.setHours(-24 * (day - 1));
        }
        return date;
    }
    calculateCalorieGoal(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let bmr;
            let amr;
            if (user.gender === 'male') {
                bmr = 66.47 + (13.75 * user.weight) + (5.003 * user.height) - (6.755 * user.age);
            }
            else {
                bmr = 655.1 + (9.563 * user.weight) + (1.850 * user.height) - (4.676 * user.age);
            }
            switch (user.activity) {
                case 'sedentary':
                    amr = bmr * 1.2;
                    break;
                case 'lightly_active':
                    amr = bmr * 1.375;
                    break;
                case 'moderately_active':
                    amr = bmr * 1.55;
                    break;
                case 'very_active':
                    amr = bmr * 1.9;
                    break;
            }
            if (user.goal === 'loose_weight') {
                amr -= 400;
            }
            else if (user.goal === 'gain_weight') {
                amr += 400;
            }
            this.calorieGoal = Math.round(amr);
            this.macrosGoal = {
                protein: Math.round((this.calorieGoal * 0.3) / 4),
                carbs: Math.round((this.calorieGoal * 0.4) / 4),
                fats: Math.round((this.calorieGoal * 0.3) / 9)
            };
            if (user.goal === 'loose_weight') {
                this.macrosGoal = {
                    protein: Math.round((this.calories * 0.4) / 4),
                    carbs: Math.round((this.calories * 0.4) / 4),
                    fats: Math.round((this.calories * 0.2) / 9)
                };
            }
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.calorieGoalKey, value: this.calorieGoal.toString() });
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.macroGoalKey, value: JSON.stringify(this.macrosGoal) });
        });
    }
    addFood(food, quantity = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.foods.length === 0) {
                this.foods = [];
            }
            for (let i = 0; i < quantity; i++) {
                this.foods.push(food);
                this.calories += food.calories;
            }
            yield this.saveCurrentDayFoods();
            yield this.saveConsumedCalories();
            yield this.addCurrentDayToMealHistory();
            this.macrosListener.next(this.getMacros());
        });
    }
    removeFood(food) {
        const mealIndex = this.foods.findIndex(meal => meal.name === food.name);
        if (mealIndex > -1) {
            this.foods.slice(mealIndex, 1);
        }
    }
    getMacros() {
        const macros = new _food_model__WEBPACK_IMPORTED_MODULE_0__.Macros();
        this.fetchCurrentDayFoods().then(value => {
            this.foods = value;
            for (let i = 0; i < this.foods.length; i++) {
                const element = this.foods[i];
                macros.protein += Math.round(Number(element.macros.protein));
                macros.carbs += Math.round(Number(element.macros.carbs));
                macros.fats += Math.round(Number(element.macros.fats));
            }
        });
        return macros;
    }
    getMacrosAsObservable() {
        return this.macrosListener.asObservable();
    }
    getCaloriesLeft() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return this.calorieGoal - (this.calories);
        });
    }
    fetchCurrentDay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.currentDayKey });
            return value;
        });
    }
    fetchMealHistory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.mealHistoryKey });
            let parsedValue;
            if (value === undefined || !value) {
                parsedValue = {};
            }
            else {
                parsedValue = JSON.parse(value);
            }
            return parsedValue;
        });
    }
    saveMealHistory(mealHistory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.mealHistoryKey, value: mealHistory });
        });
    }
    reset() {
        this.foods = [];
        this.calories = 0;
    }
    fetchMacroGoal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.macroGoalKey });
            this.macrosGoal = JSON.parse(value);
            return this.macrosGoal;
        });
    }
    fetchCalorieGoal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.calorieGoalKey });
            this.calorieGoal = Number(value);
            return this.calorieGoal;
        });
    }
    saveCurrentDayFoods(empty = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.currentDayFoodsKey, value: empty ? '[]' : JSON.stringify(this.foods) });
        });
    }
    saveConsumedCalories(calories) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.consumedCaloriesKey, value: calories ? calories.toString() : this.calories.toString() });
        });
    }
    fetchConsumedCalories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const currentlySavedDay = yield this.fetchCurrentDay();
            if (currentlySavedDay !== this.currentDay) {
                yield this.addCurrentDayToMealHistory();
                yield this.saveCurrentDayFoods();
                yield this.saveConsumedCalories();
            }
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.consumedCaloriesKey });
            this.calories = Number(value);
        });
    }
    addCurrentDayToMealHistory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const mealHistory = yield this.fetchMealHistory();
            const dayId = yield this.fetchCurrentDay();
            mealHistory[dayId] = yield this.fetchCurrentDayFoods();
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.mealHistoryKey, value: JSON.stringify(mealHistory) });
        });
    }
    setCurrentDay(date) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: this.currentDayKey, value: date ? date : new Date().toDateString() });
        });
    }
    fetchCurrentDayFoods() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: this.currentDayFoodsKey });
            return JSON.parse(value);
        });
    }
};
TrackingService.ctorParameters = () => [];
TrackingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TrackingService);



/***/ }),

/***/ 9236:
/*!**************************************************************************************************!*\
  !*** ./src/app/home/weight-tracker/add-weight-record-modal/add-weight-record-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWeightRecordModalComponent": () => (/* binding */ AddWeightRecordModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_weight_record_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-weight-record-modal.component.html?ngResource */ 5006);
/* harmony import */ var _add_weight_record_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-weight-record-modal.component.scss?ngResource */ 5890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _weight_record_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weight-record.model */ 1230);






let AddWeightRecordModalComponent = class AddWeightRecordModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.weightRecord = new _weight_record_model__WEBPACK_IMPORTED_MODULE_2__.WeightRecord(new Date(), 0);
    }
    setWeight(value) {
        this.weightRecord.weight = Number(value);
    }
    onDateSelected(event) {
        const date = event.detail.value;
        this.weightRecord.date = new Date(date);
    }
    onClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    onSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(this.weightRecord, 'confirm');
        });
    }
};
AddWeightRecordModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
AddWeightRecordModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-weight-record-modal',
        template: _add_weight_record_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_weight_record_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddWeightRecordModalComponent);



/***/ }),

/***/ 1230:
/*!************************************************************!*\
  !*** ./src/app/home/weight-tracker/weight-record.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightRecord": () => (/* binding */ WeightRecord)
/* harmony export */ });
class WeightRecord {
    constructor(date, weight) {
        this.date = date;
        this.weight = weight;
    }
}


/***/ }),

/***/ 3814:
/*!*****************************************************************!*\
  !*** ./src/app/home/weight-tracker/weight-tracker.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightTrackerComponent": () => (/* binding */ WeightTrackerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _weight_tracker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weight-tracker.component.html?ngResource */ 125);
/* harmony import */ var _weight_tracker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight-tracker.component.scss?ngResource */ 7631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3905);
/* harmony import */ var _weight_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weight-tracking.service */ 6925);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_weight_record_modal_add_weight_record_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-weight-record-modal/add-weight-record-modal.component */ 9236);








let WeightTrackerComponent = class WeightTrackerComponent {
    constructor(weightTrackingService, modalController) {
        this.weightTrackingService = weightTrackingService;
        this.modalController = modalController;
    }
    ngAfterViewInit() {
        this.weightTrackingService.getWeightRecords().then(data => {
            const weightData = data.map(record => record.weight);
            const weightDates = data.map(record => record.date);
            this.displayTracker(weightData, weightDates);
        });
    }
    onAddWeightRecord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_weight_record_modal_add_weight_record_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddWeightRecordModalComponent,
                componentProps: {}
            });
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role === 'confirm') {
                yield this.addWeightRecord(data.date, data.weight);
            }
        });
    }
    displayTracker(weights, dates) {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.graphRef.nativeElement, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                        label: 'Weight',
                        data: weights,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    }
                }
            }
        });
    }
    addWeightRecord(date, weight) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.weightTrackingService.addWeightRecord(weight, date);
            this.chart.data.labels.push(date);
            this.chart.data.datasets[0].data.push(weight);
            this.chart.data.labels.sort((a, b) => {
                const da = new Date(a.date);
                const db = new Date(b.date);
                if (da < db) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
            this.chart.update();
        });
    }
};
WeightTrackerComponent.ctorParameters = () => [
    { type: _weight_tracking_service__WEBPACK_IMPORTED_MODULE_3__.WeightTrackingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
WeightTrackerComponent.propDecorators = {
    graphRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['graph',] }]
};
WeightTrackerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-weight-tracker',
        template: _weight_tracker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_weight_tracker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WeightTrackerComponent);



/***/ }),

/***/ 6925:
/*!****************************************************************!*\
  !*** ./src/app/home/weight-tracker/weight-tracking.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightTrackingService": () => (/* binding */ WeightTrackingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);



let WeightTrackingService = class WeightTrackingService {
    addWeightRecord(weight, date) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const weightRecords = yield this.getWeightRecords();
            weightRecords.push({ weight, date });
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key: 'weightRecords', value: JSON.stringify(weightRecords) });
        });
    }
    getWeightRecords() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const weightRecords = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: 'weightRecords' });
            const parsedRecords = weightRecords.value ? JSON.parse(weightRecords.value) : [];
            parsedRecords.sort((a, b) => {
                const da = new Date(a.date);
                const db = new Date(b.date);
                if (da < db) {
                    return -1;
                }
                else {
                    return 1;
                }
                return 0;
            });
            parsedRecords.forEach(record => {
                const date = new Date(record.date).toISOString().split('T')[0];
                record.date = date;
            });
            return parsedRecords;
        });
    }
};
WeightTrackingService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], WeightTrackingService);



/***/ }),

/***/ 5578:
/*!********************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/appearance-setting-component/appearance-setting-component.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppearanceSettingComponentComponent": () => (/* binding */ AppearanceSettingComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _appearance_setting_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance-setting-component.component.html?ngResource */ 648);
/* harmony import */ var _appearance_setting_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance-setting-component.component.scss?ngResource */ 5703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/preferences */ 5191);





let AppearanceSettingComponentComponent = class AppearanceSettingComponentComponent {
    constructor() {
        this.appearanceKey = 'APPEARANCE';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.get({ key: this.appearanceKey });
            this.updateTheme(value);
            this.mode = value;
        });
    }
    changeAppearance(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const value = event.detail.value;
            this.mode = value;
            this.updateTheme(this.mode);
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.set({ key: this.appearanceKey, value });
        });
    }
    updateTheme(value) {
        switch (value) {
            case 'light_mode':
                document.body.setAttribute('color-theme', 'light');
                break;
            case 'dark_mode':
                document.body.setAttribute('color-theme', 'dark');
                break;
            default:
                value = 'light_mode';
                this.mode = 'light_mode';
                break;
        }
    }
};
AppearanceSettingComponentComponent.ctorParameters = () => [];
AppearanceSettingComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-appearance-setting-component',
        template: _appearance_setting_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appearance_setting_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppearanceSettingComponentComponent);



/***/ }),

/***/ 8074:
/*!*****************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/edit-setting-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSettingModalComponent": () => (/* binding */ EditSettingModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_setting_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-setting-modal.component.html?ngResource */ 967);
/* harmony import */ var _edit_setting_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-setting-modal.component.scss?ngResource */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let EditSettingModalComponent = class EditSettingModalComponent {
    constructor() {
        this.closeSettingModal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    closeModal() {
        this.closeSettingModal.emit();
    }
};
EditSettingModalComponent.ctorParameters = () => [];
EditSettingModalComponent.propDecorators = {
    modalOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    settingId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeSettingModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
EditSettingModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-edit-setting-modal',
        template: _edit_setting_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_setting_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditSettingModalComponent);



/***/ }),

/***/ 1403:
/*!**********************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/goals-setting-component/goals-setting-component.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalsSettingComponentComponent": () => (/* binding */ GoalsSettingComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _goals_setting_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goals-setting-component.component.html?ngResource */ 5680);
/* harmony import */ var _goals_setting_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goals-setting-component.component.scss?ngResource */ 9172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/tracker/tracking.service */ 2456);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setup/user.service */ 9003);







let GoalsSettingComponentComponent = class GoalsSettingComponentComponent {
    constructor(alertController, trackingService, userService) {
        this.alertController = alertController;
        this.trackingService = trackingService;
        this.userService = userService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.trackingService.fetchCalorieGoal();
            this.calorieGoal = this.trackingService.calorieGoal;
            this.user = yield this.fetchUser();
            this.generateTexts();
        });
    }
    calculateCalorieGoal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.trackingService.calculateCalorieGoal(this.user);
            this.calorieGoal = this.trackingService.calorieGoal;
        });
    }
    editValue(field, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const inputs = [];
            if (type === 'list') {
                if (field === 'activity') {
                    inputs.push({
                        label: 'Sedentary (little or no exercise)',
                        type: 'radio',
                        value: 'sedentary',
                    }, {
                        label: 'Lightly active (1–3 days/week)',
                        type: 'radio',
                        value: 'lightly_active',
                    }, {
                        label: 'Moderately active (3–5 days/week)',
                        type: 'radio',
                        value: 'moderately_active',
                    }, {
                        label: 'Very active (6–7 days/week)',
                        type: 'radio',
                        value: 'very_active',
                    });
                }
                else {
                    inputs.push({
                        label: 'Gain weight',
                        type: 'radio',
                        value: 'gain_weight',
                    }, {
                        label: 'Maintain weight',
                        type: 'radio',
                        value: 'maintain_weight',
                    }, {
                        label: 'Lose weight',
                        type: 'radio',
                        value: 'loose_weight',
                    });
                }
            }
            else {
                inputs.push({
                    name: field,
                    placeholder: 'Enter your ' + field,
                    value: this.user[field],
                    type: type ? type : 'text'
                });
            }
            const alert = yield this.alertController.create({
                header: 'Edit details',
                buttons: [{
                        text: 'Select',
                        handler: (alertData) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.userService.updateUser(field, typeof alertData === 'object' ? (type === 'number' ? Number(alertData[field]) : alertData[field]) : alertData);
                            this.user = yield this.fetchUser();
                            yield this.calculateCalorieGoal();
                            this.generateTexts();
                        })
                    }],
                inputs
            });
            yield alert.present();
        });
    }
    fetchUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userService.fetchUser();
        });
    }
    generateTexts() {
        switch (this.user.activity) {
            case 'sedentary':
                this.activityText = 'Sedentary';
                break;
            case 'lightly_active':
                this.activityText = 'Lightly active';
                break;
            case 'moderately_active':
                this.activityText = 'Moderately Active';
                break;
            case 'very_active':
                this.activityText = 'Very Active';
                break;
        }
        switch (this.user.goal) {
            case 'loose_weight':
                this.goalText = 'Lose weight';
                break;
            case 'maintain_weight':
                this.goalText = 'Maintain weight';
                break;
            case 'gain_weight':
                this.goalText = 'Gain weight';
                break;
        }
    }
};
GoalsSettingComponentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_2__.TrackingService },
    { type: _setup_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
GoalsSettingComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-goals-setting-component',
        template: _goals_setting_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_goals_setting_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoalsSettingComponentComponent);



/***/ }),

/***/ 3097:
/*!**********************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/profile-setting-content/profile-setting-content.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileSettingContentComponent": () => (/* binding */ ProfileSettingContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_setting_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-setting-content.component.html?ngResource */ 9719);
/* harmony import */ var _profile_setting_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-setting-content.component.scss?ngResource */ 4655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setup/user.service */ 9003);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/tracker/tracking.service */ 2456);







let ProfileSettingContentComponent = class ProfileSettingContentComponent {
    constructor(alertController, trackingService, userService) {
        this.alertController = alertController;
        this.trackingService = trackingService;
        this.userService = userService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.trackingService.fetchCalorieGoal();
            this.calorieGoal = this.trackingService.calorieGoal;
            this.user = yield this.fetchUser();
        });
    }
    calculateCalorieGoal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.trackingService.calculateCalorieGoal(this.user);
            this.calorieGoal = this.trackingService.calorieGoal;
        });
    }
    editValue(field, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Edit details',
                buttons: [{
                        text: 'Edit',
                        handler: (alertData) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.userService.updateUser(field, alertData[field]);
                            this.user = yield this.fetchUser();
                            yield this.calculateCalorieGoal();
                        })
                    }],
                inputs: [
                    {
                        name: field,
                        placeholder: 'Enter your ' + field,
                        value: this.user[field],
                        type: type ? type : 'text'
                    }
                ],
            });
            yield alert.present();
        });
    }
    fetchUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.userService.fetchUser();
        });
    }
};
ProfileSettingContentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _home_tracker_tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService },
    { type: _setup_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ProfileSettingContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-setting-content',
        template: _profile_setting_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_setting_content_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileSettingContentComponent);



/***/ }),

/***/ 1981:
/*!***********************************************************************!*\
  !*** ./src/app/settings/settings-button/settings-button.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsButtonComponent": () => (/* binding */ SettingsButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-button.component.html?ngResource */ 2374);
/* harmony import */ var _settings_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-button.component.scss?ngResource */ 5663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SettingsButtonComponent = class SettingsButtonComponent {
    constructor() {
        this.editSetting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    openEditSettingModal() {
        this.editSetting.emit(this.settingName);
    }
};
SettingsButtonComponent.ctorParameters = () => [];
SettingsButtonComponent.propDecorators = {
    settingName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    editSetting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SettingsButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-settings-button',
        template: _settings_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_button_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsButtonComponent);



/***/ }),

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 9885);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 5855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _setup_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup/user.service */ 9003);








let SettingsComponent = class SettingsComponent {
    constructor(alertController, userService, router) {
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.modalOpen = false;
        this.editSettingId = '';
    }
    ngOnInit() { }
    openEditSettingModal(settingId) {
        this.editSettingId = settingId;
        this.modalOpen = true;
    }
    closeSettingModal() {
        this.modalOpen = false;
        this.editSettingId = '';
    }
    resetUserSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Нулиране на приложението?',
                message: 'Това действие ще изтрие всички потребителски данни и ще нулира приложението',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.router.navigate(['/setup']).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.clear();
                                yield this.userService.resetUser();
                                this.userService.userLoggedStatus.next(false);
                                location.reload();
                            }));
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _setup_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsComponent);



/***/ }),

/***/ 9003:
/*!***************************************!*\
  !*** ./src/app/setup/user.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);





let UserService = class UserService {
    constructor(router) {
        this.router = router;
        this.userLoggedStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.USER_STORAGE_KEY = 'user';
        this.fetchUser().then(user => {
            this.user = user;
        });
    }
    createUser(userData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const user = JSON.stringify(userData);
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
                key: this.USER_STORAGE_KEY,
                value: user
            });
        });
    }
    fetchUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: this.USER_STORAGE_KEY });
            return JSON.parse(value);
        });
    }
    updateUser(field, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.fetchUser();
            this.user[field] = value;
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key: this.USER_STORAGE_KEY, value: JSON.stringify(this.user) });
        });
    }
    resetUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.user = null;
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.remove({ key: this.USER_STORAGE_KEY });
        });
    }
    // eslint-disable-next-line max-len
    canActivate(route, state) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            this.fetchUser().then((value) => {
                if (value) {
                    this.userLoggedStatus.next(true);
                    observer.next(true);
                }
                else {
                    this.router.navigate(['setup']);
                    observer.next(false);
                }
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 1987:
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.component.html?ngResource */ 1821);
/* harmony import */ var _toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.component.scss?ngResource */ 3091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/keyboard */ 523);







let ToolbarComponent = class ToolbarComponent {
    constructor(router, platform) {
        this.router = router;
        this.platform = platform;
        this.showAddButton = true;
    }
    ngOnInit() {
        if (this.platform.is('mobile')) {
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidShow', () => this.showAddButton = false);
            _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.addListener('keyboardDidHide', () => this.showAddButton = true);
        }
    }
    onAddFood() {
        this.router.navigate(['food']);
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
ToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-toolbar',
        template: _toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolbarComponent);



/***/ }),

/***/ 1182:
/*!*******************************************************************!*\
  !*** ./src/app/workouts/workout-group/workout-group.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutGroupComponent": () => (/* binding */ WorkoutGroupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _workout_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-group.component.html?ngResource */ 400);
/* harmony import */ var _workout_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-group.component.scss?ngResource */ 3306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let WorkoutGroupComponent = class WorkoutGroupComponent {
    constructor() {
        this.margin = true;
    }
    ngOnInit() { }
};
WorkoutGroupComponent.ctorParameters = () => [];
WorkoutGroupComponent.propDecorators = {
    groupName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    slideOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
WorkoutGroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-workout-group',
        template: _workout_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_workout_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkoutGroupComponent);



/***/ }),

/***/ 9311:
/*!************************************************!*\
  !*** ./src/app/workouts/workouts.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsComponent": () => (/* binding */ WorkoutsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _workouts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts.component.html?ngResource */ 9652);
/* harmony import */ var _workouts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workouts.component.scss?ngResource */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let WorkoutsComponent = class WorkoutsComponent {
    constructor() {
        this.slideOpts = {
            scrollbar: true,
            slidesPerView: 2
        };
    }
    ngOnInit() {
        if (window.screen.width < 768) {
            this.slideOpts.slidesPerView = 1.2;
        }
    }
};
WorkoutsComponent.ctorParameters = () => [];
WorkoutsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-workouts',
        template: _workouts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_workouts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkoutsComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appId: "a941b442",
    appKey: "262d7cf33f48cc825b01918902b14a9f"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9123:
/*!*************************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/add-food-modal.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".name_input {\n  margin-bottom: 20px;\n}\n\n.quantity_input {\n  margin-top: 20px;\n  max-width: 40%;\n  float: right;\n}\n\nimg {\n  display: block;\n  margin: 0 auto;\n  max-width: 256px;\n  border-radius: 16%;\n}\n\n.icon_container {\n  text-align: right;\n}\n\nion-icon {\n  font-size: 28px;\n}\n\n@media screen and (max-width: 992px) {\n  .quantity_input {\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mb29kLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYWRkLWZvb2QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZV9pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnF1YW50aXR5X2lucHV0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDI1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2JTtcclxufVxyXG5cclxuLmljb25fY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAucXVhbnRpdHlfaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5377:
/*!******************************************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/nutrient-button/nutrient-button.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-col:nth-child(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nutrient_container {\n  max-width: 312px;\n  display: block;\n  margin: auto;\n}\n\n.icon_container {\n  padding: 13px 15px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-radius: 50%;\n}\n\n.icon_container ion-icon {\n  font-size: 22px;\n}\n\n.stacked_label {\n  color: gray;\n  margin: 10px 0 3px;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.protein {\n  box-shadow: 0px 0px 10px 7px #D2ECFD;\n}\n\n.carbs {\n  box-shadow: 0px 0px 10px 7px #e7dcf2;\n}\n\n.fats {\n  box-shadow: 0px 0px 10px 7px #FDF2D4;\n}\n\n.weight {\n  box-shadow: 0px 0px 10px 7px #EAF2DE;\n}\n\n.calories {\n  box-shadow: 0px 0px 10px 7px #FFC7C7;\n}\n\n.picker_button {\n  background: #CFCFCF;\n  color: #000;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.calories_text {\n  text-align: left;\n}\n\n.weight_item {\n  --background: transparent;\n}\n\n@media only screen and (max-width: 576px) {\n  .nutrient_container {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51dHJpZW50LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFHRSxvQ0FBQTtBQUNGOztBQUVBO0VBR0Usb0NBQUE7QUFDRjs7QUFFQTtFQUdFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFHRSxvQ0FBQTtBQUNGOztBQUVBO0VBR0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGtCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJudXRyaWVudC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sOm50aC1jaGlsZCgxKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubnV0cmllbnRfY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDMxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmljb25fY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxM3B4IDE1cHg7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmljb25fY29udGFpbmVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5zdGFja2VkX2xhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW46IDEwcHggMCAzcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucHJvdGVpbiB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNEMkVDRkQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNEMkVDRkQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRDJFQ0ZEO1xyXG59XHJcblxyXG4uY2FyYnMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjZTdkY2YyO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjZTdkY2YyO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA3cHggI2U3ZGNmMjtcclxufVxyXG5cclxuLmZhdHMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRkRGMkQ0O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRkRGMkQ0O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA3cHggI0ZERjJENDtcclxufVxyXG5cclxuLndlaWdodCB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNFQUYyREU7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNFQUYyREU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRUFGMkRFO1xyXG59XHJcblxyXG4uY2Fsb3JpZXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRkZDN0M3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjRkZDN0M3O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA3cHggI0ZGQzdDNztcclxufVxyXG5cclxuLnBpY2tlcl9idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNDRkNGQ0Y7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2Fsb3JpZXNfdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ud2VpZ2h0X2l0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAubnV0cmllbnRfY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4782:
/*!*****************************************************************************!*\
  !*** ./src/app/food-search/favourites/favourites.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  cursor: pointer;\n}\n\nion-list .card_container {\n  display: block;\n  margin: 0 auto;\n  max-width: 512px;\n}\n\nion-card {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n  max-width: 512px;\n  display: block;\n  margin: 15px auto;\n  cursor: pointer;\n}\n\nh4 {\n  font-size: 24px;\n  text-align: left;\n  margin-top: 4px;\n  font-family: \"Candara\";\n}\n\n.name_container {\n  display: flex;\n  align-items: center;\n}\n\n.icon_container {\n  text-align: right;\n}\n\n.icon_container ion-icon {\n  font-size: 36px;\n  margin-top: 4px;\n}\n\n.fs {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFHRSwrQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24tbGlzdCAuY2FyZF9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNTEycHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYigwIDAgMCAvIDUwJSk7XHJcbiAgbWF4LXdpZHRoOiA1MTJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdDYW5kYXJhJztcclxufVxyXG5cclxuLm5hbWVfY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uX2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pY29uX2NvbnRhaW5lciBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4uZnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6705:
/*!*******************************************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-graph-preview/food-graph-preview.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLWdyYXBoLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5675:
/*!***************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-list.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item {\n  cursor: pointer;\n}\n\nion-list .card_container {\n  display: block;\n  margin: 0 auto;\n  max-width: 512px;\n}\n\nion-card {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n  max-width: 512px;\n  display: block;\n  margin: 15px;\n  cursor: pointer;\n}\n\nh4 {\n  font-size: 24px;\n  text-align: left;\n  margin-top: 4px;\n  font-family: \"Candara\";\n}\n\n.name_container {\n  display: flex;\n  align-items: center;\n}\n\n.icon_container {\n  text-align: right;\n}\n\n.icon_container ion-icon {\n  font-size: 36px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUdJLCtDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQU9KIiwiZmlsZSI6ImZvb2QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pb24tbGlzdCAuY2FyZF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogNTEycHg7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2IoMCAwIDAgLyA1MCUpO1xyXG4gICAgbWF4LXdpZHRoOiA1MTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NhbmRhcmEnO1xyXG59XHJcbi5uYW1lX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaWNvbl9jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmljb25fY29udGFpbmVyIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 1021:
/*!*******************************************************************!*\
  !*** ./src/app/food-search/food-search.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div {\n  text-align: center;\n  font-family: \"Candara\";\n}\n\n::placeholder {\n  font-family: \"Candara\";\n}\n\nion-spinner {\n  margin: 10px 0;\n}\n\nion-searchbar {\n  padding: 9px 0 0 5px;\n}\n\n.favourites_button {\n  height: 42px;\n  width: 100%;\n  max-width: 78px;\n  margin-top: 9px;\n  font-size: 22px;\n  --background: #E76B3F;\n}\n\n@media only screen and (min-width: 576px) {\n  .favourites_button {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBRkE7RUFDSTtJQUNJLGVBQUE7RUFLTjtBQUNGIiwiZmlsZSI6ImZvb2Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FuZGFyYSc7XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhbmRhcmEnO1xyXG59XHJcbmlvbi1zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgcGFkZGluZzogOXB4IDAgMCA1cHg7XHJcbn1cclxuLmZhdm91cml0ZXNfYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTc2QjNGO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuZmF2b3VyaXRlc19idXR0b24ge1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 8250:
/*!*******************************************************************************************!*\
  !*** ./src/app/food-search/scan-food-barcode/scan-food-barcode.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-fab {\n  --background: #E76B3F!important;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tZm9vZC1iYXJjb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNjYW4tZm9vZC1iYXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRTc2QjNGIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7802:
/*!***************************************************************************!*\
  !*** ./src/app/headers/home-header/home-header.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "img {\n  max-height: 64px;\n  padding: 5px;\n}\n\nion-title {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKIiwiZmlsZSI6ImhvbWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 6063:
/*!*******************************************************************************************!*\
  !*** ./src/app/headers/meal-history-header/meal-history-header.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "h4 {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtaGlzdG9yeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6Im1lYWwtaGlzdG9yeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */";

/***/ }),

/***/ 2359:
/*!***********************************************************************************!*\
  !*** ./src/app/history/favourites-card/favourites-card.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  border-radius: 16px;\n  max-width: 512px;\n  display: block;\n  margin: 20px auto 0;\n}\n\nion-card-content ion-card {\n  margin: 0 auto 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6ImZhdm91cml0ZXMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUxMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 9269:
/*!***************************************************************************************!*\
  !*** ./src/app/history/history-food-list/history-food-list.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-list {\n  background: transparent;\n}\n\nion-list ion-item {\n  --background: transparent;\n  color: var(--ion-text-color);\n  margin: 10px 0;\n}\n\nion-list ion-item img {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktZm9vZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKIiwiZmlsZSI6Imhpc3RvcnktZm9vZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5pb24tbGlzdCBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmlvbi1saXN0IGlvbi1pdGVtIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6777:
/*!***********************************************************!*\
  !*** ./src/app/history/history.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-datetime {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n}\n\n.fs {\n  width: 100%;\n  height: 100%;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 28px;\n}\n\n.flex_vertical {\n  display: flex;\n  justify-content: center;\n}\n\n.overview_card {\n  background: rgb(68, 95, 130);\n  background: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  color: #ffffff;\n  border-radius: 16px;\n  max-width: 512px;\n  display: block;\n  margin: auto;\n}\n\n.overview_card .data_overview p {\n  color: #fff;\n  font-size: 16px;\n  margin: 10px auto 0;\n  padding: 0;\n  text-align: center;\n}\n\nion-card-title,\nion-card-subtitle {\n  color: #ffffff;\n}\n\nion-item ion-label {\n  color: #fff;\n}\n\ndiv[slot=content] {\n  background: rgb(68, 95, 130);\n  background: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  color: #ffffff;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  max-width: 512px;\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n}\n\nion-item[slot=header] {\n  background: rgb(68, 95, 130);\n  background: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n}\n\n.ion-color-blue_gradient {\n  --ion-color-base: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  --ion-color-base-rgb: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  --ion-color-contrast: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  --ion-color-contrast-rgb: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  --ion-color-shade: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n  --ion-color-tint: linear-gradient(70deg, rgb(60, 109, 174) 10%, rgb(81, 133, 201) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBRkE7RUFDRSw0QkFBQTtFQUNBLGlGQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBOztFQUVFLGNBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7QUFRRjs7QUFOQTtFQUNFLDRCQUFBO0VBQ0EsaUZBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBU0Y7O0FBUEE7RUFDRSw0QkFBQTtFQUNBLGlGQUFBO0FBVUY7O0FBUkE7RUFDRSx1RkFBQTtFQUNBLDJGQUFBO0VBQ0EsMkZBQUE7RUFDQSwrRkFBQTtFQUNBLHdGQUFBO0VBQ0EsdUZBQUE7QUFXRiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWRhdGV0aW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG59XHJcbi5mcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuLmZsZXhfdmVydGljYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm92ZXJ2aWV3X2NhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYig2OCw5NSwxMzApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiKDYwIDEwOSAxNzQpIDEwJSwgcmdiKDgxLCAxMzMsIDIwMSkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtYXgtd2lkdGg6IDUxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ub3ZlcnZpZXdfY2FyZCAuZGF0YV9vdmVydmlldyBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZC10aXRsZSxcclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuZGl2W3Nsb3Q9XCJjb250ZW50XCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNjgsIDk1LCAxMzApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiKDYwLCAxMDksIDE3NCkgMTAlLCByZ2IoODEsIDEzMywgMjAxKSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xyXG4gIG1heC13aWR0aDogNTEycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5pb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNjgsIDk1LCAxMzApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiKDYwLCAxMDksIDE3NCkgMTAlLCByZ2IoODEsIDEzMywgMjAxKSAxMDAlKTtcclxufVxyXG4uaW9uLWNvbG9yLWJsdWVfZ3JhZGllbnQge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiKDYwLCAxMDksIDE3NCkgMTAlLCByZ2IoODEsIDEzMywgMjAxKSAxMDAlKTtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogbGluZWFyLWdyYWRpZW50KDcwZGVnLCByZ2IoNjAsIDEwOSwgMTc0KSAxMCUsIHJnYig4MSwgMTMzLCAyMDEpIDEwMCUpO1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHJnYig2MCwgMTA5LCAxNzQpIDEwJSwgcmdiKDgxLCAxMzMsIDIwMSkgMTAwJSk7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHJnYig2MCwgMTA5LCAxNzQpIDEwJSwgcmdiKDgxLCAxMzMsIDIwMSkgMTAwJSk7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgcmdiKDYwLCAxMDksIDE3NCkgMTAlLCByZ2IoODEsIDEzMywgMjAxKSAxMDAlKTtcclxuICAtLWlvbi1jb2xvci10aW50OiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHJnYig2MCwgMTA5LCAxNzQpIDEwJSwgcmdiKDgxLCAxMzMsIDIwMSkgMTAwJSk7XHJcbn0iXX0= */";

/***/ }),

/***/ 1959:
/*!**************************************************************************!*\
  !*** ./src/app/home/day-selector/day-selector.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-segment {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  margin: 25px 0 0;\n  border-radius: 16px;\n}\n\nion-segment ion-segment-button {\n  padding: 10px 0;\n  margin: 10px auto;\n  max-width: 92px;\n}\n\nion-segment ion-segment-button ion-label {\n  padding: 10px;\n}\n\nion-segment-button::part(indicator-background) {\n  background: #E76B3F;\n  border-radius: 16px;\n}\n\n/* Material Design styles */\n\nion-segment-button.md::part(native) {\n  color: var(--ion-text);\n}\n\n.segment-button-checked.md::part(native) {\n  color: #fff;\n  background: #E76B3F;\n  border-radius: 8px;\n}\n\nion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\n\n/* iOS styles */\n\nion-segment-button.ios::part(native) {\n  color: #E76B3F;\n}\n\n.segment-button-checked.ios::part(native) {\n  color: #fff;\n}\n\nion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBLDJCQUFBOztBQUNBO0VBQ0ksc0JBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBREEsZUFBQTs7QUFDQTtFQUNJLGNBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUoiLCJmaWxlIjoiZGF5LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIG1hcmdpbjogMjVweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbmlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogOTJweDtcclxufVxyXG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc2QjNGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLyogTWF0ZXJpYWwgRGVzaWduIHN0eWxlcyAqL1xyXG5pb24tc2VnbWVudC1idXR0b24ubWQ6OnBhcnQobmF0aXZlKSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQpO1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZC5tZDo6cGFydChuYXRpdmUpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI0U3NkIzRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uLm1kOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxufVxyXG5cclxuLyogaU9TIHN0eWxlcyAqL1xyXG5pb24tc2VnbWVudC1idXR0b24uaW9zOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgY29sb3I6ICNFNzZCM0Y7XHJcbn1cclxuXHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLmlvczo6cGFydChuYXRpdmUpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24uaW9zOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.fullheight {\n  height: 100%;\n}\n\nion-grid, ion-row {\n  height: 100%;\n  text-align: center;\n}\n\nion-card {\n  width: 100%;\n  min-height: 70%;\n}\n\n.content_container {\n  width: 100%;\n}\n\nion-card-content {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.greeting {\n  margin: 20px 0;\n  font-family: \"Candara\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mdWxsaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1ncmlkLCBpb24tcm93IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbi5jb250ZW50X2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmVldGluZyB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdDYW5kYXJhJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4930:
/*!**************************************************************************!*\
  !*** ./src/app/home/meal-history/meal-history.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".graph_container {\n  background: rgb(74, 95, 41);\n  background: linear-gradient(90deg, rgb(74, 95, 41) 10%, rgb(158, 203, 88) 100%);\n  border-radius: 16px;\n  margin: 0 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsK0VBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibWVhbC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzQsOTUsNDEpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDc0LDk1LDQxLDEpIDEwJSwgcmdiYSgxNTgsMjAzLDg4LDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbjogMCAwIDUwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 9042:
/*!******************************************************************************************!*\
  !*** ./src/app/home/tracker/tracker-nutrient/tracker-nutrient.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-col:nth-child(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon_container {\n  padding: 13px 15px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-radius: 50%;\n  background: var(--ion-text-reverse);\n}\n\n.icon_container ion-icon {\n  font-size: 22px;\n  color: var(--ion-text);\n}\n\n.stacked_label {\n  color: gray;\n  margin: 10px 0 3px;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.protein {\n  box-shadow: 0px 0px 10px 7px rgba(159, 204, 88, 0.4);\n}\n\n.carbs {\n  box-shadow: 0px 0px 10px 7px #e7dcf2;\n}\n\n.fat {\n  box-shadow: 0px 0px 10px 7px #cfebfd;\n}\n\n@media only screen and (max-width: 576px) {\n  .nutrient_container {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXItbnV0cmllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFJSjs7QUFGQTtFQUdJLG9EQUFBO0FBS0o7O0FBSEE7RUFHSSxvQ0FBQTtBQU1KOztBQUpBO0VBR0ksb0NBQUE7QUFPSjs7QUFKQTtFQUNJO0lBQ0ksa0JBQUE7RUFPTjtBQUNGIiwiZmlsZSI6InRyYWNrZXItbnV0cmllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sOm50aC1jaGlsZCgxKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbl9jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTNweCAxNXB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLXRleHQtcmV2ZXJzZSk7XHJcbn1cclxuLmljb25fY29udGFpbmVyIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dCk7XHJcbn1cclxuLnN0YWNrZWRfbGFiZWwge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW46IDEwcHggMCAzcHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5wcm90ZWluIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjOWZjYzU4NjY7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCA3cHggIzlmY2M1ODY2O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjOWZjYzU4NjY7XHJcbn1cclxuLmNhcmJzIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjZTdkY2YyO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNlN2RjZjI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggN3B4ICNlN2RjZjI7XHJcbn1cclxuLmZhdCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCA3cHggI2NmZWJmZDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjY2ZlYmZkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDdweCAjY2ZlYmZkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubnV0cmllbnRfY29udGFpbmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4271:
/*!****************************************************************!*\
  !*** ./src/app/home/tracker/tracker.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".graph_container {\n  max-width: 312px;\n  display: block;\n  margin: 15px auto 20px;\n}\n\n.label_container.calories_left {\n  border-left: 4px solid #802E11 !important;\n}\n\n.label_container h4 {\n  margin: 0;\n  font-size: 32px;\n}\n\n.label_container h6 {\n  margin-top: 0;\n  color: #9d9d9d;\n  min-height: 38px;\n}\n\n.second_row .label_container {\n  border-left: 4px solid #e76b3f;\n  padding-left: 10px;\n}\n\n.text_center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0kseUNBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KIiwiZmlsZSI6InRyYWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGhfY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMzEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDIwcHg7XHJcbn1cclxuLmxhYmVsX2NvbnRhaW5lci5jYWxvcmllc19sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzgwMkUxMSFpbXBvcnRhbnQ7XHJcbn1cclxuLmxhYmVsX2NvbnRhaW5lciBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuLmxhYmVsX2NvbnRhaW5lciBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG59XHJcbi5zZWNvbmRfcm93IC5sYWJlbF9jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZTc2YjNmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi50ZXh0X2NlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 5890:
/*!***************************************************************************************************************!*\
  !*** ./src/app/home/weight-tracker/add-weight-record-modal/add-weight-record-modal.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd2VpZ2h0LXJlY29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7631:
/*!******************************************************************************!*\
  !*** ./src/app/home/weight-tracker/weight-tracker.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".graph_container {\n  max-width: 512px;\n  display: block;\n  margin: 15px auto 20px;\n}\n\nbutton {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background: rgba(0, 0, 0, 0.3);\n  font-size: 24px;\n  padding: 10px 15px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlaWdodC10cmFja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUYiLCJmaWxlIjoid2VpZ2h0LXRyYWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGhfY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDIwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5703:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/appearance-setting-component/appearance-setting-component.component.scss?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBlYXJhbmNlLXNldHRpbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1481:
/*!******************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/edit-setting-modal.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNldHRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9172:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/goals-setting-component/goals-setting-component.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-grid ion-row ion-col {\n  justify-content: end;\n}\n\nion-grid ion-row ion-item {\n  width: 100% !important;\n}\n\nion-grid ion-row ion-item h4 {\n  margin: 0 10px;\n  padding: 0;\n}\n\nion-grid ion-row ion-item ion-icon {\n  font-size: 28px;\n  color: var(--ion-text);\n}\n\n.calorie_goal {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvYWxzLXNldHRpbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGIiwiZmlsZSI6ImdvYWxzLXNldHRpbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5pb24tZ3JpZCBpb24tcm93IGlvbi1pdGVtIHtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWdyaWQgaW9uLXJvdyBpb24taXRlbSBoNCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5pb24tZ3JpZCBpb24tcm93IGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0KTtcclxufVxyXG4uY2Fsb3JpZV9nb2FsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4655:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/profile-setting-content/profile-setting-content.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-grid ion-row ion-col {\n  justify-content: end;\n}\n\nion-grid ion-row ion-item {\n  width: 100% !important;\n}\n\nion-grid ion-row ion-item h4 {\n  margin: 0 10px;\n  padding: 0;\n}\n\nion-grid ion-row ion-item ion-icon {\n  font-size: 28px;\n  color: var(--ion-text);\n}\n\n.calorie_goal {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtc2V0dGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGIiwiZmlsZSI6InByb2ZpbGUtc2V0dGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5pb24tZ3JpZCBpb24tcm93IGlvbi1pdGVtIHtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWdyaWQgaW9uLXJvdyBpb24taXRlbSBoNCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5pb24tZ3JpZCBpb24tcm93IGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0KTtcclxufVxyXG4uY2Fsb3JpZV9nb2FsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5663:
/*!************************************************************************************!*\
  !*** ./src/app/settings/settings-button/settings-button.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".button_container {\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  cursor: pointer;\n}\n\n.button_container:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n\n.button_container ion-icon {\n  font-size: 42px;\n  color: var(--ion-text);\n}\n\n@media only screen and (min-width: 992px) {\n  .button_container {\n    min-width: 128px;\n    min-height: 128px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUVBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbl9jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1dHRvbl9jb250YWluZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xyXG59XHJcbi5idXR0b25fY29udGFpbmVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDQycHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogMTI4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjhweDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5855:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".fs {\n  width: 100%;\n  height: 100%;\n}\n\n.fs .buttons_center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 512px;\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5mcyAuYnV0dG9uc19jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTEycHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3091:
/*!***********************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-tab-bar {\n  padding: 5px 0;\n  border-top-left-radius: 18px;\n  border-top-right-radius: 18px;\n  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.2);\n}\n\nion-fab {\n  bottom: 20px;\n}\n\nion-fab-button {\n  --background: #E76B3F!important;\n  border: 5px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);\n  width: 70px;\n  height: 70px;\n  margin-left: unset;\n  -webkit-margin-start: -8px !important;\n          margin-inline-start: -8px !important;\n  -background-activated: var(--ion-color-primary-shade, #E76B3F);\n  --background-focused: var(--ion-color-primary-shade, #E76B3F);\n  --background-hover: var(--ion-color-primary-tint, #E76B3F);\n}\n\nion-fab-button:active {\n  width: 60px;\n  height: 60px;\n  -webkit-margin-start: -4px !important;\n          margin-inline-start: -4px !important;\n}\n\nion-label {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 15px;\n}\n\nion-tab-button.tab-selected {\n  color: #E76B3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUdBLGdEQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0VBQ0EsOERBQUE7RUFDQSw2REFBQTtFQUNBLDBEQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUFJSjs7QUFGQTtFQUNJLDJDQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtBQU1KIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC01cHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggLTVweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTVweCAxNXB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuaW9uLWZhYiB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTc2QjNGIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAtOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjRTc2QjNGKTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgI0U3NkIzRik7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICNFNzZCM0YpO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IC00cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6ICNFNzZCM0Y7XHJcbn0iXX0= */";

/***/ }),

/***/ 3306:
/*!********************************************************************************!*\
  !*** ./src/app/workouts/workout-group/workout-group.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".group_container {\n  margin: 10px 0;\n}\n\n.group_container.margin_container {\n  margin: 20px 0;\n}\n\n.group_title {\n  display: inline-block;\n  background: #9FCC58;\n  border-radius: 8px;\n  padding: 15px 20px;\n  min-width: 136px;\n  text-align: center;\n}\n\n.group_title.margin_title {\n  margin: 20px 0 25px;\n}\n\n.group_title h2 {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n}\n\nimg {\n  max-width: 312px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNFLG1CQUFBO0FBSUY7O0FBRkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUoiLCJmaWxlIjoid29ya291dC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cF9jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5ncm91cF9jb250YWluZXIubWFyZ2luX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmdyb3VwX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICM5RkNDNTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncm91cF90aXRsZS5tYXJnaW5fdGl0bGUge1xyXG4gIG1hcmdpbjogMjBweCAwIDI1cHg7XHJcbn1cclxuLmdyb3VwX3RpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMTJweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2653:
/*!*************************************************************!*\
  !*** ./src/app/workouts/workouts.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".container {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6IndvcmtvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <app-toolbar *ngIf=\"loggedIn\"></app-toolbar>\n</ion-app>\n";

/***/ }),

/***/ 4414:
/*!*************************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/add-food-modal.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cancel()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"confirm()\" [strong]=\"true\">Добави</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <!-- Name -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item class=\"name_input\">\r\n          <ion-label position=\"fixed\">Име</ion-label>\r\n          <ion-input placeholder=\"Въведи име\" [(ngModel)]=\"food.name\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"icon_container\">\r\n        <ion-button fill=\"clear\" (click)=\"toggleFavourite()\">\r\n          <ion-icon name=\"heart-outline\" *ngIf=\"!favourite\"></ion-icon>\r\n          <ion-icon name=\"heart\" *ngIf=\"favourite\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <img [src]=\"food.image\" alt=\"Food Image\" *ngIf=\"food.image\">\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"5\" class=\"ion-text-end\">\r\n          <ion-button fill=\"clear\" (click)=\"updateQuantity(false)\">\r\n            <ion-icon name=\"remove-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"ion-text-center\">\r\n          <ion-label position=\"fixed\" slot=\"end\">Количество</ion-label>\r\n          <ion-input [value]=\"quantity\" [disabled]=\"true\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"ion-text-start\">\r\n          <ion-button fill=\"clear\" (click)=\"updateQuantity(true)\">\r\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <app-nutrient-button\r\n          [nutrientName]=\"'protein'\"\r\n          [value]=\"food.macros.protein\"\r\n          (changeValue)=\"onMacrosChanged('protein', $event.value)\"></app-nutrient-button>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-nutrient-button\r\n          [nutrientName]=\"'carbs'\"\r\n          [value]=\"food.macros.carbs\"\r\n          (changeValue)=\"onMacrosChanged('carbs', $event.value)\"></app-nutrient-button>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-nutrient-button\r\n          [nutrientName]=\"'fats'\"\r\n          [value]=\"food.macros.fats\"\r\n          (changeValue)=\"onMacrosChanged('fats', $event.value)\"></app-nutrient-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <app-nutrient-button\r\n          [nutrientName]=\"'calories'\"\r\n          [value]=\"food.calories\"></app-nutrient-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <app-nutrient-button\r\n          [nutrientName]=\"'weight'\"\r\n          [value]=\"food.weight\"\r\n          (changeValue)=\"onWeightChanged($event)\"></app-nutrient-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 8058:
/*!******************************************************************************************************!*\
  !*** ./src/app/food-search/add-food-modal/nutrient-button/nutrient-button.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"nutrient_container\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" sizeSm=\"6\" *ngIf=\"nutrientName !== 'calories' && nutrientName !== 'weight'\">\r\n        <div class=\"icon_container {{nutrientName}}\">\r\n          <ion-icon src=\"/assets/icon/protein.svg\" *ngIf=\"nutrientName === 'protein'\"></ion-icon>\r\n          <ion-icon src=\"/assets/icon/carbs.svg\" *ngIf=\"nutrientName === 'carbs'\"></ion-icon>\r\n          <ion-icon src=\"/assets/icon/fat.svg\" *ngIf=\"nutrientName === 'fats'\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"nutrientName === 'calories'\">\r\n        <div class=\"icon_container {{nutrientName}}\">\r\n          <ion-icon src=\"/assets/icon/weight.svg\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" *ngIf=\"nutrientName === 'weight'\">\r\n        <div class=\"icon_container {{nutrientName}}\">\r\n          <ion-icon src=\"/assets/icon/weight.svg\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"nutrientName !== 'calories'\">\r\n        <div *ngIf=\"nutrientName !== 'weight'\">\r\n          <p class=\"stacked_label\">{{nutrientName.charAt(0).toUpperCase() + nutrientName.slice(1)}}</p>\r\n          <p\r\n            class=\"picker_button flex_center\"\r\n            (click)=\"openPicker()\"\r\n            *ngIf=\"(nutrientName !== 'calories' && nutrientName !== 'weight') && value !== undefined\">\r\n            {{value.toFixed()}}g\r\n            <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n          </p>\r\n        </div>\r\n        <ion-item *ngIf=\"nutrientName === 'weight'\" class=\"weight_item\">\r\n          <ion-label position=\"floating\">Tегло</ion-label>\r\n          <ion-input\r\n            [(ngModel)]=\"value\"\r\n            (ionChange)=\"onChangeValueEvent($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"nutrientName === 'calories'\" size=\"6\" class=\"calories_text\">\r\n        <p class=\"stacked_label\">Калории</p>\r\n        <p *ngIf=\"nutrientName === 'calories'\">{{value.toFixed()}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ }),

/***/ 6975:
/*!*****************************************************************************!*\
  !*** ./src/app/food-search/favourites/favourites.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\">\r\n  <ion-modal [isOpen]=\"open\" #modal>\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Любими</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"onClose()\">Затвори</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <div class=\"fs flex_center\" *ngIf=\"fetching\">\r\n          <ion-spinner name=\"lines-sharp\"></ion-spinner>\r\n        </div>\r\n        <div *ngIf=\"!fetching\">\r\n          <ion-card *ngFor=\"let food of favourites; let i = index\">\r\n            <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"8\" class=\"name_container\" (click)=\"onAddFood(food)\">\r\n                    <h4>{{ favouritesBG[i] }}</h4>\r\n                  </ion-col>\r\n                  <ion-col class=\"icon_container\">\r\n                    <ion-button fill=\"clear\" (click)=\"removeFromFavourites(food)\">\r\n                      <ion-icon name=\"heart\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6318:
/*!*******************************************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-graph-preview/food-graph-preview.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"graph_container\">\n  <canvas #graph></canvas>\n</div>";

/***/ }),

/***/ 6213:
/*!***************************************************************************!*\
  !*** ./src/app/food-search/food-list/food-list.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\r\n    <div class=\"card_container\">\r\n        <ion-card *ngFor=\"let food of foodList\">\r\n            <ion-card-content>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"8\" class=\"name_container\" (click)=\"selected(food)\">\r\n                            <h4>{{ food }}</h4>\r\n                        </ion-col>\r\n                        <ion-col class=\"icon_container\">\r\n                            <ion-button fill=\"clear\" (click)=\"removeFromFavourites(food)\" *ngIf=\"(this.favourites.indexOf(food) > -1)\">\r\n                                <ion-icon name=\"heart\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button fill=\"clear\" (click)=\"addToFavourites(food)\" *ngIf=\"!(this.favourites.indexOf(food) > -1)\">\r\n                              <ion-icon name=\"heart-outline\"></ion-icon>\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n</ion-list>\r\n";

/***/ }),

/***/ 8634:
/*!*******************************************************************!*\
  !*** ./src/app/food-search/food-search.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-home-header></app-home-header>\r\n<ion-content>\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"9\">\r\n          <ion-searchbar\r\n            animated=\"true\"\r\n            (ionChange)=\"inputChanged($event)\"\r\n            [value]=\"query\"\r\n            placeholder=\"Търси храна\"></ion-searchbar>\r\n          <ion-spinner name=\"lines-sharp\" *ngIf=\"fetching\"></ion-spinner>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button class=\"favourites_button\" (click)=\"openFavourites()\">\r\n            <ion-icon name=\"heart-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-food-list\r\n      *ngIf=\"foundFoods.length > 0 && !fetching\"\r\n      [foodList]=\"foundFoods\"\r\n      (foodSelected)=\"onFoodSelected($event)\"></app-food-list>\r\n  </div>\r\n  <app-favourites\r\n    *ngIf=\"favouritesOpened\"\r\n    (closed)=\"closeFavourites()\"></app-favourites>\r\n</ion-content>\r\n<app-scan-food-barcode></app-scan-food-barcode>\r\n";

/***/ }),

/***/ 3785:
/*!*******************************************************************************************!*\
  !*** ./src/app/food-search/scan-food-barcode/scan-food-barcode.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-fab horizontal=\"end\" vertical=\"bottom\">\r\n  <ion-fab-button (click)=\"scanBarcode()\">\r\n    <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n";

/***/ }),

/***/ 9693:
/*!***************************************************************************!*\
  !*** ./src/app/headers/home-header/home-header.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header collapse=\"fade\">\r\n  <ion-toolbar>\r\n    <div class=\"container\">\r\n      <img src=\"/assets/img/logo.png\" alt=\"Logo\">\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>";

/***/ }),

/***/ 3990:
/*!*******************************************************************************************!*\
  !*** ./src/app/headers/meal-history-header/meal-history-header.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"flex_center\">\n    <ion-buttons class=\"flex_center\">\n      <ion-button (click)=\"onPreviousClicked()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"onSelectDay()\">{{day}}</ion-button>\n      <ion-button (click)=\"onNextClicked()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>";

/***/ }),

/***/ 4243:
/*!***********************************************************************************!*\
  !*** ./src/app/history/favourites-card/favourites-card.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Добави храна</ion-card-subtitle>\r\n    <ion-card-title>Любими</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-card *ngFor=\"let food of favourites\" (click)=\"addFavouriteFood(food)\">\r\n      <ion-card-content>\r\n        <h4>{{ food }}</h4>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

/***/ }),

/***/ 1095:
/*!***************************************************************************************!*\
  !*** ./src/app/history/history-food-list/history-food-list.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item *ngFor=\"let meal of meals\">\n    <ion-thumbnail slot=\"start\">\n      <img alt=\"Meal Image\" [src]=\"meal.image\" />\n    </ion-thumbnail>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h4>{{meal.name}}</h4>\n        </ion-col>\n        <ion-col>\n          <h4>{{meal.weight}}g</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-list>";

/***/ }),

/***/ 4575:
/*!***********************************************************!*\
  !*** ./src/app/history/history.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-meal-history-header [day]=\"day\" (dayChanged)=\"onDateChanged($event)\"></app-meal-history-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-modal [isOpen]=\"selectingDay\">\r\n    <ng-template>\r\n      <ion-datetime\r\n        [firstDayOfWeek]=\"1\"\r\n        (ionChange)=\"onDateSelected($event)\"></ion-datetime>\r\n    </ng-template>\r\n  </ion-modal>\r\n  <div [ngClass]=\"{'fs': fetching}\" class=\"flex_center\">\r\n    <ion-spinner name=\"lines-sharp\" *ngIf=\"fetching\"></ion-spinner>\r\n  </div>\r\n  <ion-card class=\"overview_card\" *ngIf=\"!fetching\">\r\n    <ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-subtitle>Консумирана храна</ion-card-subtitle>\r\n            <ion-card-title>Общ преглед</ion-card-title>\r\n          </ion-col>\r\n          <ion-col class=\"flex_horizontal ion-text-end\">\r\n            <ion-button fill=\"clear\" (click)=\"addFood()\">\r\n              <ion-icon name=\"add-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <div class=\"data_overview\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <p>{{totalCalories.toFixed()}} KCAL</p>\r\n            </ion-col>\r\n            <ion-col>\r\n              <p>{{macrosOverview.protein.toFixed()}} Protein</p>\r\n            </ion-col>\r\n            <ion-col>\r\n              <p>{{macrosOverview.carbs.toFixed()}} Carbs</p>\r\n            </ion-col>\r\n            <ion-col>\r\n              <p>{{macrosOverview.fats.toFixed()}} Fats</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </ion-card-header>\r\n    <ion-accordion-group>\r\n      <ion-accordion>\r\n        <ion-item slot=\"header\" color=\"blue_gradient\">\r\n          <ion-label>Храни</ion-label>\r\n        </ion-item>\r\n        <div class=\"ion-padding\" slot=\"content\">\r\n          <ion-card-content>\r\n            <app-history-food-list [meals]=\"meals\"></app-history-food-list>\r\n          </ion-card-content>\r\n        </div>\r\n      </ion-accordion>\r\n    </ion-accordion-group>\r\n  </ion-card>\r\n  <app-favourites-card (addFood)=\"addFood($event)\"></app-favourites-card>\r\n</ion-content>\r\n";

/***/ }),

/***/ 9494:
/*!**************************************************************************!*\
  !*** ./src/app/home/day-selector/day-selector.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-segment [scrollable]=\"true\"\r\n  (ionChange)=\"onDaySelected()\"\r\n  [(ngModel)]=\"daySelected\"\r\n  mode=\"md\">\r\n  <ion-segment-button value=\"0\">\r\n    <ion-label>Пон</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"1\">\r\n    <ion-label>Вто</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"2\">\r\n    <ion-label>Сря</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"3\">\r\n    <ion-label>Чет</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"4\">\r\n    <ion-label>Пет</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"5\">\r\n    <ion-label>Съб</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"6\">\r\n    <ion-label>Нед</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-home-header></app-home-header>\r\n<ion-content [fullscreen]=\"true\">\r\n    <div class=\"container\">\r\n        <h1 class=\"greeting\">Здравей, {{username}}</h1>\r\n        <app-day-selector></app-day-selector>\r\n        <app-tracker [macros]=\"macros\"></app-tracker>\r\n        <app-workout-group\r\n        [groupName]=\"'Тренировки'\"\r\n        [images]=\"['full_body_1.png', 'full_body_cardio_2.png', 'full_body_hell.png']\"\r\n        [slideOptions]=\"slideOpts\"\r\n        [margin]=\"false\"></app-workout-group>\r\n        <app-meal-history></app-meal-history>\r\n        <app-weight-tracker></app-weight-tracker>\r\n    </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4297:
/*!**************************************************************************!*\
  !*** ./src/app/home/meal-history/meal-history.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content_container\">\r\n  <div class=\"graph_container\">\r\n    <canvas #graph></canvas>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 1188:
/*!******************************************************************************************!*\
  !*** ./src/app/home/tracker/tracker-nutrient/tracker-nutrient.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"nutrient_container\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"icon_container {{key}}\">\r\n          <ion-icon src=\"/assets/icon/protein.svg\" *ngIf=\"key === 'protein'\"></ion-icon>\r\n          <ion-icon src=\"/assets/icon/carbs.svg\" *ngIf=\"key === 'carbs'\"></ion-icon>\r\n          <ion-icon src=\"/assets/icon/fat.svg\" *ngIf=\"key === 'fat'\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col sizeSm=\"8\" sizeXs=\"12\">\r\n        <p class=\"stacked_label\">{{key.charAt(0).toUpperCase() + key.slice(1)}}</p>\r\n        <p>{{value}}g/{{goal}}g</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ }),

/***/ 8261:
/*!****************************************************************!*\
  !*** ./src/app/home/tracker/tracker.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\r\n    <ion-row>\r\n        <ion-col sizeXs=\"12\" sizeMd=\"8\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col sizeXl=\"8\" size=\"12\">\r\n                        <div class=\"graph_container\">\r\n                            <canvas #graph></canvas>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col class=\"flex_center\">\r\n                        <div>\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col size=\"12\">\r\n                                        <div class=\"label_container text_center\">\r\n                                            <h4>{{trackingService.calorieGoal}}</h4>\r\n                                            <h6 class=\"label_sm\">KCAL</h6>\r\n                                        </div>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"second_row\">\r\n                                        <div class=\"label_container\">\r\n                                            <h4>{{caloriesLeft.toFixed()}}</h4>\r\n                                            <h6 class=\"label_sm\">Оставащи калории</h6>\r\n                                        </div>\r\n                                    </ion-col>\r\n                                    <ion-col class=\"second_row\">\r\n                                        <div class=\"label_container calories_left\">\r\n                                            <h4>{{(trackingService.calorieGoal - caloriesLeft).toFixed()}}</h4>\r\n                                            <h6 class=\"label_sm\">Консумирани калории</h6>\r\n                                        </div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\" *ngIf=\"macroGoal\">\r\n            <ion-row>\r\n                <ion-col sizeXs=\"4\" sizeMd=\"12\">\r\n                    <app-tracker-nutrient\r\n                      [macroGoal]=\"macroGoal\"\r\n                      [key]=\"'protein'\"\r\n                      [value]=\"macros.protein\"></app-tracker-nutrient>\r\n                </ion-col>\r\n                <ion-col sizeXs=\"4\" sizeMd=\"12\">\r\n                    <app-tracker-nutrient\r\n                      [macroGoal]=\"macroGoal\"\r\n                      [key]=\"'carbs'\"\r\n                      [value]=\"macros.carbs\"></app-tracker-nutrient>\r\n                </ion-col>\r\n                <ion-col sizeXs=\"4\" sizeMd=\"12\">\r\n                    <app-tracker-nutrient\r\n                      [macroGoal]=\"macroGoal\"\r\n                      [key]=\"'fat'\"\r\n                      [value]=\"macros.fats\"></app-tracker-nutrient>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 5006:
/*!***************************************************************************************************************!*\
  !*** ./src/app/home/weight-tracker/add-weight-record-modal/add-weight-record-modal.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Въведи тегло\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onClose()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-datetime\r\n      displayFormat=\"MM/DD/YYYY\"\r\n      (ionChange)=\"onDateSelected($event)\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Тегло (кг):</ion-label>\r\n    <ion-input\r\n      type=\"number\"\r\n      (change)=\"setWeight($event.target.value)\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button expand=\"full\" (click)=\"onSave()\">Добави</ion-button>\r\n</ion-content>\r\n";

/***/ }),

/***/ 125:
/*!******************************************************************************!*\
  !*** ./src/app/home/weight-tracker/weight-tracker.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>Тегло</ion-card-title>\r\n    <button (click)=\"onAddWeightRecord()\">+</button>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <div class=\"graph_container\">\r\n      <canvas #graph></canvas>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

/***/ }),

/***/ 648:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/appearance-setting-component/appearance-setting-component.component.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\r\n  <ion-radio-group [value]=\"mode\" (ionChange)=\"changeAppearance($event)\">\r\n    <ion-item>\r\n      <ion-label>Тъмен режим</ion-label>\r\n      <ion-radio slot=\"end\" value=\"dark_mode\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Светъл режим</ion-label>\r\n      <ion-radio slot=\"end\" value=\"light_mode\"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n";

/***/ }),

/***/ 967:
/*!******************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/edit-setting-modal.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\">\r\n  <ion-modal [isOpen]=\"modalOpen\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title [textContent]=\"settingId\"></ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"closeModal()\">Затвори</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\" [ngSwitch]=\"settingId\">\r\n        <app-profile-setting-content *ngSwitchCase=\"'Profile'\"></app-profile-setting-content>\r\n        <app-goals-setting-component *ngSwitchCase=\"'Goals'\"></app-goals-setting-component>\r\n        <app-appearance-setting-component *ngSwitchCase=\"'Appearance'\"></app-appearance-setting-component>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5680:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/goals-setting-component/goals-setting-component.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid *ngIf=\"user\">\r\n  <ion-list>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Тегло</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4 [textContent]=\"user.weight\"></h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('weight', 'number')\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Активност</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4 [textContent]=\"activityText\"></h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('activity', 'list')\">\r\n            <ion-icon name=\"list-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Цел</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4 [textContent]=\"goalText\"></h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('goal', 'list')\">\r\n            <ion-icon name=\"list-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row class=\"calorie_goal\">\r\n      <ion-item>\r\n        <ion-col>\r\n          <h4>Калорийна цел: {{calorieGoal}} kcal/ден</h4>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n  </ion-list>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 9719:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/settings/edit-setting-modal/profile-setting-content/profile-setting-content.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid *ngIf=\"user\">\r\n  <ion-list>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Име</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4 [textContent]=\"user.name\"></h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('name')\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Възраст</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4 [textContent]=\"user.age\"></h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('age', 'number')\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Височина</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\">\r\n          <h4>{{user.height}}cm</h4>\r\n          <ion-button fill=\"clear\" (click)=\"editValue('height', 'number')\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-col size=\"5\">\r\n          <h4>Тегло</h4>\r\n        </ion-col>\r\n        <ion-col class=\"flex_center\" (click)=\"editValue('weight', 'number')\">\r\n          <h4>{{user.weight}}kg</h4>\r\n          <ion-button fill=\"clear\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row class=\"calorie_goal\">\r\n      <ion-item>\r\n        <ion-col>\r\n          <h4>Калорийна цел: {{calorieGoal}} kcal/ден</h4>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>\r\n  </ion-list>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 2374:
/*!************************************************************************************!*\
  !*** ./src/app/settings/settings-button/settings-button.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"button_container flex_center\" (click)=\"openEditSettingModal()\">\r\n  <div>\r\n    <div class=\"icon_container\" [ngSwitch]=\"settingName\">\r\n      <ion-icon name=\"person-outline\" *ngSwitchCase=\"'Profile'\"></ion-icon>\r\n      <ion-icon name=\"trophy-outline\" *ngSwitchCase=\"'Goals'\"></ion-icon>\r\n      <ion-icon name=\"brush-outline\" *ngSwitchCase=\"'Appearance'\"></ion-icon>\r\n      <ion-icon name=\"refresh-outline\" *ngSwitchCase=\"'Reset user'\"></ion-icon>\r\n    </div>\r\n    <div class=\"name_container\" [ngSwitch]=\"settingName\">\r\n      <h4 *ngSwitchCase=\"'Profile'\">Профил</h4>\r\n      <h4 *ngSwitchCase=\"'Goals'\">Цели</h4>\r\n      <h4 *ngSwitchCase=\"'Appearance'\">Външен вид</h4>\r\n      <h4 *ngSwitchCase=\"'Reset user'\">Нулиране</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 9885:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-home-header></app-home-header>\r\n<ion-content>\r\n  <app-edit-setting-modal\r\n    [modalOpen]=\"modalOpen\"\r\n    [settingId]=\"editSettingId\"\r\n    (closeSettingModal)=\"closeSettingModal()\"></app-edit-setting-modal>\r\n  <ion-grid class=\"fs\">\r\n    <div class=\"buttons_center\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <app-settings-button\r\n            [settingName]=\"'Profile'\"\r\n            (editSetting)=\"openEditSettingModal($event)\"></app-settings-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <app-settings-button\r\n            [settingName]=\"'Goals'\"\r\n            (editSetting)=\"openEditSettingModal($event)\"></app-settings-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <app-settings-button\r\n            [settingName]=\"'Appearance'\"\r\n            (editSetting)=\"openEditSettingModal($event)\"></app-settings-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <app-settings-button\r\n            [settingName]=\"'Reset user'\"\r\n            (editSetting)=\"resetUserSettings()\"></app-settings-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1821:
/*!***********************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"light\">\r\n    <!-- Home -->\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Начало</ion-label>\r\n    </ion-tab-button>\r\n    <!-- History -->\r\n    <ion-tab-button tab=\"meal_history\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>История</ion-label>\r\n    </ion-tab-button>\r\n    <!-- Food -->\r\n    <ion-tab-button></ion-tab-button>\r\n    <!-- Workouts -->\r\n    <ion-tab-button tab=\"workouts\">\r\n      <ion-icon name=\"barbell-outline\"></ion-icon>\r\n      <ion-label>Спорт</ion-label>\r\n    </ion-tab-button>\r\n    <!-- Settings -->\r\n    <ion-tab-button tab=\"settings\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>Настройки</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" *ngIf=\"showAddButton\">\r\n    <ion-fab-button (click)=\"onAddFood()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-tabs>\r\n";

/***/ }),

/***/ 400:
/*!********************************************************************************!*\
  !*** ./src/app/workouts/workout-group/workout-group.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>{{groupName}}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-slides pager=\"true\" [options]=\"slideOptions\">\r\n    <ion-slide *ngFor=\"let image of images\">\r\n      <img [src]=\"'/assets/img/' + image\">\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-card>\r\n";

/***/ }),

/***/ 9652:
/*!*************************************************************!*\
  !*** ./src/app/workouts/workouts.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-home-header></app-home-header>\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <app-workout-group\r\n        [groupName]=\"'Цяло тяло'\"\r\n        [images]=\"['full_body_1.png', 'full_body_cardio_2.png', 'full_body_hell.png']\"\r\n        [slideOptions]=\"slideOpts\"></app-workout-group>\r\n        <app-workout-group\r\n        [groupName]=\"'Корем'\"\r\n        [images]=\"['abs.png', 'abs_killer.png', 'home_abs.png']\"\r\n        [slideOptions]=\"slideOpts\"></app-workout-group>\r\n        <app-workout-group\r\n        [groupName]=\"'Ръце'\"\r\n        [images]=\"['arm_routine.png', 'biceps_triceps.png', 'triceps.png']\"\r\n        [slideOptions]=\"slideOpts\"></app-workout-group>\r\n        <app-workout-group\r\n        [groupName]=\"'Гръб'\"\r\n        [images]=\"['back.png', 'upper_back.png']\"\r\n        [slideOptions]=\"slideOpts\"></app-workout-group>\r\n        <app-workout-group\r\n        [groupName]=\"'Крака'\"\r\n        [images]=\"['leg_burner.png', 'leg_routine.png']\"\r\n        [slideOptions]=\"slideOpts\"></app-workout-group>\r\n    </div>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map