"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsOrderByRelevanceInput_1 = require("../inputs/SegmentsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SegmentsOrderByWithRelationAndSearchRelevanceInput = class SegmentsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "apply_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsOrderByRelevanceInput_1.SegmentsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsOrderByRelevanceInput_1.SegmentsOrderByRelevanceInput)
], SegmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SegmentsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SegmentsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SegmentsOrderByWithRelationAndSearchRelevanceInput);
exports.SegmentsOrderByWithRelationAndSearchRelevanceInput = SegmentsOrderByWithRelationAndSearchRelevanceInput;
