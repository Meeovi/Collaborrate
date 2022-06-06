"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesCreateInput = class Url_rewritesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewritesCreateInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCreateInput.prototype, "store", void 0);
Url_rewritesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesCreateInput", {
        isAbstract: true
    })
], Url_rewritesCreateInput);
exports.Url_rewritesCreateInput = Url_rewritesCreateInput;
