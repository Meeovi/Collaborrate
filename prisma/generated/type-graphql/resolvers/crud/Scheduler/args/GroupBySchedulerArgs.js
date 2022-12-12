"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerOrderByWithAggregationInput_1 = require("../../../inputs/SchedulerOrderByWithAggregationInput");
const SchedulerScalarWhereWithAggregatesInput_1 = require("../../../inputs/SchedulerScalarWhereWithAggregatesInput");
const SchedulerWhereInput_1 = require("../../../inputs/SchedulerWhereInput");
const SchedulerScalarFieldEnum_1 = require("../../../../enums/SchedulerScalarFieldEnum");
let GroupBySchedulerArgs = class GroupBySchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereInput_1.SchedulerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereInput_1.SchedulerWhereInput)
], GroupBySchedulerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerOrderByWithAggregationInput_1.SchedulerOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySchedulerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerScalarFieldEnum_1.SchedulerScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySchedulerArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerScalarWhereWithAggregatesInput_1.SchedulerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerScalarWhereWithAggregatesInput_1.SchedulerScalarWhereWithAggregatesInput)
], GroupBySchedulerArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySchedulerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySchedulerArgs.prototype, "skip", void 0);
GroupBySchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySchedulerArgs);
exports.GroupBySchedulerArgs = GroupBySchedulerArgs;
