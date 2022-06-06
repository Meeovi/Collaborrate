"use strict";
var SurveysWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SurveysWhereInput = SurveysWhereInput_1 = class SurveysWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SurveysWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SurveysWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SurveysWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], SurveysWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SurveysWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "answer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "submit_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "satisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "neither_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SurveysWhereInput.prototype, "dissatisfied_text", void 0);
SurveysWhereInput = SurveysWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysWhereInput", {
        isAbstract: true
    })
], SurveysWhereInput);
exports.SurveysWhereInput = SurveysWhereInput;
