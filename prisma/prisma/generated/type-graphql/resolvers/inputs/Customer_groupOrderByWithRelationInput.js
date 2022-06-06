"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupOrderByWithRelationInput = class Customer_groupOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], Customer_groupOrderByWithRelationInput.prototype, "customers", void 0);
Customer_groupOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupOrderByWithRelationInput", {
        isAbstract: true
    })
], Customer_groupOrderByWithRelationInput);
exports.Customer_groupOrderByWithRelationInput = Customer_groupOrderByWithRelationInput;
