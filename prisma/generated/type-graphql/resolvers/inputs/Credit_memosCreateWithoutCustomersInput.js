"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ProductsCreateNestedOneWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateNestedOneWithoutCredit_memosInput");
let Credit_memosCreateWithoutCustomersInput = class Credit_memosCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutCustomersInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosCreateWithoutCustomersInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Credit_memosCreateWithoutCustomersInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutCustomersInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutCustomersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutCustomersInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateWithoutCustomersInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosCreateWithoutCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutCredit_memosInput_1.ProductsCreateNestedOneWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutCredit_memosInput_1.ProductsCreateNestedOneWithoutCredit_memosInput)
], Credit_memosCreateWithoutCustomersInput.prototype, "products", void 0);
Credit_memosCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosCreateWithoutCustomersInput);
exports.Credit_memosCreateWithoutCustomersInput = Credit_memosCreateWithoutCustomersInput;
