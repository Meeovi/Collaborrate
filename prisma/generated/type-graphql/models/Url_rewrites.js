"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewrites = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewrites = class Url_rewrites {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewrites.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewrites.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewrites.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewrites.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewrites.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewrites.prototype, "store", void 0);
Url_rewrites = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewrites", {
        isAbstract: true
    })
], Url_rewrites);
exports.Url_rewrites = Url_rewrites;
