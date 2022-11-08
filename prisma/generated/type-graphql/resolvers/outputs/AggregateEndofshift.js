"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEndofshift = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftAvgAggregate_1 = require("../outputs/EndofshiftAvgAggregate");
const EndofshiftCountAggregate_1 = require("../outputs/EndofshiftCountAggregate");
const EndofshiftMaxAggregate_1 = require("../outputs/EndofshiftMaxAggregate");
const EndofshiftMinAggregate_1 = require("../outputs/EndofshiftMinAggregate");
const EndofshiftSumAggregate_1 = require("../outputs/EndofshiftSumAggregate");
let AggregateEndofshift = class AggregateEndofshift {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftCountAggregate_1.EndofshiftCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftCountAggregate_1.EndofshiftCountAggregate)
], AggregateEndofshift.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftAvgAggregate_1.EndofshiftAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftAvgAggregate_1.EndofshiftAvgAggregate)
], AggregateEndofshift.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftSumAggregate_1.EndofshiftSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftSumAggregate_1.EndofshiftSumAggregate)
], AggregateEndofshift.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMinAggregate_1.EndofshiftMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMinAggregate_1.EndofshiftMinAggregate)
], AggregateEndofshift.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMaxAggregate_1.EndofshiftMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMaxAggregate_1.EndofshiftMaxAggregate)
], AggregateEndofshift.prototype, "_max", void 0);
AggregateEndofshift = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEndofshift", {
        isAbstract: true
    })
], AggregateEndofshift);
exports.AggregateEndofshift = AggregateEndofshift;
