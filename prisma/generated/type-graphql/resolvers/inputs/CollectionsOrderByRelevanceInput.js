"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsOrderByRelevanceFieldEnum_1 = require("../../enums/CollectionsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CollectionsOrderByRelevanceInput = class CollectionsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsOrderByRelevanceFieldEnum_1.CollectionsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CollectionsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByRelevanceInput.prototype, "search", void 0);
CollectionsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CollectionsOrderByRelevanceInput", {
        isAbstract: true
    })
], CollectionsOrderByRelevanceInput);
exports.CollectionsOrderByRelevanceInput = CollectionsOrderByRelevanceInput;
