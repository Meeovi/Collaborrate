"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCredit_memosInput");
let Credit_memosCreateWithoutProductsInput = class Credit_memosCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutProductsInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosCreateWithoutProductsInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Credit_memosCreateWithoutProductsInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutProductsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutProductsInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutProductsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCredit_memosInput_1.CustomersCreateNestedOneWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCredit_memosInput_1.CustomersCreateNestedOneWithoutCredit_memosInput)
], Credit_memosCreateWithoutProductsInput.prototype, "customers", void 0);
Credit_memosCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosCreateWithoutProductsInput);
exports.Credit_memosCreateWithoutProductsInput = Credit_memosCreateWithoutProductsInput;
