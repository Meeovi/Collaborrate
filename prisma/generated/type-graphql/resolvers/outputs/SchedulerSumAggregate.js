"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SchedulerSumAggregate = class SchedulerSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SchedulerSumAggregate.prototype, "id", void 0);
SchedulerSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchedulerSumAggregate", {
        isAbstract: true
    })
], SchedulerSumAggregate);
exports.SchedulerSumAggregate = SchedulerSumAggregate;
