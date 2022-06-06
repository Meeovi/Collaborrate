"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MeetingAvgOrderByAggregateInput = class MeetingAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingAvgOrderByAggregateInput.prototype, "id", void 0);
MeetingAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MeetingAvgOrderByAggregateInput", {
        isAbstract: true
    })
], MeetingAvgOrderByAggregateInput);
exports.MeetingAvgOrderByAggregateInput = MeetingAvgOrderByAggregateInput;
