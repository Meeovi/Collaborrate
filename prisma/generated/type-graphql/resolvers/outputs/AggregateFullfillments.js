"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFullfillments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsAvgAggregate_1 = require("../outputs/FullfillmentsAvgAggregate");
const FullfillmentsCountAggregate_1 = require("../outputs/FullfillmentsCountAggregate");
const FullfillmentsMaxAggregate_1 = require("../outputs/FullfillmentsMaxAggregate");
const FullfillmentsMinAggregate_1 = require("../outputs/FullfillmentsMinAggregate");
const FullfillmentsSumAggregate_1 = require("../outputs/FullfillmentsSumAggregate");
let AggregateFullfillments = class AggregateFullfillments {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCountAggregate_1.FullfillmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsCountAggregate_1.FullfillmentsCountAggregate)
], AggregateFullfillments.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsAvgAggregate_1.FullfillmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsAvgAggregate_1.FullfillmentsAvgAggregate)
], AggregateFullfillments.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsSumAggregate_1.FullfillmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsSumAggregate_1.FullfillmentsSumAggregate)
], AggregateFullfillments.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMinAggregate_1.FullfillmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMinAggregate_1.FullfillmentsMinAggregate)
], AggregateFullfillments.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMaxAggregate_1.FullfillmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMaxAggregate_1.FullfillmentsMaxAggregate)
], AggregateFullfillments.prototype, "_max", void 0);
AggregateFullfillments = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFullfillments", {
        isAbstract: true
    })
], AggregateFullfillments);
exports.AggregateFullfillments = AggregateFullfillments;
