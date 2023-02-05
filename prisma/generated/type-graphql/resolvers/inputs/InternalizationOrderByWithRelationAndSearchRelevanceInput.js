"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationOrderByRelevanceInput_1 = require("../inputs/InternalizationOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InternalizationOrderByWithRelationAndSearchRelevanceInput = class InternalizationOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationOrderByRelevanceInput_1.InternalizationOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationOrderByRelevanceInput_1.InternalizationOrderByRelevanceInput)
], InternalizationOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
InternalizationOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], InternalizationOrderByWithRelationAndSearchRelevanceInput);
exports.InternalizationOrderByWithRelationAndSearchRelevanceInput = InternalizationOrderByWithRelationAndSearchRelevanceInput;
