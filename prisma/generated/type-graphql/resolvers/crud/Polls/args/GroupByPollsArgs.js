"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsOrderByWithAggregationInput_1 = require("../../../inputs/PollsOrderByWithAggregationInput");
const PollsScalarWhereWithAggregatesInput_1 = require("../../../inputs/PollsScalarWhereWithAggregatesInput");
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
const PollsScalarFieldEnum_1 = require("../../../../enums/PollsScalarFieldEnum");
let GroupByPollsArgs = class GroupByPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], GroupByPollsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsOrderByWithAggregationInput_1.PollsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPollsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsScalarFieldEnum_1.PollsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPollsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsScalarWhereWithAggregatesInput_1.PollsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsScalarWhereWithAggregatesInput_1.PollsScalarWhereWithAggregatesInput)
], GroupByPollsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPollsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPollsArgs.prototype, "skip", void 0);
GroupByPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPollsArgs);
exports.GroupByPollsArgs = GroupByPollsArgs;
