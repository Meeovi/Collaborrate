"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryOrderByRelevanceInput_1 = require("../inputs/Tax_categoryOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categoryOrderByWithRelationAndSearchRelevanceInput = class Tax_categoryOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryOrderByRelevanceInput_1.Tax_categoryOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryOrderByRelevanceInput_1.Tax_categoryOrderByRelevanceInput)
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Tax_categoryOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Tax_categoryOrderByWithRelationAndSearchRelevanceInput);
exports.Tax_categoryOrderByWithRelationAndSearchRelevanceInput = Tax_categoryOrderByWithRelationAndSearchRelevanceInput;
