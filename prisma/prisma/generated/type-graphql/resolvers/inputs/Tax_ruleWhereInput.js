"use strict";
var Tax_ruleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductsRelationFilter_1 = require("../inputs/ProductsRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Tax_ruleWhereInput = Tax_ruleWhereInput_1 = class Tax_ruleWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Tax_ruleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Tax_ruleWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Tax_ruleWhereInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Tax_ruleWhereInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsRelationFilter_1.ProductsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsRelationFilter_1.ProductsRelationFilter)
], Tax_ruleWhereInput.prototype, "products", void 0);
Tax_ruleWhereInput = Tax_ruleWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleWhereInput", {
        isAbstract: true
    })
], Tax_ruleWhereInput);
exports.Tax_ruleWhereInput = Tax_ruleWhereInput;
