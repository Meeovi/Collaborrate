"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let LeadsSumAggregate = class LeadsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], LeadsSumAggregate.prototype, "id", void 0);
LeadsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LeadsSumAggregate", {
        isAbstract: true
    })
], LeadsSumAggregate);
exports.LeadsSumAggregate = LeadsSumAggregate;
