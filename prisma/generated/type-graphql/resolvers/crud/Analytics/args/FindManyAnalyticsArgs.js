"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput");
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
const AnalyticsScalarFieldEnum_1 = require("../../../../enums/AnalyticsScalarFieldEnum");
let FindManyAnalyticsArgs = class FindManyAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], FindManyAnalyticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsOrderByWithRelationAndSearchRelevanceInput_1.AnalyticsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAnalyticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], FindManyAnalyticsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAnalyticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAnalyticsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsScalarFieldEnum_1.AnalyticsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAnalyticsArgs.prototype, "distinct", void 0);
FindManyAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAnalyticsArgs);
exports.FindManyAnalyticsArgs = FindManyAnalyticsArgs;
