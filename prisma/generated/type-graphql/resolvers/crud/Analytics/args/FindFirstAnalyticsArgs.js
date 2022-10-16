"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput");
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
const AnalyticsScalarFieldEnum_1 = require("../../../../enums/AnalyticsScalarFieldEnum");
let FindFirstAnalyticsArgs = class FindFirstAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], FindFirstAnalyticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsOrderByWithRelationAndSearchRelevanceInput_1.AnalyticsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAnalyticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], FindFirstAnalyticsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAnalyticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAnalyticsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsScalarFieldEnum_1.AnalyticsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAnalyticsArgs.prototype, "distinct", void 0);
FindFirstAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAnalyticsArgs);
exports.FindFirstAnalyticsArgs = FindFirstAnalyticsArgs;
