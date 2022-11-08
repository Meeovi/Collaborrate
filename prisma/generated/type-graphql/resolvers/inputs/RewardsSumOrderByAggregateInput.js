"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RewardsSumOrderByAggregateInput = class RewardsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsSumOrderByAggregateInput.prototype, "id", void 0);
RewardsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RewardsSumOrderByAggregateInput", {
        isAbstract: true
    })
], RewardsSumOrderByAggregateInput);
exports.RewardsSumOrderByAggregateInput = RewardsSumOrderByAggregateInput;
