"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ProductsCreateNestedOneWithoutReturnsInput_1 = require("../inputs/ProductsCreateNestedOneWithoutReturnsInput");
let ReturnsCreateWithoutCustomersInput = class ReturnsCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsCreateWithoutCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReturnsCreateWithoutCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutCustomersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutCustomersInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateWithoutCustomersInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutReturnsInput_1.ProductsCreateNestedOneWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutReturnsInput_1.ProductsCreateNestedOneWithoutReturnsInput)
], ReturnsCreateWithoutCustomersInput.prototype, "products", void 0);
ReturnsCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsCreateWithoutCustomersInput);
exports.ReturnsCreateWithoutCustomersInput = ReturnsCreateWithoutCustomersInput;
