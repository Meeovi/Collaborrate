"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesMaxAggregate = class Url_rewritesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMaxAggregate.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMaxAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewritesMaxAggregate.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMaxAggregate.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMaxAggregate.prototype, "store", void 0);
Url_rewritesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewritesMaxAggregate", {
        isAbstract: true
    })
], Url_rewritesMaxAggregate);
exports.Url_rewritesMaxAggregate = Url_rewritesMaxAggregate;
