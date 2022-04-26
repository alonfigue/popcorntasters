"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-user_profile-user_module_ts"],{

/***/ 4603:
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile-user/profile-user-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserPageRoutingModule": () => (/* binding */ ProfileUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user.page */ 2207);




const routes = [
    {
        path: '',
        component: _profile_user_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUserPage
    }
];
let ProfileUserPageRoutingModule = class ProfileUserPageRoutingModule {
};
ProfileUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUserPageRoutingModule);



/***/ }),

/***/ 9596:
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-user/profile-user.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserPageModule": () => (/* binding */ ProfileUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-routing.module */ 4603);
/* harmony import */ var _profile_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user.page */ 2207);







let ProfileUserPageModule = class ProfileUserPageModule {
};
ProfileUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUserPageRoutingModule,
        ],
        declarations: [_profile_user_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUserPage]
    })
], ProfileUserPageModule);



/***/ }),

/***/ 2207:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-user/profile-user.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserPage": () => (/* binding */ ProfileUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user.page.html?ngResource */ 1541);
/* harmony import */ var _profile_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user.page.scss?ngResource */ 392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);







let ProfileUserPage = class ProfileUserPage {
    constructor(route, http, activatedRoute) {
        this.route = route;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.people = [];
        this.username = localStorage.getItem('username');
    }
    ngOnInit() {
        this.http
            .get('https://popcorntasters-api.herokuapp.com/users/' + this.username)
            .subscribe((res) => {
            console.log(res);
            this.data = res;
            this.people = res.people;
        });
    }
};
ProfileUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ProfileUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile-user',
        template: _profile_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileUserPage);



/***/ }),

/***/ 392:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile-user/profile-user.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #cf3c4f;\n}\n\nion-content {\n  --background: #222428;\n}\n\n#header {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n\n#header img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n#info {\n  text-align: center;\n}\n\n#info h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n\n#info h2 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2NmM2M0ZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjQyODtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuI2luZm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1541:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile-user/profile-user.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">User Profile</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n      <ion-button routerLink=\"/menu/main\">Return to Main</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card id=\"header\">\r\n    <img src=\"assets/logos/user-profile.png\" />\r\n    <div id=\"info\" *ngIf=\"data\">\r\n      <br><br>\r\n      <h1>Username: {{data.username}}</h1>\r\n      <h2>Name: {{data.name}}</h2>\r\n    </div>\r\n    \r\n    <br />\r\n    <ion-button routerLink=\"/profile-user-edit\" expand=\"block\" shape=\"round\"\r\n    >Edit profile</ion-button\r\n    >\r\n    <br>\r\n    <ion-button color=\"danger\" routerLink=\"/profile-user-delete\" expand=\"block\" shape=\"round\"\r\n    >Delete account</ion-button\r\n    >\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-user_profile-user_module_ts.js.map