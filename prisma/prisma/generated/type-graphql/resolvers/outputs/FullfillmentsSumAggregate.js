"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let FullfillmentsSumAggregate = class FullfillmentsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], FullfillmentsSumAggregate.prototype, "id", void 0);
FullfillmentsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FullfillmentsSumAggregate", {
        isAbstract: true
    })
], FullfillmentsSumAggregate);
exports.FullfillmentsSumAggregate = FullfillmentsSumAggregate;
