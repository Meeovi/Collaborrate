"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let AnalyticsSumAggregate = class AnalyticsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AnalyticsSumAggregate.prototype, "id", void 0);
AnalyticsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AnalyticsSumAggregate", {
        isAbstract: true
    })
], AnalyticsSumAggregate);
exports.AnalyticsSumAggregate = AnalyticsSumAggregate;
