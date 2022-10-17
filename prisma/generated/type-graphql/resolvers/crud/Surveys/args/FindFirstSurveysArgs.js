"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SurveysOrderByWithRelationAndSearchRelevanceInput");
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
const SurveysScalarFieldEnum_1 = require("../../../../enums/SurveysScalarFieldEnum");
let FindFirstSurveysArgs = class FindFirstSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], FindFirstSurveysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysOrderByWithRelationAndSearchRelevanceInput_1.SurveysOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSurveysArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], FindFirstSurveysArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSurveysArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSurveysArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysScalarFieldEnum_1.SurveysScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSurveysArgs.prototype, "distinct", void 0);
FindFirstSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSurveysArgs);
exports.FindFirstSurveysArgs = FindFirstSurveysArgs;
