"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysOrderByWithRelationInput_1 = require("../../../inputs/SurveysOrderByWithRelationInput");
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let AggregateSurveysArgs = class AggregateSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], AggregateSurveysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysOrderByWithRelationInput_1.SurveysOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSurveysArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], AggregateSurveysArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSurveysArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSurveysArgs.prototype, "skip", void 0);
AggregateSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSurveysArgs);
exports.AggregateSurveysArgs = AggregateSurveysArgs;
