"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByRelevanceFieldEnum_1 = require("../../enums/NewslettersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let NewslettersOrderByRelevanceInput = class NewslettersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersOrderByRelevanceFieldEnum_1.NewslettersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], NewslettersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByRelevanceInput.prototype, "search", void 0);
NewslettersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NewslettersOrderByRelevanceInput", {
        isAbstract: true
    })
], NewslettersOrderByRelevanceInput);
exports.NewslettersOrderByRelevanceInput = NewslettersOrderByRelevanceInput;
