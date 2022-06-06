"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ReturnsCreateManyProductsInput = class ReturnsCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReturnsCreateManyProductsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateManyProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateManyProductsInput.prototype, "validity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsCreateManyProductsInput.prototype, "return_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReturnsCreateManyProductsInput.prototype, "cust_id", void 0);
ReturnsCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateManyProductsInput", {
        isAbstract: true
    })
], ReturnsCreateManyProductsInput);
exports.ReturnsCreateManyProductsInput = ReturnsCreateManyProductsInput;
