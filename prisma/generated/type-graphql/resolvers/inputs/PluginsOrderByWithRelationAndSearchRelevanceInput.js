"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsOrderByRelevanceInput_1 = require("../inputs/PluginsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PluginsOrderByWithRelationAndSearchRelevanceInput = class PluginsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "github_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "screenshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "last_updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "publisher_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "agree_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "publisher_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsOrderByRelevanceInput_1.PluginsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsOrderByRelevanceInput_1.PluginsOrderByRelevanceInput)
], PluginsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PluginsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PluginsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PluginsOrderByWithRelationAndSearchRelevanceInput);
exports.PluginsOrderByWithRelationAndSearchRelevanceInput = PluginsOrderByWithRelationAndSearchRelevanceInput;
