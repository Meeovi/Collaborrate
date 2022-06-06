"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Reward_pointsSumOrderByAggregateInput = class Reward_pointsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsSumOrderByAggregateInput.prototype, "discount", void 0);
Reward_pointsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Reward_pointsSumOrderByAggregateInput", {
        isAbstract: true
    })
], Reward_pointsSumOrderByAggregateInput);
exports.Reward_pointsSumOrderByAggregateInput = Reward_pointsSumOrderByAggregateInput;
