"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeOrderByRelevanceFieldEnum_1 = require("../../enums/Content_typeOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Content_typeOrderByRelevanceInput = class Content_typeOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeOrderByRelevanceFieldEnum_1.Content_typeOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Content_typeOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByRelevanceInput.prototype, "search", void 0);
Content_typeOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Content_typeOrderByRelevanceInput", {
        isAbstract: true
    })
], Content_typeOrderByRelevanceInput);
exports.Content_typeOrderByRelevanceInput = Content_typeOrderByRelevanceInput;
