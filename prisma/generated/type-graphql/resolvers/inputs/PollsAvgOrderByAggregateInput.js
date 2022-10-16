"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PollsAvgOrderByAggregateInput = class PollsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsAvgOrderByAggregateInput.prototype, "id", void 0);
PollsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PollsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PollsAvgOrderByAggregateInput);
exports.PollsAvgOrderByAggregateInput = PollsAvgOrderByAggregateInput;
