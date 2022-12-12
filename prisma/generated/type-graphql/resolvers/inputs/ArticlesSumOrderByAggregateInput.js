"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ArticlesSumOrderByAggregateInput = class ArticlesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesSumOrderByAggregateInput.prototype, "id", void 0);
ArticlesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArticlesSumOrderByAggregateInput", {
        isAbstract: true
    })
], ArticlesSumOrderByAggregateInput);
exports.ArticlesSumOrderByAggregateInput = ArticlesSumOrderByAggregateInput;
