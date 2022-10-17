"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesOrderByRelevanceFieldEnum_1 = require("../../enums/ArticlesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ArticlesOrderByRelevanceInput = class ArticlesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesOrderByRelevanceFieldEnum_1.ArticlesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ArticlesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesOrderByRelevanceInput.prototype, "search", void 0);
ArticlesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArticlesOrderByRelevanceInput", {
        isAbstract: true
    })
], ArticlesOrderByRelevanceInput);
exports.ArticlesOrderByRelevanceInput = ArticlesOrderByRelevanceInput;
