"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTargets = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsAvgAggregate_1 = require("../outputs/TargetsAvgAggregate");
const TargetsCountAggregate_1 = require("../outputs/TargetsCountAggregate");
const TargetsMaxAggregate_1 = require("../outputs/TargetsMaxAggregate");
const TargetsMinAggregate_1 = require("../outputs/TargetsMinAggregate");
const TargetsSumAggregate_1 = require("../outputs/TargetsSumAggregate");
let AggregateTargets = class AggregateTargets {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCountAggregate_1.TargetsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsCountAggregate_1.TargetsCountAggregate)
], AggregateTargets.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsAvgAggregate_1.TargetsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsAvgAggregate_1.TargetsAvgAggregate)
], AggregateTargets.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsSumAggregate_1.TargetsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsSumAggregate_1.TargetsSumAggregate)
], AggregateTargets.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMinAggregate_1.TargetsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMinAggregate_1.TargetsMinAggregate)
], AggregateTargets.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsMaxAggregate_1.TargetsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsMaxAggregate_1.TargetsMaxAggregate)
], AggregateTargets.prototype, "_max", void 0);
AggregateTargets = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTargets", {
        isAbstract: true
    })
], AggregateTargets);
exports.AggregateTargets = AggregateTargets;
