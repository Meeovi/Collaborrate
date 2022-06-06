"use strict";
var ThemesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ThemesScalarWhereInput = ThemesScalarWhereInput_1 = class ThemesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ThemesScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThemesScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThemesScalarWhereInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThemesScalarWhereInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThemesScalarWhereInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ThemesScalarWhereInput.prototype, "website_id", void 0);
ThemesScalarWhereInput = ThemesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesScalarWhereInput", {
        isAbstract: true
    })
], ThemesScalarWhereInput);
exports.ThemesScalarWhereInput = ThemesScalarWhereInput;
