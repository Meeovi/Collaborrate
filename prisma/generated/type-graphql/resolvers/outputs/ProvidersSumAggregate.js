"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ProvidersSumAggregate = class ProvidersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProvidersSumAggregate.prototype, "id", void 0);
ProvidersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersSumAggregate", {
        isAbstract: true
    })
], ProvidersSumAggregate);
exports.ProvidersSumAggregate = ProvidersSumAggregate;
