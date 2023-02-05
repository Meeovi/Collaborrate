"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSegments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsAvgAggregate_1 = require("../outputs/SegmentsAvgAggregate");
const SegmentsCountAggregate_1 = require("../outputs/SegmentsCountAggregate");
const SegmentsMaxAggregate_1 = require("../outputs/SegmentsMaxAggregate");
const SegmentsMinAggregate_1 = require("../outputs/SegmentsMinAggregate");
const SegmentsSumAggregate_1 = require("../outputs/SegmentsSumAggregate");
let AggregateSegments = class AggregateSegments {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsCountAggregate_1.SegmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsCountAggregate_1.SegmentsCountAggregate)
], AggregateSegments.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsAvgAggregate_1.SegmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsAvgAggregate_1.SegmentsAvgAggregate)
], AggregateSegments.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsSumAggregate_1.SegmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsSumAggregate_1.SegmentsSumAggregate)
], AggregateSegments.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMinAggregate_1.SegmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMinAggregate_1.SegmentsMinAggregate)
], AggregateSegments.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsMaxAggregate_1.SegmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsMaxAggregate_1.SegmentsMaxAggregate)
], AggregateSegments.prototype, "_max", void 0);
AggregateSegments = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSegments", {
        isAbstract: true
    })
], AggregateSegments);
exports.AggregateSegments = AggregateSegments;
