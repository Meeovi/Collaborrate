"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSurveys = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysAvgAggregate_1 = require("../outputs/SurveysAvgAggregate");
const SurveysCountAggregate_1 = require("../outputs/SurveysCountAggregate");
const SurveysMaxAggregate_1 = require("../outputs/SurveysMaxAggregate");
const SurveysMinAggregate_1 = require("../outputs/SurveysMinAggregate");
const SurveysSumAggregate_1 = require("../outputs/SurveysSumAggregate");
let AggregateSurveys = class AggregateSurveys {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCountAggregate_1.SurveysCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysCountAggregate_1.SurveysCountAggregate)
], AggregateSurveys.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysAvgAggregate_1.SurveysAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysAvgAggregate_1.SurveysAvgAggregate)
], AggregateSurveys.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysSumAggregate_1.SurveysSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysSumAggregate_1.SurveysSumAggregate)
], AggregateSurveys.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMinAggregate_1.SurveysMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMinAggregate_1.SurveysMinAggregate)
], AggregateSurveys.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysMaxAggregate_1.SurveysMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysMaxAggregate_1.SurveysMaxAggregate)
], AggregateSurveys.prototype, "_max", void 0);
AggregateSurveys = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSurveys", {
        isAbstract: true
    })
], AggregateSurveys);
exports.AggregateSurveys = AggregateSurveys;
