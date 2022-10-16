"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput");
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
let AggregateAnalyticsArgs = class AggregateAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], AggregateAnalyticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsOrderByWithRelationAndSearchRelevanceInput_1.AnalyticsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAnalyticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], AggregateAnalyticsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAnalyticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAnalyticsArgs.prototype, "skip", void 0);
AggregateAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAnalyticsArgs);
exports.AggregateAnalyticsArgs = AggregateAnalyticsArgs;
