"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let AnalyticsWhereUniqueInput = class AnalyticsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AnalyticsWhereUniqueInput.prototype, "id", void 0);
AnalyticsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AnalyticsWhereUniqueInput", {
        isAbstract: true
    })
], AnalyticsWhereUniqueInput);
exports.AnalyticsWhereUniqueInput = AnalyticsWhereUniqueInput;
