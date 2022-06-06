"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableBigIntFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let NullableBigIntFieldUpdateOperationsInput = class NullableBigIntFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NullableBigIntFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NullableBigIntFieldUpdateOperationsInput.prototype, "increment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NullableBigIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NullableBigIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NullableBigIntFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableBigIntFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableBigIntFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableBigIntFieldUpdateOperationsInput);
exports.NullableBigIntFieldUpdateOperationsInput = NullableBigIntFieldUpdateOperationsInput;
