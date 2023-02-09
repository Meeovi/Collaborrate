"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByWithAggregationInput_1 = require("../../../inputs/RewardsOrderByWithAggregationInput");
const RewardsScalarWhereWithAggregatesInput_1 = require("../../../inputs/RewardsScalarWhereWithAggregatesInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
const RewardsScalarFieldEnum_1 = require("../../../../enums/RewardsScalarFieldEnum");
let GroupByRewardsArgs = class GroupByRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], GroupByRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByWithAggregationInput_1.RewardsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRewardsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsScalarFieldEnum_1.RewardsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRewardsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsScalarWhereWithAggregatesInput_1.RewardsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsScalarWhereWithAggregatesInput_1.RewardsScalarWhereWithAggregatesInput)
], GroupByRewardsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRewardsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRewardsArgs.prototype, "skip", void 0);
GroupByRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRewardsArgs);
exports.GroupByRewardsArgs = GroupByRewardsArgs;
