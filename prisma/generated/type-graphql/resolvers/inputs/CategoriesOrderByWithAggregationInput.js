"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesAvgOrderByAggregateInput_1 = require("../inputs/CategoriesAvgOrderByAggregateInput");
const CategoriesCountOrderByAggregateInput_1 = require("../inputs/CategoriesCountOrderByAggregateInput");
const CategoriesMaxOrderByAggregateInput_1 = require("../inputs/CategoriesMaxOrderByAggregateInput");
const CategoriesMinOrderByAggregateInput_1 = require("../inputs/CategoriesMinOrderByAggregateInput");
const CategoriesSumOrderByAggregateInput_1 = require("../inputs/CategoriesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesOrderByWithAggregationInput = class CategoriesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesOrderByWithAggregationInput.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCountOrderByAggregateInput_1.CategoriesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesCountOrderByAggregateInput_1.CategoriesCountOrderByAggregateInput)
], CategoriesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesAvgOrderByAggregateInput_1.CategoriesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesAvgOrderByAggregateInput_1.CategoriesAvgOrderByAggregateInput)
], CategoriesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMaxOrderByAggregateInput_1.CategoriesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMaxOrderByAggregateInput_1.CategoriesMaxOrderByAggregateInput)
], CategoriesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesMinOrderByAggregateInput_1.CategoriesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesMinOrderByAggregateInput_1.CategoriesMinOrderByAggregateInput)
], CategoriesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesSumOrderByAggregateInput_1.CategoriesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesSumOrderByAggregateInput_1.CategoriesSumOrderByAggregateInput)
], CategoriesOrderByWithAggregationInput.prototype, "_sum", void 0);
CategoriesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesOrderByWithAggregationInput", {
        isAbstract: true
    })
], CategoriesOrderByWithAggregationInput);
exports.CategoriesOrderByWithAggregationInput = CategoriesOrderByWithAggregationInput;
