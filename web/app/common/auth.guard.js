"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var AuthGuard = (function () {
    function AuthGuard(router, jwtHelper) {
        if (jwtHelper === void 0) { jwtHelper = new angular2_jwt_1.JwtHelper(); }
        this.router = router;
        this.jwtHelper = jwtHelper;
    }
    AuthGuard.prototype.canActivate = function () {
        var token = localStorage.getItem('id_token');
        // console.log(
        //     this.jwtHelper.decodeToken(token),
        //     this.jwtHelper.getTokenExpirationDate(token),
        //     this.jwtHelper.isTokenExpired(token)
        // );
        if (angular2_jwt_1.tokenNotExpired()) {
            return true;
        }
        this.router.navigate(['backoffice/login']);
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, angular2_jwt_1.JwtHelper])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map