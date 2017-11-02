webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIST_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
// tslint:disable:typedef
var LIST = 'List.List';
var List = (function () {
    function List() {
        this.type = LIST;
    }
    return List;
}());

var LIST_RESULT = 'List.Result';
var ListResult = (function () {
    function ListResult(rows) {
        this.rows = rows;
        this.type = LIST_RESULT;
    }
    return ListResult;
}());

var DELETE = 'List.Delete';
var Delete = (function () {
    function Delete(id) {
        this.id = id;
        this.type = DELETE;
    }
    return Delete;
}());

//# sourceMappingURL=list.actions.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_service__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(editService, navCtrl, toastCtrl) {
        this.editService = editService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    Object.defineProperty(EditComponent.prototype, "form", {
        get: function () {
            return this.editService.form;
        },
        enumerable: true,
        configurable: true
    });
    EditComponent.prototype.ngOnInit = function () {
        var id = this.navCtrl.getActive().getNavParams().data['id'];
        this.editService.ngOnInit(id ? id : -1);
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.editService.ngOnDestroy();
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        this.editService.save().subscribe(function () {
            return _this.toastCtrl.create({
                message: 'Saved!',
                duration: 2000,
                position: 'top'
            }).present();
        }).unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'app-edit',template:/*ion-inline-start:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\pages\edit\edit.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Demo - Edit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list [formGroup]="form">\n    <ion-item>\n      <input #filter type="hidden" formControlName="id">\n      <ion-input placeholder="First Name" formControlName="firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Last Name" formControlName="lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-datetime displayFormat="MM/DD/YYYY" placeholder="Birth Date" formControlName="dateOfBirth"></ion-datetime>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row justify-content-end>\n        <ion-col>\n          <button (click)="save()" ion-button style="float:right" [disabled]="!form.valid">\n            <ion-icon name="filing">&nbsp;</ion-icon>Save</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\pages\edit\edit.component.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__edit_service__["a" /* EditService */]]
        // can't use onPush because components don't support it
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__edit_service__["a" /* EditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__edit_service__["a" /* EditService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Set; });
// tslint:disable:typedef
var SET = 'Filter.Set';
var Set = (function () {
    function Set(filter) {
        this.filter = filter;
        this.type = SET;
    }
    return Set;
}());

//# sourceMappingURL=filter.actions.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_edit_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_actions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_actions__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = (function () {
    function ListComponent(store, navCtrl, alertCtrl) {
        this.store = store;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.contacts = store.select(function (x) { return x.list.list; });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    // since this page never goes away, we only need this code once.
    ListComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.store.select(function (x) { return x.list.filter; })
            .first()
            .subscribe(function (v) { return _this.filter.getNativeElement().children[0].value = v; });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(this.filter.getNativeElement().children[0], 'keyup')
            .debounceTime(150)
            .subscribe(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__filter_actions__["b" /* Set */](_this.filter.getNativeElement().children[0].value));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__list_actions__["e" /* List */]());
        });
    };
    // make sure we get the current list when we come back
    ListComponent.prototype.ionViewDidEnter = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__list_actions__["e" /* List */]());
    };
    ListComponent.prototype.delete = function (evt, id) {
        var _this = this;
        evt.preventDefault();
        evt.stopPropagation();
        this.alertCtrl.create({
            title: 'Delete?',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__list_actions__["b" /* Delete */](id)); }
                },
                {
                    text: 'Cancel',
                    handler: function () { return; }
                }
            ]
        }).present();
    };
    ListComponent.prototype.edit = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_edit_component__["a" /* EditComponent */], { id: id });
    };
    ListComponent.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_edit_component__["a" /* EditComponent */], { id: -1 });
    };
    return ListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* TextInput */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* TextInput */]) === "function" && _a || Object)
], ListComponent.prototype, "filter", void 0);
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'app-list',template:/*ion-inline-start:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\pages\list\list.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Demo - List\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-input #filter fxFlex placeholder="Filter users"></ion-input>\n        <button fxFlex="44px" (click)="add()" ion-button small color="secondary">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar color="light" padding style="padding-top: 0; padding-bottom: 0; min-height: 30px;">\n    <ion-grid style="padding-top: 0px; padding-bottom: 0px;">\n      <ion-row>\n        <div fxFlex>\n          <b>First</b>\n        </div>\n        <div fxFlex>\n          <b>Last</b>\n        </div>\n        <div fxFlex="80px">\n          <b>DOB</b>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let contact of (contacts | async)">\n      <button detail-none ion-item (click)="edit(contact.id)">\n        <ion-grid>\n          <ion-row>\n            <div fxFlex>{{contact.firstName}}</div>\n            <div fxFlex>{{contact.lastName}}</div>\n            <div fxFlex="83px">{{contact.dateOfBirth | date:\'shortDate\'}}</div>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-item-options side="right">\n        <button ion-button (click)="delete($event, contact.id)">\n          <ion-icon name="trash"></ion-icon>\n          <div>Delete</div>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\pages\list\list.component.html"*/
        // can't use onpush because of datetime component.
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], ListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_edit_edit_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list_module__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["c" /* StoreModule */].forRoot({}),
            __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__pages_list_list_module__["a" /* ListModule */],
            __WEBPACK_IMPORTED_MODULE_0__pages_edit_edit_module__["a" /* EditModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_effects__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_reducer__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var reducers = {
    form: __WEBPACK_IMPORTED_MODULE_2__edit_reducer__["a" /* EditReducer */]
};
var EditModule = (function () {
    function EditModule() {
    }
    return EditModule;
}());
EditModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["c" /* StoreModule */].forFeature('edit', reducers),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_1__edit_effects__["a" /* EditEffects */]]),
            __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__edit_component__["a" /* EditComponent */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__edit_component__["a" /* EditComponent */]]
    })
], EditModule);

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_actions__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditEffects = (function () {
    function EditEffects(actions$, contactsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.contactsService = contactsService;
        this.store = store;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__edit_actions__["a" /* GET */])
            .switchMap(function (action) {
            return _this.contactsService.get(action.id);
        })
            .map(function (records) { return records[0] || {
            id: -1,
            firstName: '',
            lastName: '',
            dateOfBirth: null
        }; })
            .map(function (x) {
            return ({
                id: x.id,
                firstName: x.firstName,
                lastName: x.lastName,
                dateOfBirth: x.dateOfBirth ? x.dateOfBirth.toLocaleDateString() : ''
            });
        })
            .map(function (x) {
            return new __WEBPACK_IMPORTED_MODULE_4__edit_actions__["f" /* Update */](x);
        });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__edit_actions__["c" /* SAVE */])
            .switchMap(function (action) {
            return _this.store.select(function (x) { return x.edit.form; })
                .first();
        }).switchMap(function (form) {
            return _this.contactsService
                .update({
                id: form.id,
                firstName: form.firstName,
                lastName: form.lastName,
                dateOfBirth: new Date(form.dateOfBirth)
            });
        })
            .map(function (id) { return new __WEBPACK_IMPORTED_MODULE_4__edit_actions__["b" /* Get */](id); });
    }
    return EditEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"])
], EditEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"])
], EditEffects.prototype, "save$", void 0);
EditEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__["a" /* ContactsService */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]])
], EditEffects);

