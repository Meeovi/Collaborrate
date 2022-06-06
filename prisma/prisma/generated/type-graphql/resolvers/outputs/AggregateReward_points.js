"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReward_points = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsAvgAggregate_1 = require("../outputs/Reward_pointsAvgAggregate");
const Reward_pointsCountAggregate_1 = require("../outputs/Reward_pointsCountAggregate");
const Reward_pointsMaxAggregate_1 = require("../outputs/Reward_pointsMaxAggregate");
const Reward_pointsMinAggregate_1 = require("../outputs/Reward_pointsMinAggregate");
const Reward_pointsSumAggregate_1 = require("../outputs/Reward_pointsSumAggregate");
let AggregateReward_points = class AggregateReward_points {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsCountAggregate_1.Reward_pointsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsCountAggregate_1.Reward_pointsCountAggregate)
], AggregateReward_points.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsAvgAggregate_1.Reward_pointsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsAvgAggregate_1.Reward_pointsAvgAggregate)
], AggregateReward_points.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsSumAggregate_1.Reward_pointsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsSumAggregate_1.Reward_pointsSumAggregate)
], AggregateReward_points.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMinAggregate_1.Reward_pointsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMinAggregate_1.Reward_pointsMinAggregate)
], AggregateReward_points.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMaxAggregate_1.Reward_pointsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMaxAggregate_1.Reward_pointsMaxAggregate)
], AggregateReward_points.prototype, "_max", void 0);
AggregateReward_points = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReward_points", {
        isAbstract: true
    })
], AggregateReward_points);
exports.AggregateReward_points = AggregateReward_points;
