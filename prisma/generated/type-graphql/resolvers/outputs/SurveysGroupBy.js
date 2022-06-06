"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const SurveysAvgAggregate_1 = require("../outputs/SurveysAvgAggregate");
const SurveysCountAggregate_1 = require("../outputs/SurveysCountAggregate");
const SurveysMaxAggregate_1 = require("../outputs/SurveysMaxAggregate");
const SurveysMinAggregate_1 = require("../outputs/SurveysMinAggregate");
const SurveysSumAggregate_1 = require("../outputs/SurveysSumAggregate");
let SurveysGroupBy = class SurveysGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SurveysGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SurveysGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "answer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "submit_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "satisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "neither_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysGroupBy.prototype, "dissatisfied_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCountAggregate_1.SurveysCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysCountAggregate_1.SurveysCountAggregate)
], SurveysGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysAvgAggregate_1.SurveysAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysAvgAggregate_1.SurveysAvgAggregate)
], SurveysGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysSumAggregate_1.SurveysSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysSumAggregate_1.SurveysSumAggregate)
], SurveysGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMinAggregate_1.SurveysMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMinAggregate_1.SurveysMinAggregate)
], SurveysGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMaxAggregate_1.SurveysMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMaxAggregate_1.SurveysMaxAggregate)
], SurveysGroupBy.prototype, "_max", void 0);
SurveysGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SurveysGroupBy", {
        isAbstract: true
    })
], SurveysGroupBy);
exports.SurveysGroupBy = SurveysGroupBy;
