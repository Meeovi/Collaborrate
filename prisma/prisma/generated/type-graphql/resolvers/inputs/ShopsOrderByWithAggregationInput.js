"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsAvgOrderByAggregateInput_1 = require("../inputs/ShopsAvgOrderByAggregateInput");
const ShopsCountOrderByAggregateInput_1 = require("../inputs/ShopsCountOrderByAggregateInput");
const ShopsMaxOrderByAggregateInput_1 = require("../inputs/ShopsMaxOrderByAggregateInput");
const ShopsMinOrderByAggregateInput_1 = require("../inputs/ShopsMinOrderByAggregateInput");
const ShopsSumOrderByAggregateInput_1 = require("../inputs/ShopsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShopsOrderByWithAggregationInput = class ShopsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "polls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "gift_certificates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "invoices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "reward_points", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "special_discounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "statistics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsOrderByWithAggregationInput.prototype, "stocks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsCountOrderByAggregateInput_1.ShopsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsCountOrderByAggregateInput_1.ShopsCountOrderByAggregateInput)
], ShopsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsAvgOrderByAggregateInput_1.ShopsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsAvgOrderByAggregateInput_1.ShopsAvgOrderByAggregateInput)
], ShopsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMaxOrderByAggregateInput_1.ShopsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMaxOrderByAggregateInput_1.ShopsMaxOrderByAggregateInput)
], ShopsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMinOrderByAggregateInput_1.ShopsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMinOrderByAggregateInput_1.ShopsMinOrderByAggregateInput)
], ShopsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsSumOrderByAggregateInput_1.ShopsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsSumOrderByAggregateInput_1.ShopsSumOrderByAggregateInput)
], ShopsOrderByWithAggregationInput.prototype, "_sum", void 0);
ShopsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShopsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ShopsOrderByWithAggregationInput);
exports.ShopsOrderByWithAggregationInput = ShopsOrderByWithAggregationInput;
