"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Reward_pointsAvgOrderByAggregateInput = class Reward_pointsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsAvgOrderByAggregateInput.prototype, "discount", void 0);
Reward_pointsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Reward_pointsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Reward_pointsAvgOrderByAggregateInput);
exports.Reward_pointsAvgOrderByAggregateInput = Reward_pointsAvgOrderByAggregateInput;
