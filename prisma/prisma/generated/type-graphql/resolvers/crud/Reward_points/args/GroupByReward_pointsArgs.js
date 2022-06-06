"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsOrderByWithAggregationInput_1 = require("../../../inputs/Reward_pointsOrderByWithAggregationInput");
const Reward_pointsScalarWhereWithAggregatesInput_1 = require("../../../inputs/Reward_pointsScalarWhereWithAggregatesInput");
const Reward_pointsWhereInput_1 = require("../../../inputs/Reward_pointsWhereInput");
const Reward_pointsScalarFieldEnum_1 = require("../../../../enums/Reward_pointsScalarFieldEnum");
let GroupByReward_pointsArgs = class GroupByReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereInput_1.Reward_pointsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereInput_1.Reward_pointsWhereInput)
], GroupByReward_pointsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reward_pointsOrderByWithAggregationInput_1.Reward_pointsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReward_pointsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reward_pointsScalarFieldEnum_1.Reward_pointsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReward_pointsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsScalarWhereWithAggregatesInput_1.Reward_pointsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsScalarWhereWithAggregatesInput_1.Reward_pointsScalarWhereWithAggregatesInput)
], GroupByReward_pointsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReward_pointsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReward_pointsArgs.prototype, "skip", void 0);
GroupByReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReward_pointsArgs);
exports.GroupByReward_pointsArgs = GroupByReward_pointsArgs;
