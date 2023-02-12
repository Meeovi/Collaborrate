"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CurrenciesWhereInput_1 = require("../inputs/CurrenciesWhereInput");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CurrenciesWhereUniqueInput = class CurrenciesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CurrenciesWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1.CurrenciesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1.CurrenciesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesWhereInput_1.CurrenciesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CurrenciesWhereUniqueInput.prototype, "useStandard", void 0);
CurrenciesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesWhereUniqueInput", {
        isAbstract: true
    })
], CurrenciesWhereUniqueInput);
exports.CurrenciesWhereUniqueInput = CurrenciesWhereUniqueInput;
