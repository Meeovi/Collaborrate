"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesCreateManyInput = class Url_rewritesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateManyInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewritesCreateManyInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateManyInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateManyInput.prototype, "store", void 0);
Url_rewritesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesCreateManyInput", {
        isAbstract: true
    })
], Url_rewritesCreateManyInput);
exports.Url_rewritesCreateManyInput = Url_rewritesCreateManyInput;
