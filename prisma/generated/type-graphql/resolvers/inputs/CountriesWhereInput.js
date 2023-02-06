"use strict";
var CountriesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CountriesWhereInput = CountriesWhereInput_1 = class CountriesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountriesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountriesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountriesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CountriesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CountriesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CountriesWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CountriesWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CountriesWhereInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CountriesWhereInput.prototype, "trainings", void 0);
CountriesWhereInput = CountriesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesWhereInput", {
        isAbstract: true
    })
], CountriesWhereInput);
exports.CountriesWhereInput = CountriesWhereInput;
