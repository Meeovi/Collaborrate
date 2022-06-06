"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateNestedManyWithoutProducts_couponsToproductsInput");
const Credit_memosCreateNestedManyWithoutProductsInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutProductsInput");
const OrdersCreateNestedManyWithoutProductsInput_1 = require("../inputs/OrdersCreateNestedManyWithoutProductsInput");
const QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutProducts_productsToquotesInput");
const RatingCreateNestedManyWithoutProductsInput_1 = require("../inputs/RatingCreateNestedManyWithoutProductsInput");
const ReturnsCreateNestedManyWithoutProductsInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutProductsInput");
const Tax_rateCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_rateCreateNestedManyWithoutProductsInput");
const Tax_ruleCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateNestedManyWithoutProductsInput");
let ProductsCreateWithoutProduct_attributeInput = class ProductsCreateWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutProduct_attributeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutProduct_attributeInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCreateWithoutProduct_attributeInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductsCreateWithoutProduct_attributeInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutProduct_attributeInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutProduct_attributeInput.prototype, "tax_rule", void 0);
ProductsCreateWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateWithoutProduct_attributeInput", {
        isAbstract: true
    })
], ProductsCreateWithoutProduct_attributeInput);
exports.ProductsCreateWithoutProduct_attributeInput = ProductsCreateWithoutProduct_attributeInput;
