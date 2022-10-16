"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOpportunities = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesAvgAggregate_1 = require("../outputs/OpportunitiesAvgAggregate");
const OpportunitiesCountAggregate_1 = require("../outputs/OpportunitiesCountAggregate");
const OpportunitiesMaxAggregate_1 = require("../outputs/OpportunitiesMaxAggregate");
const OpportunitiesMinAggregate_1 = require("../outputs/OpportunitiesMinAggregate");
const OpportunitiesSumAggregate_1 = require("../outputs/OpportunitiesSumAggregate");
let AggregateOpportunities = class AggregateOpportunities {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesCountAggregate_1.OpportunitiesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesCountAggregate_1.OpportunitiesCountAggregate)
], AggregateOpportunities.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesAvgAggregate_1.OpportunitiesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesAvgAggregate_1.OpportunitiesAvgAggregate)
], AggregateOpportunities.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesSumAggregate_1.OpportunitiesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesSumAggregate_1.OpportunitiesSumAggregate)
], AggregateOpportunities.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMinAggregate_1.OpportunitiesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMinAggregate_1.OpportunitiesMinAggregate)
], AggregateOpportunities.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesMaxAggregate_1.OpportunitiesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesMaxAggregate_1.OpportunitiesMaxAggregate)
], AggregateOpportunities.prototype, "_max", void 0);
AggregateOpportunities = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOpportunities", {
        isAbstract: true
    })
], AggregateOpportunities);
exports.AggregateOpportunities = AggregateOpportunities;
