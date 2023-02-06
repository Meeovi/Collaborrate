"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SegmentsAvgAggregate_1 = require("../outputs/SegmentsAvgAggregate");
const SegmentsCountAggregate_1 = require("../outputs/SegmentsCountAggregate");
const SegmentsMaxAggregate_1 = require("../outputs/SegmentsMaxAggregate");
const SegmentsMinAggregate_1 = require("../outputs/SegmentsMinAggregate");
const SegmentsSumAggregate_1 = require("../outputs/SegmentsSumAggregate");
let SegmentsGroupBy = class SegmentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SegmentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SegmentsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "apply_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsCountAggregate_1.SegmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsCountAggregate_1.SegmentsCountAggregate)
], SegmentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsAvgAggregate_1.SegmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsAvgAggregate_1.SegmentsAvgAggregate)
], SegmentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsSumAggregate_1.SegmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsSumAggregate_1.SegmentsSumAggregate)
], SegmentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMinAggregate_1.SegmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMinAggregate_1.SegmentsMinAggregate)
], SegmentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMaxAggregate_1.SegmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMaxAggregate_1.SegmentsMaxAggregate)
], SegmentsGroupBy.prototype, "_max", void 0);
SegmentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SegmentsGroupBy", {
        isAbstract: true
    })
], SegmentsGroupBy);
exports.SegmentsGroupBy = SegmentsGroupBy;
