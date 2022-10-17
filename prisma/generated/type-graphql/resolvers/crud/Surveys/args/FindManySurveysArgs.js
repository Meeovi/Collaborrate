"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SurveysOrderByWithRelationAndSearchRelevanceInput");
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
const SurveysScalarFieldEnum_1 = require("../../../../enums/SurveysScalarFieldEnum");
let FindManySurveysArgs = class FindManySurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], FindManySurveysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysOrderByWithRelationAndSearchRelevanceInput_1.SurveysOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySurveysArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], FindManySurveysArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySurveysArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySurveysArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysScalarFieldEnum_1.SurveysScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySurveysArgs.prototype, "distinct", void 0);
FindManySurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySurveysArgs);
exports.FindManySurveysArgs = FindManySurveysArgs;
