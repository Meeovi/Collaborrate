"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysAvgOrderByAggregateInput_1 = require("../inputs/SurveysAvgOrderByAggregateInput");
const SurveysCountOrderByAggregateInput_1 = require("../inputs/SurveysCountOrderByAggregateInput");
const SurveysMaxOrderByAggregateInput_1 = require("../inputs/SurveysMaxOrderByAggregateInput");
const SurveysMinOrderByAggregateInput_1 = require("../inputs/SurveysMinOrderByAggregateInput");
const SurveysSumOrderByAggregateInput_1 = require("../inputs/SurveysSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SurveysOrderByWithAggregationInput = class SurveysOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "answer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "submit_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "satisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "neither_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByWithAggregationInput.prototype, "dissatisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCountOrderByAggregateInput_1.SurveysCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysCountOrderByAggregateInput_1.SurveysCountOrderByAggregateInput)
], SurveysOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysAvgOrderByAggregateInput_1.SurveysAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysAvgOrderByAggregateInput_1.SurveysAvgOrderByAggregateInput)
], SurveysOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMaxOrderByAggregateInput_1.SurveysMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMaxOrderByAggregateInput_1.SurveysMaxOrderByAggregateInput)
], SurveysOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMinOrderByAggregateInput_1.SurveysMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMinOrderByAggregateInput_1.SurveysMinOrderByAggregateInput)
], SurveysOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysSumOrderByAggregateInput_1.SurveysSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysSumOrderByAggregateInput_1.SurveysSumOrderByAggregateInput)
], SurveysOrderByWithAggregationInput.prototype, "_sum", void 0);
SurveysOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysOrderByWithAggregationInput", {
        isAbstract: true
    })
], SurveysOrderByWithAggregationInput);
exports.SurveysOrderByWithAggregationInput = SurveysOrderByWithAggregationInput;
