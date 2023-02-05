"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RewardsAvgOrderByAggregateInput = class RewardsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsAvgOrderByAggregateInput.prototype, "id", void 0);
RewardsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RewardsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], RewardsAvgOrderByAggregateInput);
exports.RewardsAvgOrderByAggregateInput = RewardsAvgOrderByAggregateInput;
