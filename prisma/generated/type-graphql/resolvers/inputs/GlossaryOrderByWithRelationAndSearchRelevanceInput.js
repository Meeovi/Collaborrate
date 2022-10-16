"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByRelevanceInput_1 = require("../inputs/GlossaryOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let GlossaryOrderByWithRelationAndSearchRelevanceInput = class GlossaryOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryOrderByRelevanceInput_1.GlossaryOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryOrderByRelevanceInput_1.GlossaryOrderByRelevanceInput)
], GlossaryOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
GlossaryOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], GlossaryOrderByWithRelationAndSearchRelevanceInput);
exports.GlossaryOrderByWithRelationAndSearchRelevanceInput = GlossaryOrderByWithRelationAndSearchRelevanceInput;
