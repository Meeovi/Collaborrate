"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let IntegrationsSumAggregate = class IntegrationsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], IntegrationsSumAggregate.prototype, "id", void 0);
IntegrationsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("IntegrationsSumAggregate", {
        isAbstract: true
    })
], IntegrationsSumAggregate);
exports.IntegrationsSumAggregate = IntegrationsSumAggregate;
