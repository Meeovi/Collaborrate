"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByRelationAggregateInput_1 = require("../inputs/CouponsOrderByRelationAggregateInput");
const Credit_memosOrderByRelationAggregateInput_1 = require("../inputs/Credit_memosOrderByRelationAggregateInput");
const OrdersOrderByRelationAggregateInput_1 = require("../inputs/OrdersOrderByRelationAggregateInput");
const Product_attributeOrderByRelationAggregateInput_1 = require("../inputs/Product_attributeOrderByRelationAggregateInput");
const QuotesOrderByRelationAggregateInput_1 = require("../inputs/QuotesOrderByRelationAggregateInput");
const RatingOrderByRelationAggregateInput_1 = require("../inputs/RatingOrderByRelationAggregateInput");
const ReturnsOrderByRelationAggregateInput_1 = require("../inputs/ReturnsOrderByRelationAggregateInput");
const Tax_rateOrderByRelationAggregateInput_1 = require("../inputs/Tax_rateOrderByRelationAggregateInput");
const Tax_ruleOrderByRelationAggregateInput_1 = require("../inputs/Tax_ruleOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsOrderByWithRelationInput = class ProductsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsOrderByWithRelationInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsOrderByRelationAggregateInput_1.CouponsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsOrderByRelationAggregateInput_1.CouponsOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosOrderByRelationAggregateInput_1.Credit_memosOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosOrderByRelationAggregateInput_1.Credit_memosOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput_1.OrdersOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersOrderByRelationAggregateInput_1.OrdersOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeOrderByRelationAggregateInput_1.Product_attributeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeOrderByRelationAggregateInput_1.Product_attributeOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingOrderByRelationAggregateInput_1.RatingOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingOrderByRelationAggregateInput_1.RatingOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsOrderByRelationAggregateInput_1.ReturnsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsOrderByRelationAggregateInput_1.ReturnsOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateOrderByRelationAggregateInput_1.Tax_rateOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateOrderByRelationAggregateInput_1.Tax_rateOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleOrderByRelationAggregateInput_1.Tax_ruleOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleOrderByRelationAggregateInput_1.Tax_ruleOrderByRelationAggregateInput)
], ProductsOrderByWithRelationInput.prototype, "tax_rule", void 0);
ProductsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductsOrderByWithRelationInput);
exports.ProductsOrderByWithRelationInput = ProductsOrderByWithRelationInput;
