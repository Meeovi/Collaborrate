"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsAvgOrderByAggregateInput_1 = require("../inputs/CouponsAvgOrderByAggregateInput");
const CouponsCountOrderByAggregateInput_1 = require("../inputs/CouponsCountOrderByAggregateInput");
const CouponsMaxOrderByAggregateInput_1 = require("../inputs/CouponsMaxOrderByAggregateInput");
const CouponsMinOrderByAggregateInput_1 = require("../inputs/CouponsMinOrderByAggregateInput");
const CouponsSumOrderByAggregateInput_1 = require("../inputs/CouponsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CouponsOrderByWithAggregationInput = class CouponsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCountOrderByAggregateInput_1.CouponsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCountOrderByAggregateInput_1.CouponsCountOrderByAggregateInput)
], CouponsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsAvgOrderByAggregateInput_1.CouponsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsAvgOrderByAggregateInput_1.CouponsAvgOrderByAggregateInput)
], CouponsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMaxOrderByAggregateInput_1.CouponsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMaxOrderByAggregateInput_1.CouponsMaxOrderByAggregateInput)
], CouponsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMinOrderByAggregateInput_1.CouponsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMinOrderByAggregateInput_1.CouponsMinOrderByAggregateInput)
], CouponsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsSumOrderByAggregateInput_1.CouponsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsSumOrderByAggregateInput_1.CouponsSumOrderByAggregateInput)
], CouponsOrderByWithAggregationInput.prototype, "_sum", void 0);
CouponsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CouponsOrderByWithAggregationInput", {
        isAbstract: true
    })
], CouponsOrderByWithAggregationInput);
exports.CouponsOrderByWithAggregationInput = CouponsOrderByWithAggregationInput;
