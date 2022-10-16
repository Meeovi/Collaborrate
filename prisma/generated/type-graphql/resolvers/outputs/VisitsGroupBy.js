"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const VisitsAvgAggregate_1 = require("../outputs/VisitsAvgAggregate");
const VisitsCountAggregate_1 = require("../outputs/VisitsCountAggregate");
const VisitsMaxAggregate_1 = require("../outputs/VisitsMaxAggregate");
const VisitsMinAggregate_1 = require("../outputs/VisitsMinAggregate");
const VisitsSumAggregate_1 = require("../outputs/VisitsSumAggregate");
let VisitsGroupBy = class VisitsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], VisitsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VisitsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "emergency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsGroupBy.prototype, "meeting", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsCountAggregate_1.VisitsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsCountAggregate_1.VisitsCountAggregate)
], VisitsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsAvgAggregate_1.VisitsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsAvgAggregate_1.VisitsAvgAggregate)
], VisitsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsSumAggregate_1.VisitsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsSumAggregate_1.VisitsSumAggregate)
], VisitsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMinAggregate_1.VisitsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMinAggregate_1.VisitsMinAggregate)
], VisitsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMaxAggregate_1.VisitsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMaxAggregate_1.VisitsMaxAggregate)
], VisitsGroupBy.prototype, "_max", void 0);
VisitsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VisitsGroupBy", {
        isAbstract: true
    })
], VisitsGroupBy);
exports.VisitsGroupBy = VisitsGroupBy;
