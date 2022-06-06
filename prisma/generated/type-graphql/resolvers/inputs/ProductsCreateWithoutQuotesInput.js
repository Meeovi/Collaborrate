"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateNestedManyWithoutProducts_couponsToproductsInput");
const Credit_memosCreateNestedManyWithoutProductsInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutProductsInput");
const OrdersCreateNestedManyWithoutProductsInput_1 = require("../inputs/OrdersCreateNestedManyWithoutProductsInput");
const Product_attributeCreateNestedManyWithoutProductsInput_1 = require("../inputs/Product_attributeCreateNestedManyWithoutProductsInput");
const RatingCreateNestedManyWithoutProductsInput_1 = require("../inputs/RatingCreateNestedManyWithoutProductsInput");
const ReturnsCreateNestedManyWithoutProductsInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutProductsInput");
const Tax_rateCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_rateCreateNestedManyWithoutProductsInput");
const Tax_ruleCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateNestedManyWithoutProductsInput");
let ProductsCreateWithoutQuotesInput = class ProductsCreateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutQuotesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutQuotesInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCreateWithoutQuotesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductsCreateWithoutQuotesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutQuotesInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutQuotesInput.prototype, "tax_rule", void 0);
ProductsCreateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateWithoutQuotesInput", {
        isAbstract: true
    })
], ProductsCreateWithoutQuotesInput);
exports.ProductsCreateWithoutQuotesInput = ProductsCreateWithoutQuotesInput;
