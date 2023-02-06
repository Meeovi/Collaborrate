"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInternalization = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationAvgAggregate_1 = require("../outputs/InternalizationAvgAggregate");
const InternalizationCountAggregate_1 = require("../outputs/InternalizationCountAggregate");
const InternalizationMaxAggregate_1 = require("../outputs/InternalizationMaxAggregate");
const InternalizationMinAggregate_1 = require("../outputs/InternalizationMinAggregate");
const InternalizationSumAggregate_1 = require("../outputs/InternalizationSumAggregate");
let AggregateInternalization = class AggregateInternalization {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCountAggregate_1.InternalizationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationCountAggregate_1.InternalizationCountAggregate)
], AggregateInternalization.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationAvgAggregate_1.InternalizationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationAvgAggregate_1.InternalizationAvgAggregate)
], AggregateInternalization.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationSumAggregate_1.InternalizationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationSumAggregate_1.InternalizationSumAggregate)
], AggregateInternalization.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMinAggregate_1.InternalizationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMinAggregate_1.InternalizationMinAggregate)
], AggregateInternalization.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationMaxAggregate_1.InternalizationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationMaxAggregate_1.InternalizationMaxAggregate)
], AggregateInternalization.prototype, "_max", void 0);
AggregateInternalization = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInternalization", {
        isAbstract: true
    })
], AggregateInternalization);
exports.AggregateInternalization = AggregateInternalization;
