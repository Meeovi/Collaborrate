"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Shop_settingsWhereUniqueInput = class Shop_settingsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Shop_settingsWhereUniqueInput.prototype, "id", void 0);
Shop_settingsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Shop_settingsWhereUniqueInput", {
        isAbstract: true
    })
], Shop_settingsWhereUniqueInput);
exports.Shop_settingsWhereUniqueInput = Shop_settingsWhereUniqueInput;
