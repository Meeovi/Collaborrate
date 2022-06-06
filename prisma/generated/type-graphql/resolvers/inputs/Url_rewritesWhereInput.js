"use strict";
var Url_rewritesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Url_rewritesWhereInput = Url_rewritesWhereInput_1 = class Url_rewritesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Url_rewritesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Url_rewritesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Url_rewritesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Url_rewritesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Url_rewritesWhereInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Url_rewritesWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Url_rewritesWhereInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Url_rewritesWhereInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Url_rewritesWhereInput.prototype, "store", void 0);
Url_rewritesWhereInput = Url_rewritesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesWhereInput", {
        isAbstract: true
    })
], Url_rewritesWhereInput);
exports.Url_rewritesWhereInput = Url_rewritesWhereInput;
