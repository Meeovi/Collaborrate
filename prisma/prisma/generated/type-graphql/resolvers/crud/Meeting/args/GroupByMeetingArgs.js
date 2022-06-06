"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByWithAggregationInput_1 = require("../../../inputs/MeetingOrderByWithAggregationInput");
const MeetingScalarWhereWithAggregatesInput_1 = require("../../../inputs/MeetingScalarWhereWithAggregatesInput");
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
const MeetingScalarFieldEnum_1 = require("../../../../enums/MeetingScalarFieldEnum");
let GroupByMeetingArgs = class GroupByMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], GroupByMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingOrderByWithAggregationInput_1.MeetingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMeetingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingScalarFieldEnum_1.MeetingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMeetingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingScalarWhereWithAggregatesInput_1.MeetingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingScalarWhereWithAggregatesInput_1.MeetingScalarWhereWithAggregatesInput)
], GroupByMeetingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMeetingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMeetingArgs.prototype, "skip", void 0);
GroupByMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMeetingArgs);
exports.GroupByMeetingArgs = GroupByMeetingArgs;
