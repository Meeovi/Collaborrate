"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRewards = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsAvgAggregate_1 = require("../outputs/RewardsAvgAggregate");
const RewardsCountAggregate_1 = require("../outputs/RewardsCountAggregate");
const RewardsMaxAggregate_1 = require("../outputs/RewardsMaxAggregate");
const RewardsMinAggregate_1 = require("../outputs/RewardsMinAggregate");
const RewardsSumAggregate_1 = require("../outputs/RewardsSumAggregate");
let AggregateRewards = class AggregateRewards {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCountAggregate_1.RewardsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsCountAggregate_1.RewardsCountAggregate)
], AggregateRewards.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsAvgAggregate_1.RewardsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsAvgAggregate_1.RewardsAvgAggregate)
], AggregateRewards.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsSumAggregate_1.RewardsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsSumAggregate_1.RewardsSumAggregate)
], AggregateRewards.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMinAggregate_1.RewardsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMinAggregate_1.RewardsMinAggregate)
], AggregateRewards.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMaxAggregate_1.RewardsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMaxAggregate_1.RewardsMaxAggregate)
], AggregateRewards.prototype, "_max", void 0);
AggregateRewards = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRewards", {
        isAbstract: true
    })
], AggregateRewards);
exports.AggregateRewards = AggregateRewards;