//# sourceMappingURL=edit.effects.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export editReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_actions__ = __webpack_require__(94);

function editReducer(state, action) {
    if (state === void 0) { state = {
        id: -1,
        firstName: '',
        lastName: '',
        dateOfBirth: ''
    }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__edit_actions__["e" /* UPDATE */]:
            return action.form;
        default:
            return state;
    }
}
var EditReducer = editReducer;
//# sourceMappingURL=edit.reducer.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_actions__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditService = (function () {
    function EditService(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
        // tslint:disable-next-line:typedef
        this.saving = false;
        this.form = this.formBuilder.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].nullValidator],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.editEntity = this.store.select(function (x) { return x.edit.form; });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    EditService.prototype.ngOnInit = function (id) {
        var _this = this;
        this.formSubscription =
            this.form.valueChanges.subscribe(function (x) {
                return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__edit_actions__["f" /* Update */](x));
            });
        this.editEntitySubscription =
            this.editEntity.map(function (x) {
                _this.form.patchValue({
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    dateOfBirth: x.dateOfBirth ? (new Date(x.dateOfBirth)).toISOString() : ''
                }, { emitEvent: false });
                return x;
            })
                .filter(function () { return _this.saving; })
                .subscribe(function () { return _this.saving = false; });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__edit_actions__["b" /* Get */](id));
    };
    EditService.prototype.ngOnDestroy = function () {
        this.formSubscription.unsubscribe();
        this.editEntitySubscription.unsubscribe();
    };
    EditService.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__edit_actions__["d" /* Save */]());
        return this.editEntity.filter(function () { return !_this.saving; })
            .map(function () { return !_this.saving; });
    };
    return EditService;
}());
EditService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]])
], EditService);

