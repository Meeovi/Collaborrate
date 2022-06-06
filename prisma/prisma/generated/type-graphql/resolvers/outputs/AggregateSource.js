"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSource = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceAvgAggregate_1 = require("../outputs/SourceAvgAggregate");
const SourceCountAggregate_1 = require("../outputs/SourceCountAggregate");
const SourceMaxAggregate_1 = require("../outputs/SourceMaxAggregate");
const SourceMinAggregate_1 = require("../outputs/SourceMinAggregate");
const SourceSumAggregate_1 = require("../outputs/SourceSumAggregate");
let AggregateSource = class AggregateSource {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCountAggregate_1.SourceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceCountAggregate_1.SourceCountAggregate)
], AggregateSource.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceAvgAggregate_1.SourceAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceAvgAggregate_1.SourceAvgAggregate)
], AggregateSource.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceSumAggregate_1.SourceSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceSumAggregate_1.SourceSumAggregate)
], AggregateSource.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMinAggregate_1.SourceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMinAggregate_1.SourceMinAggregate)
], AggregateSource.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceMaxAggregate_1.SourceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceMaxAggregate_1.SourceMaxAggregate)
], AggregateSource.prototype, "_max", void 0);
AggregateSource = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSource", {
        isAbstract: true
    })
], AggregateSource);
exports.AggregateSource = AggregateSource;
