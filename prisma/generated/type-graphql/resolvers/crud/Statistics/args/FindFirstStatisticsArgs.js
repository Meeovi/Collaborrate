"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsOrderByWithRelationInput_1 = require("../../../inputs/StatisticsOrderByWithRelationInput");
const StatisticsWhereInput_1 = require("../../../inputs/StatisticsWhereInput");
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
const StatisticsScalarFieldEnum_1 = require("../../../../enums/StatisticsScalarFieldEnum");
let FindFirstStatisticsArgs = class FindFirstStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereInput_1.StatisticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereInput_1.StatisticsWhereInput)
], FindFirstStatisticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsOrderByWithRelationInput_1.StatisticsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatisticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], FindFirstStatisticsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatisticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatisticsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsScalarFieldEnum_1.StatisticsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatisticsArgs.prototype, "distinct", void 0);
FindFirstStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstStatisticsArgs);
exports.FindFirstStatisticsArgs = FindFirstStatisticsArgs;
