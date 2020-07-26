(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n\t<ion-row justify-content-center>\n\t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n\t\t\t<div text-center>\n\t\t\t\t\t\t\n        \t\t\n\t\t\t</div>\n\n\t\t\t<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n\t\t\t<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n\n\t\t\t<div padding>\n\t\t\t\t<ion-button size=\"large\" (click)='launchSite()' expand=\"block\">Place Order</ion-button>\n\t\t\t\t<ion-button size=\"large\" (click)='launchSite2()' color=\"warning\" expand=\"block\">Sign Up</ion-button>\n\t\t\t\t<ion-button size=\"large\" (click)='exitApp()' color=\"danger\" expand=\"block\">Exit</ion-button>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  width: 100%;\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff; }\n\nion-button {\n  font-weight: 300;\n  color: #000;\n  background-color: #fff;\n  border: none;\n  border-radius: 45px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    height: 100%;\n    background-image: url('welcome.jpg');\n    background-size: cover;\n    text-align: centre; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxcV2ViQXBwXFxNeU1vYmlsZUFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxXQUFVO0VBQ1YsWUFQWSxFQUFBOztBQWVoQjtFQUNJLFlBaEJZLEVBQUE7O0FBbUJoQjtFQUNJLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG9DQUE0QjtFQUE1Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSTtJQUVJLFlBQVk7SUFDWixvQ0FBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiRoZWlnaHQxMDA6IDEwMCU7XG4kYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9hYmVva3V0YS5KUEcpO1xuJGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4kdGV4dC1hbGlnbjogY2VudHJlO1xuXG5pb24tZ3JpZCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZGZkZmRmO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9pdG9rdV9hcHAucG5nKTtcbiAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50cmU7XG4gICAgXG59XG5cbmlvbi1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbn1cblxuaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcbiAgICAvL2JhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIC8vYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2Uvd2VsY29tZS5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50cmU7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG5cbiAgXG4gXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(inAppBrowser, platform) {
        this.inAppBrowser = inAppBrowser;
        this.platform = platform;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.launchSite = function () {
        this.inAppBrowser.create('https://delivery.nigeriaware.com/customer/category', '_blank');
    };
    HomePage.prototype.launchSite2 = function () {
        this.inAppBrowser.create('https://delivery.nigeriaware.com/accounts/signup/customer/', '_blank');
    };
    HomePage.prototype.exitApp = function () {
        navigator['app'].exitApp();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                navigator['app'].exitApp();
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map