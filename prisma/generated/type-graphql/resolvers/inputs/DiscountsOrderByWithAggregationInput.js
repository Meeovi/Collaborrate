"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsAvgOrderByAggregateInput_1 = require("../inputs/DiscountsAvgOrderByAggregateInput");
const DiscountsCountOrderByAggregateInput_1 = require("../inputs/DiscountsCountOrderByAggregateInput");
const DiscountsMaxOrderByAggregateInput_1 = require("../inputs/DiscountsMaxOrderByAggregateInput");
const DiscountsMinOrderByAggregateInput_1 = require("../inputs/DiscountsMinOrderByAggregateInput");
const DiscountsSumOrderByAggregateInput_1 = require("../inputs/DiscountsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DiscountsOrderByWithAggregationInput = class DiscountsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "creditMemo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "billToName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsCountOrderByAggregateInput_1.DiscountsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsCountOrderByAggregateInput_1.DiscountsCountOrderByAggregateInput)
], DiscountsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsAvgOrderByAggregateInput_1.DiscountsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsAvgOrderByAggregateInput_1.DiscountsAvgOrderByAggregateInput)
], DiscountsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMaxOrderByAggregateInput_1.DiscountsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMaxOrderByAggregateInput_1.DiscountsMaxOrderByAggregateInput)
], DiscountsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMinOrderByAggregateInput_1.DiscountsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMinOrderByAggregateInput_1.DiscountsMinOrderByAggregateInput)
], DiscountsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsSumOrderByAggregateInput_1.DiscountsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsSumOrderByAggregateInput_1.DiscountsSumOrderByAggregateInput)
], DiscountsOrderByWithAggregationInput.prototype, "_sum", void 0);
DiscountsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DiscountsOrderByWithAggregationInput", {
        isAbstract: true
    })
], DiscountsOrderByWithAggregationInput);
exports.DiscountsOrderByWithAggregationInput = DiscountsOrderByWithAggregationInput;
