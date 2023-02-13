"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsAvgOrderByAggregateInput_1 = require("../inputs/BrandsAvgOrderByAggregateInput");
const BrandsCountOrderByAggregateInput_1 = require("../inputs/BrandsCountOrderByAggregateInput");
const BrandsMaxOrderByAggregateInput_1 = require("../inputs/BrandsMaxOrderByAggregateInput");
const BrandsMinOrderByAggregateInput_1 = require("../inputs/BrandsMinOrderByAggregateInput");
const BrandsSumOrderByAggregateInput_1 = require("../inputs/BrandsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BrandsOrderByWithAggregationInput = class BrandsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsOrderByWithAggregationInput.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsCountOrderByAggregateInput_1.BrandsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsCountOrderByAggregateInput_1.BrandsCountOrderByAggregateInput)
], BrandsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsAvgOrderByAggregateInput_1.BrandsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsAvgOrderByAggregateInput_1.BrandsAvgOrderByAggregateInput)
], BrandsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMaxOrderByAggregateInput_1.BrandsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMaxOrderByAggregateInput_1.BrandsMaxOrderByAggregateInput)
], BrandsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMinOrderByAggregateInput_1.BrandsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMinOrderByAggregateInput_1.BrandsMinOrderByAggregateInput)
], BrandsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsSumOrderByAggregateInput_1.BrandsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsSumOrderByAggregateInput_1.BrandsSumOrderByAggregateInput)
], BrandsOrderByWithAggregationInput.prototype, "_sum", void 0);
BrandsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandsOrderByWithAggregationInput", {
        isAbstract: true
    })
], BrandsOrderByWithAggregationInput);
exports.BrandsOrderByWithAggregationInput = BrandsOrderByWithAggregationInput;
