"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutReturnsInput_1 = require("../inputs/CustomersCreateNestedOneWithoutReturnsInput");
let ReturnsCreateWithoutProductsInput = class ReturnsCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReturnsCreateWithoutProductsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutProductsInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutProductsInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutReturnsInput_1.CustomersCreateNestedOneWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutReturnsInput_1.CustomersCreateNestedOneWithoutReturnsInput)
], ReturnsCreateWithoutProductsInput.prototype, "customers", void 0);
ReturnsCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsCreateWithoutProductsInput);
exports.ReturnsCreateWithoutProductsInput = ReturnsCreateWithoutProductsInput;
