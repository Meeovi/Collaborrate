"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Credit_memosCreateManyProductsInput = class Credit_memosCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateManyProductsInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosCreateManyProductsInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Credit_memosCreateManyProductsInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateManyProductsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateManyProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateManyProductsInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosCreateManyProductsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosCreateManyProductsInput.prototype, "cust_id", void 0);
Credit_memosCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateManyProductsInput", {
        isAbstract: true
    })
], Credit_memosCreateManyProductsInput);
exports.Credit_memosCreateManyProductsInput = Credit_memosCreateManyProductsInput;
