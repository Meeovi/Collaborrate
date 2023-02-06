"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ApitokenSumAggregate = class ApitokenSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenSumAggregate.prototype, "token", void 0);
ApitokenSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ApitokenSumAggregate", {
        isAbstract: true
    })
], ApitokenSumAggregate);
exports.ApitokenSumAggregate = ApitokenSumAggregate;
