"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-user-edit_profile-user-edit_module_ts"],{

/***/ 557:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile-user-edit/profile-user-edit-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserEditPageRoutingModule": () => (/* binding */ ProfileUserEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_user_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-edit.page */ 8643);




const routes = [
    {
        path: '',
        component: _profile_user_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUserEditPage
    }
];
let ProfileUserEditPageRoutingModule = class ProfileUserEditPageRoutingModule {
};
ProfileUserEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUserEditPageRoutingModule);



/***/ }),

/***/ 9204:
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile-user-edit/profile-user-edit.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserEditPageModule": () => (/* binding */ ProfileUserEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-edit-routing.module */ 557);
/* harmony import */ var _profile_user_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-edit.page */ 8643);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProfileUserEditPageModule = class ProfileUserEditPageModule {
};
ProfileUserEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUserEditPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_profile_user_edit_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUserEditPage]
    })
], ProfileUserEditPageModule);



/***/ }),

/***/ 8643:
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile-user-edit/profile-user-edit.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserEditPage": () => (/* binding */ ProfileUserEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_user_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-edit.page.html?ngResource */ 9190);
/* harmony import */ var _profile_user_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-edit.page.scss?ngResource */ 5262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);







let ProfileUserEditPage = class ProfileUserEditPage {
    constructor(router, http, activatedRoute) {
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.old_username = localStorage.getItem('username');
    }
    ngOnInit() { }
    editUser() {
        const usernameA = this.old_username;
        const username = this.username;
        const name = this.name;
        const password = this.password;
        fetch('https://popcorntasters-api.herokuapp.com/users/' + usernameA, {
            method: 'PUT',
            headers: new Headers({
                // Encabezados
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username: username,
                name: name,
                password: password,
            }),
        })
            .then((response) => {
            console.log(response);
            if (response.redirected == true) {
                window.location.replace(response.url);
            }
            console.log('Account edited...');
            localStorage.setItem('username', this.username);
            alert("Account edited...");
            this.router.navigate(['/menu/main']);
            return response.json();
        })
            .then((r) => {
            console.log(r);
        })
            .catch((e) => console.log(e));
    }
};
ProfileUserEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ProfileUserEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile-user-edit',
        template: _profile_user_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_user_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileUserEditPage);



/***/ }),

/***/ 5262:
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile-user-edit/profile-user-edit.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "#header {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n#header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n#header img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n#header h2 {\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXNlci1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRFIiLCJmaWxlIjoicHJvZmlsZS11c2VyLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBcclxuICAgIGgxIHsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIgeyAgICAgICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 9190:
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile-user-edit/profile-user-edit.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<app-header-profile title=\"Edit Profile\"></app-header-profile>\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <h1>Edit your Profile</h1>\r\n    <img src=\"assets/logos/user-edit.png\" />\r\n    <h2>Enter your new data:</h2>\r\n  </div>\r\n  <br>\r\n  <ion-card class=\"ion-margin\">\r\n    <br />\r\n    <ion-item>\r\n      <ion-input\r\n      [(ngModel)]=\"username\"\r\n      type=\"text\"\r\n      required\r\n      placeholder=\"Enter your new username\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <br />\r\n    <ion-item>\r\n      <ion-input\r\n      [(ngModel)]=\"name\"\r\n      type=\"text\"\r\n      required\r\n      placeholder=\"Enter your new name\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <br />\r\n    <ion-item>\r\n      <ion-input\r\n      [(ngModel)]=\"password\"\r\n      type=\"password\"\r\n      placeholder=\"Enter your new password\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <br />\r\n    \r\n    <div id=\"edit\">\r\n      <ion-button [disabled]=\"!username ||!password ||!name\" expand=\"block\" shape=\"round\" (click)=\"editUser()\"\r\n      >Finish Edit</ion-button\r\n      >\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-user-edit_profile-user-edit_module_ts.js.map