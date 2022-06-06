"use strict";
var ProductsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const CouponsListRelationFilter_1 = require("../inputs/CouponsListRelationFilter");
const Credit_memosListRelationFilter_1 = require("../inputs/Credit_memosListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const OrdersListRelationFilter_1 = require("../inputs/OrdersListRelationFilter");
const Product_attributeListRelationFilter_1 = require("../inputs/Product_attributeListRelationFilter");
const QuotesListRelationFilter_1 = require("../inputs/QuotesListRelationFilter");
const RatingListRelationFilter_1 = require("../inputs/RatingListRelationFilter");
const ReturnsListRelationFilter_1 = require("../inputs/ReturnsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const Tax_rateListRelationFilter_1 = require("../inputs/Tax_rateListRelationFilter");
const Tax_ruleListRelationFilter_1 = require("../inputs/Tax_ruleListRelationFilter");
let ProductsWhereInput = ProductsWhereInput_1 = class ProductsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ProductsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], ProductsWhereInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ProductsWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProductsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductsWhereInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsListRelationFilter_1.CouponsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsListRelationFilter_1.CouponsListRelationFilter)
], ProductsWhereInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosListRelationFilter_1.Credit_memosListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosListRelationFilter_1.Credit_memosListRelationFilter)
], ProductsWhereInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersListRelationFilter_1.OrdersListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersListRelationFilter_1.OrdersListRelationFilter)
], ProductsWhereInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeListRelationFilter_1.Product_attributeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeListRelationFilter_1.Product_attributeListRelationFilter)
], ProductsWhereInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesListRelationFilter_1.QuotesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesListRelationFilter_1.QuotesListRelationFilter)
], ProductsWhereInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingListRelationFilter_1.RatingListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingListRelationFilter_1.RatingListRelationFilter)
], ProductsWhereInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsListRelationFilter_1.ReturnsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsListRelationFilter_1.ReturnsListRelationFilter)
], ProductsWhereInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateListRelationFilter_1.Tax_rateListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateListRelationFilter_1.Tax_rateListRelationFilter)
], ProductsWhereInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleListRelationFilter_1.Tax_ruleListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleListRelationFilter_1.Tax_ruleListRelationFilter)
], ProductsWhereInput.prototype, "tax_rule", void 0);
ProductsWhereInput = ProductsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsWhereInput", {
        isAbstract: true
    })
], ProductsWhereInput);
exports.ProductsWhereInput = ProductsWhereInput;
