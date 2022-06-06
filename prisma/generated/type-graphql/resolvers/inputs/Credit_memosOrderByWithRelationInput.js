"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosOrderByWithRelationInput = class Credit_memosOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], Credit_memosOrderByWithRelationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], Credit_memosOrderByWithRelationInput.prototype, "products", void 0);
Credit_memosOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosOrderByWithRelationInput", {
        isAbstract: true
    })
], Credit_memosOrderByWithRelationInput);
exports.Credit_memosOrderByWithRelationInput = Credit_memosOrderByWithRelationInput;
