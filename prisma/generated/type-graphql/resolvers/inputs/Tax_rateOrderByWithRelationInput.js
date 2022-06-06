"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateOrderByWithRelationInput = class Tax_rateOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], Tax_rateOrderByWithRelationInput.prototype, "products", void 0);
Tax_rateOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateOrderByWithRelationInput", {
        isAbstract: true
    })
], Tax_rateOrderByWithRelationInput);
exports.Tax_rateOrderByWithRelationInput = Tax_rateOrderByWithRelationInput;
