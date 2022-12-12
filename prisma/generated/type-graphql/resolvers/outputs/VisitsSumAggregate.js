"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let VisitsSumAggregate = class VisitsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], VisitsSumAggregate.prototype, "id", void 0);
VisitsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisitsSumAggregate", {
        isAbstract: true
    })
], VisitsSumAggregate);
exports.VisitsSumAggregate = VisitsSumAggregate;
