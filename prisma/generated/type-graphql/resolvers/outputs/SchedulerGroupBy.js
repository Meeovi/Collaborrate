"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SchedulerAvgAggregate_1 = require("../outputs/SchedulerAvgAggregate");
const SchedulerCountAggregate_1 = require("../outputs/SchedulerCountAggregate");
const SchedulerMaxAggregate_1 = require("../outputs/SchedulerMaxAggregate");
const SchedulerMinAggregate_1 = require("../outputs/SchedulerMinAggregate");
const SchedulerSumAggregate_1 = require("../outputs/SchedulerSumAggregate");
let SchedulerGroupBy = class SchedulerGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SchedulerGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchedulerGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "public", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "permission", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerCountAggregate_1.SchedulerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerCountAggregate_1.SchedulerCountAggregate)
], SchedulerGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerAvgAggregate_1.SchedulerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerAvgAggregate_1.SchedulerAvgAggregate)
], SchedulerGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerSumAggregate_1.SchedulerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerSumAggregate_1.SchedulerSumAggregate)
], SchedulerGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMinAggregate_1.SchedulerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMinAggregate_1.SchedulerMinAggregate)
], SchedulerGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMaxAggregate_1.SchedulerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMaxAggregate_1.SchedulerMaxAggregate)
], SchedulerGroupBy.prototype, "_max", void 0);
SchedulerGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchedulerGroupBy", {
        isAbstract: true
    })
], SchedulerGroupBy);
exports.SchedulerGroupBy = SchedulerGroupBy;