//# sourceMappingURL=edit.service.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var reducers = {};
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* StoreModule */].forFeature('shared', reducers),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([])
        ],
        declarations: [],
        exports: [],
        entryComponents: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_reducer__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_reducer__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_effects__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var reducers = {
    list: __WEBPACK_IMPORTED_MODULE_1__list_reducer__["a" /* ListReducer */],
    filter: __WEBPACK_IMPORTED_MODULE_0__filter_reducer__["a" /* FilterReducer */]
};
var ListModule = (function () {
    function ListModule() {
    }
    return ListModule;
}());
ListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__list_component__["a" /* ListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forFeature('list', reducers),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_8__list_effects__["a" /* ListEffects */]]),
            __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__list_component__["a" /* ListComponent */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__list_component__["a" /* ListComponent */]],
        providers: []
    })
], ListModule);

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filterReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_actions__ = __webpack_require__(262);

function filterReducer(
    // tslint:disable-next-line:typedef
    state, action) {
    // tslint:disable-next-line:typedef
    if (state === void 0) { state = ''; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__filter_actions__["a" /* SET */]:
            return action.filter;
        default:
            return state;
    }
}
var FilterReducer = filterReducer;
//# sourceMappingURL=filter.reducer.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export listReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_actions__ = __webpack_require__(140);

function listReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__list_actions__["d" /* LIST_RESULT */]:
            return action.rows;
        default:
            return state;
    }
}
var ListReducer = listReducer;
//# sourceMappingURL=list.reducer.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_contacts_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_actions__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListEffects = (function () {
    function ListEffects(actions$, contactsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.contactsService = contactsService;
        this.store = store;
        this.list$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__list_actions__["c" /* LIST */])
            .switchMap(function () { return _this.store.select(function (x) { return x.list.filter; }); })
            .switchMap(function (filter) {
            return _this.contactsService.list(filter);
        })
            .map(function (x) {
            return new __WEBPACK_IMPORTED_MODULE_5__list_actions__["f" /* ListResult */](x);
        });
        this.delete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__list_actions__["a" /* DELETE */])
            .switchMap(function (action) { return _this
            .contactsService
            .delete(action.id); })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_5__list_actions__["e" /* List */](); });
    }
    return ListEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"])
], ListEffects.prototype, "list$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"])
], ListEffects.prototype, "delete$", void 0);
ListEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_1__shared_contacts_service__["a" /* ContactsService */],
        __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]])
], ListEffects);

//# sourceMappingURL=list.effects.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list_component__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_list_list_component__["a" /* ListComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\davem\WebstormProjects\ionic-crud\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var contacts = [
    {
        id: 1,
        firstName: 'Dave',
        lastName: 'Bush',
        dateOfBirth: new Date(2000, 9, 15)
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Dough',
        dateOfBirth: new Date(1990, 5, 15)
    }
];
var ContactsService = (function () {
    function ContactsService() {
    }
    ContactsService.prototype.list = function (filter) {
        // return this
        //     .httpClient
        //     .get<ReadonlyArray<Contact>>
        //         ('/api/contacts/list')
        //   .retry(2)
        //   .catch((e: Error) =>
        //         /* handle errors here */);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].from([contacts.filter(function (c) {
                return (c.firstName + ' ' + c.lastName).toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1;
            })]);
    };
    ContactsService.prototype.delete = function (id) {
        contacts = contacts
            .filter(function (x) {
            return x.id !== id;
        })
            .reduce(function (previousContact, currentContact) {
            return previousContact.concat([currentContact]);
        }, []);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of({});
    };
    ContactsService.prototype.get = function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].from([[contacts.find(function (x) {
                    return x.id === id;
                })]]);
    };
    ContactsService.prototype.update = function (contact) {
        if (contact.id < 0) {
            return this.add(contact);
        }
        var c = contacts.find(function (x) {
            return x.id === contact.id;
        });
        c.dateOfBirth = contact.dateOfBirth;
        c.firstName = contact.firstName;
        c.lastName = contact.lastName;
        contacts = contacts.slice();
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(contact.id);
    };
    ContactsService.prototype.add = function (contact) {
        var maxId = contacts.reduce(function (max, c) {
            if (max < c.id) {
                return c.id;
            }
            return max;
        }, 0);
        contact.id = maxId + 1;
        contacts = contacts.concat([contact]);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(contact.id);
    };
    return ContactsService;
}());
ContactsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContactsService);

//# sourceMappingURL=contacts.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Save; });
// tslint:disable:typedef
var UPDATE = 'Edit.Update';
var Update = (function () {
    function Update(form) {
        this.form = form;
        this.type = UPDATE;
    }
    return Update;
}());

var GET = 'Edit.Get';
var Get = (function () {
    function Get(id) {
        this.id = id;
        this.type = GET;
    }
    return Get;
}());

var SAVE = 'Edit.Save';
var Save = (function () {
    function Save() {
        this.type = SAVE;
    }
    return Save;
}());

//# sourceMappingURL=edit.actions.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map