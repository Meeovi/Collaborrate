"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsAvgOrderByAggregateInput_1 = require("../inputs/Reward_pointsAvgOrderByAggregateInput");
const Reward_pointsCountOrderByAggregateInput_1 = require("../inputs/Reward_pointsCountOrderByAggregateInput");
const Reward_pointsMaxOrderByAggregateInput_1 = require("../inputs/Reward_pointsMaxOrderByAggregateInput");
const Reward_pointsMinOrderByAggregateInput_1 = require("../inputs/Reward_pointsMinOrderByAggregateInput");
const Reward_pointsSumOrderByAggregateInput_1 = require("../inputs/Reward_pointsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Reward_pointsOrderByWithAggregationInput = class Reward_pointsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsCountOrderByAggregateInput_1.Reward_pointsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsCountOrderByAggregateInput_1.Reward_pointsCountOrderByAggregateInput)
], Reward_pointsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsAvgOrderByAggregateInput_1.Reward_pointsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsAvgOrderByAggregateInput_1.Reward_pointsAvgOrderByAggregateInput)
], Reward_pointsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMaxOrderByAggregateInput_1.Reward_pointsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMaxOrderByAggregateInput_1.Reward_pointsMaxOrderByAggregateInput)
], Reward_pointsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMinOrderByAggregateInput_1.Reward_pointsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMinOrderByAggregateInput_1.Reward_pointsMinOrderByAggregateInput)
], Reward_pointsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsSumOrderByAggregateInput_1.Reward_pointsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsSumOrderByAggregateInput_1.Reward_pointsSumOrderByAggregateInput)
], Reward_pointsOrderByWithAggregationInput.prototype, "_sum", void 0);
Reward_pointsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Reward_pointsOrderByWithAggregationInput", {
        isAbstract: true
    })
], Reward_pointsOrderByWithAggregationInput);
exports.Reward_pointsOrderByWithAggregationInput = Reward_pointsOrderByWithAggregationInput;
