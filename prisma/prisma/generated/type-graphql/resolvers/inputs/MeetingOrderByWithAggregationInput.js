"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingAvgOrderByAggregateInput_1 = require("../inputs/MeetingAvgOrderByAggregateInput");
const MeetingCountOrderByAggregateInput_1 = require("../inputs/MeetingCountOrderByAggregateInput");
const MeetingMaxOrderByAggregateInput_1 = require("../inputs/MeetingMaxOrderByAggregateInput");
const MeetingMinOrderByAggregateInput_1 = require("../inputs/MeetingMinOrderByAggregateInput");
const MeetingSumOrderByAggregateInput_1 = require("../inputs/MeetingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MeetingOrderByWithAggregationInput = class MeetingOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "related_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "reminders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "invitees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByWithAggregationInput.prototype, "scheduling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCountOrderByAggregateInput_1.MeetingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingCountOrderByAggregateInput_1.MeetingCountOrderByAggregateInput)
], MeetingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingAvgOrderByAggregateInput_1.MeetingAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingAvgOrderByAggregateInput_1.MeetingAvgOrderByAggregateInput)
], MeetingOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMaxOrderByAggregateInput_1.MeetingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMaxOrderByAggregateInput_1.MeetingMaxOrderByAggregateInput)
], MeetingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMinOrderByAggregateInput_1.MeetingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMinOrderByAggregateInput_1.MeetingMinOrderByAggregateInput)
], MeetingOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingSumOrderByAggregateInput_1.MeetingSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingSumOrderByAggregateInput_1.MeetingSumOrderByAggregateInput)
], MeetingOrderByWithAggregationInput.prototype, "_sum", void 0);
MeetingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MeetingOrderByWithAggregationInput", {
        isAbstract: true
    })
], MeetingOrderByWithAggregationInput);
exports.MeetingOrderByWithAggregationInput = MeetingOrderByWithAggregationInput;
