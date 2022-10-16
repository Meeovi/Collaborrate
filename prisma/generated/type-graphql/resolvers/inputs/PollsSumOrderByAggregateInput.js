"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PollsSumOrderByAggregateInput = class PollsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsSumOrderByAggregateInput.prototype, "id", void 0);
PollsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PollsSumOrderByAggregateInput", {
        isAbstract: true
    })
], PollsSumOrderByAggregateInput);
exports.PollsSumOrderByAggregateInput = PollsSumOrderByAggregateInput;
