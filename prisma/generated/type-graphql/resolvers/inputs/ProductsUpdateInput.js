"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CouponsUpdateManyWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsUpdateManyWithoutProducts_couponsToproductsInput");
const Credit_memosUpdateManyWithoutProductsInput_1 = require("../inputs/Credit_memosUpdateManyWithoutProductsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrdersUpdateManyWithoutProductsInput_1 = require("../inputs/OrdersUpdateManyWithoutProductsInput");
const Product_attributeUpdateManyWithoutProductsInput_1 = require("../inputs/Product_attributeUpdateManyWithoutProductsInput");
const QuotesUpdateManyWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpdateManyWithoutProducts_productsToquotesInput");
const RatingUpdateManyWithoutProductsInput_1 = require("../inputs/RatingUpdateManyWithoutProductsInput");
const ReturnsUpdateManyWithoutProductsInput_1 = require("../inputs/ReturnsUpdateManyWithoutProductsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const Tax_rateUpdateManyWithoutProductsInput_1 = require("../inputs/Tax_rateUpdateManyWithoutProductsInput");
const Tax_ruleUpdateManyWithoutProductsInput_1 = require("../inputs/Tax_ruleUpdateManyWithoutProductsInput");
let ProductsUpdateInput = class ProductsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductsUpdateInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateManyWithoutProducts_couponsToproductsInput_1.CouponsUpdateManyWithoutProducts_couponsToproductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsUpdateManyWithoutProducts_couponsToproductsInput_1.CouponsUpdateManyWithoutProducts_couponsToproductsInput)
], ProductsUpdateInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutProductsInput_1.Credit_memosUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyWithoutProductsInput_1.Credit_memosUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateManyWithoutProductsInput_1.OrdersUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateManyWithoutProductsInput_1.OrdersUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateManyWithoutProductsInput_1.Product_attributeUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateManyWithoutProductsInput_1.Product_attributeUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyWithoutProducts_productsToquotesInput_1.QuotesUpdateManyWithoutProducts_productsToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyWithoutProducts_productsToquotesInput_1.QuotesUpdateManyWithoutProducts_productsToquotesInput)
], ProductsUpdateInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateManyWithoutProductsInput_1.RatingUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpdateManyWithoutProductsInput_1.RatingUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutProductsInput_1.ReturnsUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyWithoutProductsInput_1.ReturnsUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateManyWithoutProductsInput_1.Tax_rateUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateManyWithoutProductsInput_1.Tax_rateUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateManyWithoutProductsInput_1.Tax_ruleUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateManyWithoutProductsInput_1.Tax_ruleUpdateManyWithoutProductsInput)
], ProductsUpdateInput.prototype, "tax_rule", void 0);
ProductsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpdateInput", {
        isAbstract: true
    })
], ProductsUpdateInput);
exports.ProductsUpdateInput = ProductsUpdateInput;
