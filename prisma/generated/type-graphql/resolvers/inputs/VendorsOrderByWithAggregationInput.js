"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsAvgOrderByAggregateInput_1 = require("../inputs/VendorsAvgOrderByAggregateInput");
const VendorsCountOrderByAggregateInput_1 = require("../inputs/VendorsCountOrderByAggregateInput");
const VendorsMaxOrderByAggregateInput_1 = require("../inputs/VendorsMaxOrderByAggregateInput");
const VendorsMinOrderByAggregateInput_1 = require("../inputs/VendorsMinOrderByAggregateInput");
const VendorsSumOrderByAggregateInput_1 = require("../inputs/VendorsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VendorsOrderByWithAggregationInput = class VendorsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "polls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "gift_certificates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "invoices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "reward_points", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "special_discounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "statistics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "stocks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "physical_store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsOrderByWithAggregationInput.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsCountOrderByAggregateInput_1.VendorsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsCountOrderByAggregateInput_1.VendorsCountOrderByAggregateInput)
], VendorsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsAvgOrderByAggregateInput_1.VendorsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsAvgOrderByAggregateInput_1.VendorsAvgOrderByAggregateInput)
], VendorsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMaxOrderByAggregateInput_1.VendorsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMaxOrderByAggregateInput_1.VendorsMaxOrderByAggregateInput)
], VendorsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMinOrderByAggregateInput_1.VendorsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMinOrderByAggregateInput_1.VendorsMinOrderByAggregateInput)
], VendorsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsSumOrderByAggregateInput_1.VendorsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsSumOrderByAggregateInput_1.VendorsSumOrderByAggregateInput)
], VendorsOrderByWithAggregationInput.prototype, "_sum", void 0);
VendorsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VendorsOrderByWithAggregationInput", {
        isAbstract: true
    })
], VendorsOrderByWithAggregationInput);
exports.VendorsOrderByWithAggregationInput = VendorsOrderByWithAggregationInput;
