"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsAvgOrderByAggregateInput_1 = require("../inputs/RewardsAvgOrderByAggregateInput");
const RewardsCountOrderByAggregateInput_1 = require("../inputs/RewardsCountOrderByAggregateInput");
const RewardsMaxOrderByAggregateInput_1 = require("../inputs/RewardsMaxOrderByAggregateInput");
const RewardsMinOrderByAggregateInput_1 = require("../inputs/RewardsMinOrderByAggregateInput");
const RewardsSumOrderByAggregateInput_1 = require("../inputs/RewardsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RewardsOrderByWithAggregationInput = class RewardsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCountOrderByAggregateInput_1.RewardsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsCountOrderByAggregateInput_1.RewardsCountOrderByAggregateInput)
], RewardsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsAvgOrderByAggregateInput_1.RewardsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsAvgOrderByAggregateInput_1.RewardsAvgOrderByAggregateInput)
], RewardsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMaxOrderByAggregateInput_1.RewardsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMaxOrderByAggregateInput_1.RewardsMaxOrderByAggregateInput)
], RewardsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMinOrderByAggregateInput_1.RewardsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMinOrderByAggregateInput_1.RewardsMinOrderByAggregateInput)
], RewardsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsSumOrderByAggregateInput_1.RewardsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsSumOrderByAggregateInput_1.RewardsSumOrderByAggregateInput)
], RewardsOrderByWithAggregationInput.prototype, "_sum", void 0);
RewardsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RewardsOrderByWithAggregationInput", {
        isAbstract: true
    })
], RewardsOrderByWithAggregationInput);
exports.RewardsOrderByWithAggregationInput = RewardsOrderByWithAggregationInput;
