"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-user-delete_profile-user-delete_module_ts"],{

/***/ 3954:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePageRoutingModule": () => (/* binding */ ProfileUserDeletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete.page */ 8857);




const routes = [
    {
        path: '',
        component: _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_0__.ProfileUserDeletePage
    }
];
let ProfileUserDeletePageRoutingModule = class ProfileUserDeletePageRoutingModule {
};
ProfileUserDeletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileUserDeletePageRoutingModule);



/***/ }),

/***/ 8925:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePageModule": () => (/* binding */ ProfileUserDeletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete-routing.module */ 3954);
/* harmony import */ var _profile_user_delete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-delete.page */ 8857);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProfileUserDeletePageModule = class ProfileUserDeletePageModule {
};
ProfileUserDeletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileUserDeletePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_profile_user_delete_page__WEBPACK_IMPORTED_MODULE_1__.ProfileUserDeletePage]
    })
], ProfileUserDeletePageModule);



/***/ }),

/***/ 8857:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileUserDeletePage": () => (/* binding */ ProfileUserDeletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_user_delete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-user-delete.page.html?ngResource */ 6211);
/* harmony import */ var _profile_user_delete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-user-delete.page.scss?ngResource */ 3740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let ProfileUserDeletePage = class ProfileUserDeletePage {
    constructor(router, http, activatedRoute, alertController, navCtrl) {
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.username = localStorage.getItem('username');
    }
    ngOnInit() { }
    deleteUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete Account',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            fetch('https://popcorntasters-api.herokuapp.com/users/' + this.username, {
                                method: 'DELETE',
                                headers: new Headers({
                                    // Encabezados
                                    'Content-Type': 'application/json',
                                }),
                                body: JSON.stringify({
                                    username: this.username,
                                }),
                            })
                                .then((response) => {
                                console.log(response);
                                console.log('Account eliminated...');
                                localStorage.removeItem('loggedin');
                                this.router.navigate(['/login']);
                                return response.json();
                            })
                                .then((r) => {
                                console.log(r);
                            })
                                .catch((e) => console.log(e));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfileUserDeletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ProfileUserDeletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-user-delete',
        template: _profile_user_delete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_user_delete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileUserDeletePage);



/***/ }),

/***/ 3740:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "#header {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n  padding-left: 40px;\n  text-align: center;\n}\n#header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #ffffff;\n  margin-bottom: 15%;\n}\n#header img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\nh2 {\n  text-align: center;\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXNlci1kZWxldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBS0E7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhKIiwiZmlsZSI6InByb2ZpbGUtdXNlci1kZWxldGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBcclxuICAgIGgxIHsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIH0gICBcclxufVxyXG5cclxuXHJcbmgyIHsgICAgXHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn0iXX0= */";

/***/ }),

/***/ 6211:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile-user-delete/profile-user-delete.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<app-header-profile title=\"Delete Account\"></app-header-profile>\r\n\r\n<ion-content>\r\n  <div id=\"header\">\r\n    <h1>Delete your Account</h1>\r\n    <img src=\"assets/logos/user-delete.png\" />    \r\n  </div>\r\n\r\n <br><br>\r\n <h2>Final Confirmation:</h2>\r\n  <ion-button\r\n    color=\"danger\"\r\n    expand=\"block\"\r\n    shape=\"round\"\r\n    class=\"ion-margin\"\r\n    (click)=\"deleteUser()\"\r\n    >Delete</ion-button\r\n  >\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-user-delete_profile-user-delete_module_ts.js.map