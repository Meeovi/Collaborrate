"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TagsOrderByRelevanceFieldEnum_1 = require("../../enums/TagsOrderByRelevanceFieldEnum");
let TagsOrderByRelevanceInput = class TagsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOrderByRelevanceFieldEnum_1.TagsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByRelevanceInput.prototype, "search", void 0);
TagsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOrderByRelevanceInput", {
        isAbstract: true
    })
], TagsOrderByRelevanceInput);
exports.TagsOrderByRelevanceInput = TagsOrderByRelevanceInput;
