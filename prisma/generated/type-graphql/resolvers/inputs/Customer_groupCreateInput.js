"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput");
let Customer_groupCreateInput = class Customer_groupCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_groupCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCreateInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput)
], Customer_groupCreateInput.prototype, "customers", void 0);
Customer_groupCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateInput", {
        isAbstract: true
    })
], Customer_groupCreateInput);
exports.Customer_groupCreateInput = Customer_groupCreateInput;
