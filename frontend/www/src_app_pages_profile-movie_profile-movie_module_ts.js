"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-movie_profile-movie_module_ts"],{

/***/ 2578:
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile-movie/profile-movie-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMoviePageRoutingModule": () => (/* binding */ ProfileMoviePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_movie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-movie.page */ 4325);




const routes = [
    {
        path: '',
        component: _profile_movie_page__WEBPACK_IMPORTED_MODULE_0__.ProfileMoviePage
    }
];
let ProfileMoviePageRoutingModule = class ProfileMoviePageRoutingModule {
};
ProfileMoviePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileMoviePageRoutingModule);



/***/ }),

/***/ 9754:
/*!*************************************************************!*\
  !*** ./src/app/pages/profile-movie/profile-movie.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMoviePageModule": () => (/* binding */ ProfileMoviePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_movie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-movie-routing.module */ 2578);
/* harmony import */ var _profile_movie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-movie.page */ 4325);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProfileMoviePageModule = class ProfileMoviePageModule {
};
ProfileMoviePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_movie_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileMoviePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_profile_movie_page__WEBPACK_IMPORTED_MODULE_1__.ProfileMoviePage]
    })
], ProfileMoviePageModule);



/***/ }),

/***/ 4325:
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-movie/profile-movie.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileMoviePage": () => (/* binding */ ProfileMoviePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_movie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-movie.page.html?ngResource */ 8260);
/* harmony import */ var _profile_movie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-movie.page.scss?ngResource */ 5668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ProfileMoviePage = class ProfileMoviePage {
    //instantiating
    constructor(http, activatedRoute, alertController, navCtrl) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.username = localStorage.getItem('username');
        this.comment = [];
        this.ratinga = [];
    }
    ngOnInit() {
        this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
        this.http
            .get('https://popcorntasters-api.herokuapp.com/movies/details/' +
            this.profileId)
            .subscribe((res) => {
            this.movie_id = res.details.id;
            this.movie_title = res.details.title;
            var sum = 0;
            res.ratings.forEach((element) => {
                sum += element.rating;
            });
            this.general_rating = sum / res.ratings.length;
            this.general_rating = Math.round(this.general_rating * 10) / 10;
            this.movie = res.details;
            this.comment = res.comments;
            this.ratinga = res.ratings;
            console.log(res);
        });
    }
    addComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const description = this.description;
            const alert = yield this.alertController.create({
                header: 'Comment added',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            fetch('https://popcorntasters-api.herokuapp.com/movies/comment/' +
                                this.movie_id, {
                                method: 'POST',
                                headers: new Headers({
                                    // Encabezados
                                    'Content-Type': 'application/json',
                                }),
                                body: JSON.stringify({
                                    username: this.username,
                                    movie_id: this.movie_id,
                                    description: description,
                                }),
                            })
                                .then((response) => {
                                console.log(response);
                                if (response.redirected == true) {
                                    window.location.replace(response.url);
                                }
                                console.log('New comment created...');
                                window.location.reload();
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
    addRating() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const rating = this.rating;
            const alert = yield this.alertController.create({
                header: 'Rating added',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            fetch('https://popcorntasters-api.herokuapp.com/users/' +
                                this.username +
                                '/ratings', {
                                method: 'POST',
                                headers: new Headers({
                                    // Encabezados
                                    'Content-Type': 'application/json',
                                }),
                                body: JSON.stringify({
                                    username: this.username,
                                    id: this.movie_id,
                                    rating: rating,
                                }),
                            })
                                .then((response) => {
                                console.log(response);
                                if (response.redirected == true) {
                                    window.location.replace(response.url);
                                }
                                console.log('New rating added...');
                                window.location.reload();
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
    addFav() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const rating = this.rating;
            const alert = yield this.alertController.create({
                header: 'Movie Added to Favorites',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            fetch('https://popcorntasters-api.herokuapp.com/users/' +
                                this.username +
                                '/movies', {
                                method: 'PUT',
                                headers: new Headers({
                                    // Encabezados
                                    'Content-Type': 'application/json',
                                }),
                                body: JSON.stringify({
                                    username: this.username,
                                    id: this.movie_id,
                                    title: this.movie_title,
                                }),
                            })
                                .then((response) => {
                                console.log('Movie added to favorites...');
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
ProfileMoviePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ProfileMoviePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-movie',
        template: _profile_movie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_movie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileMoviePage);



/***/ }),

/***/ 5668:
/*!************************************************************************!*\
  !*** ./src/app/pages/profile-movie/profile-movie.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "h2 {\n  color: white;\n  text-align: start;\n}\n\n.list {\n  background: black;\n  padding: 2px;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtbW92aWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUtbW92aWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8260:
/*!************************************************************************!*\
  !*** ./src/app/pages/profile-movie/profile-movie.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<app-header-go-main title=\"Movie Profile\"></app-header-go-main>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n        <!--If movie is true (exists), do the rest of the code-->\r\n        <div *ngIf=\"movie\">\r\n          <ion-card>\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <ion-card-title>\r\n                {{movie.title}} ({{movie.year}})\r\n              </ion-card-title>\r\n              <br />\r\n              <img src=\"{{movie.image}}\" alt=\"\" />\r\n              <br />\r\n\r\n              <p>Genre: {{movie.genre}}</p>\r\n              <p>General Rating: {{movie.rating}}</p>\r\n              <p>\r\n                Take a look to the trailer,\r\n                <a href=\"{{movie.trailer}}\" target=\"_blank\">here</a>\r\n              </p>\r\n\r\n              <br />\r\n              <div>\r\n                <h2>Description:</h2>\r\n                <p>{{movie.description}}</p>\r\n                <br />\r\n              </div>\r\n              <div>\r\n                <ion-button\r\n                  color=\"warning\"\r\n                  (click)=\"addFav()\"\r\n                  expand=\"block\"\r\n                  shape=\"round\"\r\n                  >☆ Add to favorites</ion-button\r\n                >\r\n              </div>\r\n\r\n              <br />\r\n              <ion-list class=\"list\">\r\n                <h2>Comments:</h2>\r\n                <ion-item *ngFor=\"let com of comment\">\r\n                  <ion-label slot=\"start\">User: {{com.username}}</ion-label>\r\n                  <p>({{com.description}}).</p>\r\n                </ion-item>\r\n              </ion-list>\r\n              <br />\r\n              <ion-list class=\"list\">\r\n                <h2>General rating: {{general_rating}}</h2>\r\n                <ion-item *ngFor=\"let ra of ratinga\">\r\n                  <ion-label slot=\"start\">User: {{ra.username}}</ion-label>\r\n                  <p>{{ra.rating}}</p>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n        <div>\r\n          <h4 class=\"ion-text-center\">Comment section:</h4>\r\n          <ion-item>\r\n            <ion-input\r\n              [(ngModel)]=\"description\"\r\n              type=\"text\"\r\n              placeholder=\"Add a concise comment\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <br />\r\n          <ion-button (click)=\"addComment()\" expand=\"block\" shape=\"round\"\r\n            >Add comment</ion-button\r\n          >\r\n          <br />\r\n        </div>\r\n\r\n        <div>\r\n          <h4 class=\"ion-text-center\">Rating section:</h4>\r\n          <ion-item>\r\n            <ion-input\r\n              [(ngModel)]=\"rating\"\r\n              type=\"number\"\r\n              placeholder=\"Rating from 1-10\"\r\n              numbers-only\r\n              max=\"10\"\r\n              min=\"0\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <br />\r\n          <ion-button (click)=\"addRating()\" expand=\"block\" shape=\"round\"\r\n            >Add rating</ion-button\r\n          >\r\n          <br />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-movie_profile-movie_module_ts.js.map