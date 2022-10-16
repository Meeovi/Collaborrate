"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesOrderByRelevanceFieldEnum_1 = require("../../enums/QuotesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let QuotesOrderByRelevanceInput = class QuotesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesOrderByRelevanceFieldEnum_1.QuotesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByRelevanceInput.prototype, "search", void 0);
QuotesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesOrderByRelevanceInput", {
        isAbstract: true
    })
], QuotesOrderByRelevanceInput);
exports.QuotesOrderByRelevanceInput = QuotesOrderByRelevanceInput;
