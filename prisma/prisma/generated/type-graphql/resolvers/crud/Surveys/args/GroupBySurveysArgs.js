"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysOrderByWithAggregationInput_1 = require("../../../inputs/SurveysOrderByWithAggregationInput");
const SurveysScalarWhereWithAggregatesInput_1 = require("../../../inputs/SurveysScalarWhereWithAggregatesInput");
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
const SurveysScalarFieldEnum_1 = require("../../../../enums/SurveysScalarFieldEnum");
let GroupBySurveysArgs = class GroupBySurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], GroupBySurveysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysOrderByWithAggregationInput_1.SurveysOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySurveysArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysScalarFieldEnum_1.SurveysScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySurveysArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysScalarWhereWithAggregatesInput_1.SurveysScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysScalarWhereWithAggregatesInput_1.SurveysScalarWhereWithAggregatesInput)
], GroupBySurveysArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySurveysArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySurveysArgs.prototype, "skip", void 0);
GroupBySurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySurveysArgs);
exports.GroupBySurveysArgs = GroupBySurveysArgs;
