"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Sales_settingsWhereUniqueInput = class Sales_settingsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Sales_settingsWhereUniqueInput.prototype, "id", void 0);
Sales_settingsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Sales_settingsWhereUniqueInput", {
        isAbstract: true
    })
], Sales_settingsWhereUniqueInput);
exports.Sales_settingsWhereUniqueInput = Sales_settingsWhereUniqueInput;
