"use strict";
var CurrenciesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CurrenciesWhereInput = CurrenciesWhereInput_1 = class CurrenciesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], CurrenciesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CurrenciesWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereInput.prototype, "useStandard", void 0);
CurrenciesWhereInput = CurrenciesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesWhereInput", {
        isAbstract: true
    })
], CurrenciesWhereInput);
exports.CurrenciesWhereInput = CurrenciesWhereInput;
