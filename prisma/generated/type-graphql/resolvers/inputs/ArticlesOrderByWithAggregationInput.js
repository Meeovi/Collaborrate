"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesAvgOrderByAggregateInput_1 = require("../inputs/ArticlesAvgOrderByAggregateInput");
const ArticlesCountOrderByAggregateInput_1 = require("../inputs/ArticlesCountOrderByAggregateInput");
const ArticlesMaxOrderByAggregateInput_1 = require("../inputs/ArticlesMaxOrderByAggregateInput");
const ArticlesMinOrderByAggregateInput_1 = require("../inputs/ArticlesMinOrderByAggregateInput");
const ArticlesSumOrderByAggregateInput_1 = require("../inputs/ArticlesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ArticlesOrderByWithAggregationInput = class ArticlesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "meta_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCountOrderByAggregateInput_1.ArticlesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesCountOrderByAggregateInput_1.ArticlesCountOrderByAggregateInput)
], ArticlesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesAvgOrderByAggregateInput_1.ArticlesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesAvgOrderByAggregateInput_1.ArticlesAvgOrderByAggregateInput)
], ArticlesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMaxOrderByAggregateInput_1.ArticlesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMaxOrderByAggregateInput_1.ArticlesMaxOrderByAggregateInput)
], ArticlesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMinOrderByAggregateInput_1.ArticlesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMinOrderByAggregateInput_1.ArticlesMinOrderByAggregateInput)
], ArticlesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesSumOrderByAggregateInput_1.ArticlesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesSumOrderByAggregateInput_1.ArticlesSumOrderByAggregateInput)
], ArticlesOrderByWithAggregationInput.prototype, "_sum", void 0);
ArticlesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArticlesOrderByWithAggregationInput", {
        isAbstract: true
    })
], ArticlesOrderByWithAggregationInput);
exports.ArticlesOrderByWithAggregationInput = ArticlesOrderByWithAggregationInput;
