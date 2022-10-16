"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsAvgOrderByAggregateInput_1 = require("../inputs/Special_discountsAvgOrderByAggregateInput");
const Special_discountsCountOrderByAggregateInput_1 = require("../inputs/Special_discountsCountOrderByAggregateInput");
const Special_discountsMaxOrderByAggregateInput_1 = require("../inputs/Special_discountsMaxOrderByAggregateInput");
const Special_discountsMinOrderByAggregateInput_1 = require("../inputs/Special_discountsMinOrderByAggregateInput");
const Special_discountsSumOrderByAggregateInput_1 = require("../inputs/Special_discountsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Special_discountsOrderByWithAggregationInput = class Special_discountsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsCountOrderByAggregateInput_1.Special_discountsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsCountOrderByAggregateInput_1.Special_discountsCountOrderByAggregateInput)
], Special_discountsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsAvgOrderByAggregateInput_1.Special_discountsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsAvgOrderByAggregateInput_1.Special_discountsAvgOrderByAggregateInput)
], Special_discountsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMaxOrderByAggregateInput_1.Special_discountsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMaxOrderByAggregateInput_1.Special_discountsMaxOrderByAggregateInput)
], Special_discountsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMinOrderByAggregateInput_1.Special_discountsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMinOrderByAggregateInput_1.Special_discountsMinOrderByAggregateInput)
], Special_discountsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsSumOrderByAggregateInput_1.Special_discountsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsSumOrderByAggregateInput_1.Special_discountsSumOrderByAggregateInput)
], Special_discountsOrderByWithAggregationInput.prototype, "_sum", void 0);
Special_discountsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Special_discountsOrderByWithAggregationInput", {
        isAbstract: true
    })
], Special_discountsOrderByWithAggregationInput);
exports.Special_discountsOrderByWithAggregationInput = Special_discountsOrderByWithAggregationInput;
