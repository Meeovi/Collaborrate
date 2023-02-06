"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsOrderByRelevanceInput_1 = require("../inputs/IntegrationsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IntegrationsOrderByWithRelationAndSearchRelevanceInput = class IntegrationsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsOrderByRelevanceInput_1.IntegrationsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsOrderByRelevanceInput_1.IntegrationsOrderByRelevanceInput)
], IntegrationsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
IntegrationsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], IntegrationsOrderByWithRelationAndSearchRelevanceInput);
exports.IntegrationsOrderByWithRelationAndSearchRelevanceInput = IntegrationsOrderByWithRelationAndSearchRelevanceInput;
