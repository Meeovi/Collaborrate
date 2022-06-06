"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutReturnsInput_1 = require("../inputs/CustomersCreateNestedOneWithoutReturnsInput");
const ProductsCreateNestedOneWithoutReturnsInput_1 = require("../inputs/ProductsCreateNestedOneWithoutReturnsInput");
let ReturnsCreateInput = class ReturnsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReturnsCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutReturnsInput_1.CustomersCreateNestedOneWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutReturnsInput_1.CustomersCreateNestedOneWithoutReturnsInput)
], ReturnsCreateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutReturnsInput_1.ProductsCreateNestedOneWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutReturnsInput_1.ProductsCreateNestedOneWithoutReturnsInput)
], ReturnsCreateInput.prototype, "products", void 0);
ReturnsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateInput", {
        isAbstract: true
    })
], ReturnsCreateInput);
exports.ReturnsCreateInput = ReturnsCreateInput;
