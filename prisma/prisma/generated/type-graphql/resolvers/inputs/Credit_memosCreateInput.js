"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCredit_memosInput");
const ProductsCreateNestedOneWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateNestedOneWithoutCredit_memosInput");
let Credit_memosCreateInput = class Credit_memosCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosCreateInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Credit_memosCreateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCredit_memosInput_1.CustomersCreateNestedOneWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCredit_memosInput_1.CustomersCreateNestedOneWithoutCredit_memosInput)
], Credit_memosCreateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutCredit_memosInput_1.ProductsCreateNestedOneWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutCredit_memosInput_1.ProductsCreateNestedOneWithoutCredit_memosInput)
], Credit_memosCreateInput.prototype, "products", void 0);
Credit_memosCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateInput", {
        isAbstract: true
    })
], Credit_memosCreateInput);
exports.Credit_memosCreateInput = Credit_memosCreateInput;
