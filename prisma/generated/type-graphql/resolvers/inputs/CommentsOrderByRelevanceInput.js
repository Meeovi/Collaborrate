"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByRelevanceFieldEnum_1 = require("../../enums/CommentsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsOrderByRelevanceInput = class CommentsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsOrderByRelevanceFieldEnum_1.CommentsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByRelevanceInput.prototype, "search", void 0);
CommentsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsOrderByRelevanceInput", {
        isAbstract: true
    })
], CommentsOrderByRelevanceInput);
exports.CommentsOrderByRelevanceInput = CommentsOrderByRelevanceInput;
