"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysOrderByRelevanceInput_1 = require("../inputs/SurveysOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SurveysOrderByWithRelationAndSearchRelevanceInput = class SurveysOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "answer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "submit_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "satisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "neither_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "dissatisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysOrderByRelevanceInput_1.SurveysOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysOrderByRelevanceInput_1.SurveysOrderByRelevanceInput)
], SurveysOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SurveysOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SurveysOrderByWithRelationAndSearchRelevanceInput);
exports.SurveysOrderByWithRelationAndSearchRelevanceInput = SurveysOrderByWithRelationAndSearchRelevanceInput;
