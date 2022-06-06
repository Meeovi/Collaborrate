"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsOrderByWithRelationInput = class ReturnsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], ReturnsOrderByWithRelationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], ReturnsOrderByWithRelationInput.prototype, "products", void 0);
ReturnsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsOrderByWithRelationInput", {
        isAbstract: true
    })
], ReturnsOrderByWithRelationInput);
exports.ReturnsOrderByWithRelationInput = ReturnsOrderByWithRelationInput;
