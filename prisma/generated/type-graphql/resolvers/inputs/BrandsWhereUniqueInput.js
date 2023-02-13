"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let BrandsWhereUniqueInput = class BrandsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BrandsWhereUniqueInput.prototype, "id", void 0);
BrandsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandsWhereUniqueInput", {
        isAbstract: true
    })
], BrandsWhereUniqueInput);
exports.BrandsWhereUniqueInput = BrandsWhereUniqueInput;
