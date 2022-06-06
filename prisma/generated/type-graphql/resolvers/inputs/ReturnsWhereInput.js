"use strict";
var ReturnsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductsRelationFilter_1 = require("../inputs/ProductsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ReturnsWhereInput = ReturnsWhereInput_1 = class ReturnsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ReturnsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ReturnsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReturnsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReturnsWhereInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReturnsWhereInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ReturnsWhereInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ReturnsWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], ReturnsWhereInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsRelationFilter_1.ProductsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsRelationFilter_1.ProductsRelationFilter)
], ReturnsWhereInput.prototype, "products", void 0);
ReturnsWhereInput = ReturnsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsWhereInput", {
        isAbstract: true
    })
], ReturnsWhereInput);
exports.ReturnsWhereInput = ReturnsWhereInput;
