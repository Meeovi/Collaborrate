"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsAvgOrderByAggregateInput_1 = require("../inputs/StatisticsAvgOrderByAggregateInput");
const StatisticsCountOrderByAggregateInput_1 = require("../inputs/StatisticsCountOrderByAggregateInput");
const StatisticsMaxOrderByAggregateInput_1 = require("../inputs/StatisticsMaxOrderByAggregateInput");
const StatisticsMinOrderByAggregateInput_1 = require("../inputs/StatisticsMinOrderByAggregateInput");
const StatisticsSumOrderByAggregateInput_1 = require("../inputs/StatisticsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StatisticsOrderByWithAggregationInput = class StatisticsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCountOrderByAggregateInput_1.StatisticsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsCountOrderByAggregateInput_1.StatisticsCountOrderByAggregateInput)
], StatisticsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsAvgOrderByAggregateInput_1.StatisticsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsAvgOrderByAggregateInput_1.StatisticsAvgOrderByAggregateInput)
], StatisticsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMaxOrderByAggregateInput_1.StatisticsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMaxOrderByAggregateInput_1.StatisticsMaxOrderByAggregateInput)
], StatisticsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMinOrderByAggregateInput_1.StatisticsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMinOrderByAggregateInput_1.StatisticsMinOrderByAggregateInput)
], StatisticsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsSumOrderByAggregateInput_1.StatisticsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsSumOrderByAggregateInput_1.StatisticsSumOrderByAggregateInput)
], StatisticsOrderByWithAggregationInput.prototype, "_sum", void 0);
StatisticsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatisticsOrderByWithAggregationInput", {
        isAbstract: true
    })
], StatisticsOrderByWithAggregationInput);
exports.StatisticsOrderByWithAggregationInput = StatisticsOrderByWithAggregationInput;
