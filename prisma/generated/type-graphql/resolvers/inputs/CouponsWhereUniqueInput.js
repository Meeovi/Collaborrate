"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let CouponsWhereUniqueInput = class CouponsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsWhereUniqueInput.prototype, "id", void 0);
CouponsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsWhereUniqueInput", {
        isAbstract: true
    })
], CouponsWhereUniqueInput);
exports.CouponsWhereUniqueInput = CouponsWhereUniqueInput;
