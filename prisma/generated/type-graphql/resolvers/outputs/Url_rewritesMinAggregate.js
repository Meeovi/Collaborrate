"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesMinAggregate = class Url_rewritesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinAggregate.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewritesMinAggregate.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinAggregate.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinAggregate.prototype, "store", void 0);
Url_rewritesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewritesMinAggregate", {
        isAbstract: true
    })
], Url_rewritesMinAggregate);
exports.Url_rewritesMinAggregate = Url_rewritesMinAggregate;
