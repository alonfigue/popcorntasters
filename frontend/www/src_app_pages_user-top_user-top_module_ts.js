"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-top_user-top_module_ts"],{

/***/ 4042:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-top/user-top-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTopPageRoutingModule": () => (/* binding */ UserTopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_top_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-top.page */ 3885);




const routes = [
    {
        path: '',
        component: _user_top_page__WEBPACK_IMPORTED_MODULE_0__.UserTopPage
    }
];
let UserTopPageRoutingModule = class UserTopPageRoutingModule {
};
UserTopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserTopPageRoutingModule);



/***/ }),

/***/ 353:
/*!***************************************************!*\
  !*** ./src/app/pages/user-top/user-top.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTopPageModule": () => (/* binding */ UserTopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_top_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-top-routing.module */ 4042);
/* harmony import */ var _user_top_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-top.page */ 3885);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let UserTopPageModule = class UserTopPageModule {
};
UserTopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_top_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserTopPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_user_top_page__WEBPACK_IMPORTED_MODULE_1__.UserTopPage]
    })
], UserTopPageModule);



/***/ }),

/***/ 3885:
/*!*************************************************!*\
  !*** ./src/app/pages/user-top/user-top.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTopPage": () => (/* binding */ UserTopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_top_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-top.page.html?ngResource */ 2262);
/* harmony import */ var _user_top_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-top.page.scss?ngResource */ 2757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);





let UserTopPage = class UserTopPage {
    constructor(http) {
        this.http = http;
        this.favs = [];
        this.username = localStorage.getItem('username');
    }
    ngOnInit() {
        console.log(this.username);
        this.http
            .get('https://popcorntasters-api.herokuapp.com/users/' +
            this.username +
            '/movies')
            .subscribe((res) => {
            console.log(res);
            this.favs = res;
        });
    }
};
UserTopPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserTopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-top',
        template: _user_top_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_top_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserTopPage);



/***/ }),

/***/ 2757:
/*!**************************************************************!*\
  !*** ./src/app/pages/user-top/user-top.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#Favs {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n#Favs img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n#Favs h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItdG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFEUiIsImZpbGUiOiJ1c2VyLXRvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjRmF2cyB7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDEgeyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */";

/***/ }),

/***/ 2262:
/*!**************************************************************!*\
  !*** ./src/app/pages/user-top/user-top.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-header-go-main title=\"Favorite Movies\"></app-header-go-main>\r\n\r\n<ion-content>\r\n  \r\n  <ion-card id=\"Favs\">\r\n    <img src=\"assets/logos/logo1.png\" />\r\n    <h1>List of Favorites:</h1>\r\n    \r\n    <ion-list>\r\n      <ion-item\r\n      *ngFor=\"let favS of favs\"\r\n      [routerLink]=\"['/profile-movie/' + favS.id]\"\r\n      >\r\n      <ion-label> ☆ {{favS.title}} </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-top_user-top_module_ts.js.map