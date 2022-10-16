"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/StatisticsOrderByWithRelationAndSearchRelevanceInput");
const StatisticsWhereInput_1 = require("../../../inputs/StatisticsWhereInput");
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
const StatisticsScalarFieldEnum_1 = require("../../../../enums/StatisticsScalarFieldEnum");
let FindManyStatisticsArgs = class FindManyStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereInput_1.StatisticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereInput_1.StatisticsWhereInput)
], FindManyStatisticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsOrderByWithRelationAndSearchRelevanceInput_1.StatisticsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStatisticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], FindManyStatisticsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStatisticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStatisticsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsScalarFieldEnum_1.StatisticsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStatisticsArgs.prototype, "distinct", void 0);
FindManyStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyStatisticsArgs);
exports.FindManyStatisticsArgs = FindManyStatisticsArgs;
