"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReturns = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsAvgAggregate_1 = require("../outputs/ReturnsAvgAggregate");
const ReturnsCountAggregate_1 = require("../outputs/ReturnsCountAggregate");
const ReturnsMaxAggregate_1 = require("../outputs/ReturnsMaxAggregate");
const ReturnsMinAggregate_1 = require("../outputs/ReturnsMinAggregate");
const ReturnsSumAggregate_1 = require("../outputs/ReturnsSumAggregate");
let AggregateReturns = class AggregateReturns {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCountAggregate_1.ReturnsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCountAggregate_1.ReturnsCountAggregate)
], AggregateReturns.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsAvgAggregate_1.ReturnsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsAvgAggregate_1.ReturnsAvgAggregate)
], AggregateReturns.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsSumAggregate_1.ReturnsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsSumAggregate_1.ReturnsSumAggregate)
], AggregateReturns.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMinAggregate_1.ReturnsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMinAggregate_1.ReturnsMinAggregate)
], AggregateReturns.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsMaxAggregate_1.ReturnsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsMaxAggregate_1.ReturnsMaxAggregate)
], AggregateReturns.prototype, "_max", void 0);
AggregateReturns = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReturns", {
        isAbstract: true
    })
], AggregateReturns);
exports.AggregateReturns = AggregateReturns;
