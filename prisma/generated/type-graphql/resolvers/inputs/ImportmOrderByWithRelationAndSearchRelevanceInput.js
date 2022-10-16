"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ImportmOrderByRelevanceInput_1 = require("../inputs/ImportmOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ImportmOrderByWithRelationAndSearchRelevanceInput = class ImportmOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ImportmOrderByRelevanceInput_1.ImportmOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ImportmOrderByRelevanceInput_1.ImportmOrderByRelevanceInput)
], ImportmOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ImportmOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ImportmOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ImportmOrderByWithRelationAndSearchRelevanceInput);
exports.ImportmOrderByWithRelationAndSearchRelevanceInput = ImportmOrderByWithRelationAndSearchRelevanceInput;
