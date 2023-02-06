"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesOrderByWithAggregationInput_1 = require("../../../inputs/QuotesOrderByWithAggregationInput");
const QuotesScalarWhereWithAggregatesInput_1 = require("../../../inputs/QuotesScalarWhereWithAggregatesInput");
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
const QuotesScalarFieldEnum_1 = require("../../../../enums/QuotesScalarFieldEnum");
let GroupByQuotesArgs = class GroupByQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], GroupByQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesOrderByWithAggregationInput_1.QuotesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQuotesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarFieldEnum_1.QuotesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByQuotesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesScalarWhereWithAggregatesInput_1.QuotesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesScalarWhereWithAggregatesInput_1.QuotesScalarWhereWithAggregatesInput)
], GroupByQuotesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQuotesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByQuotesArgs.prototype, "skip", void 0);
GroupByQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByQuotesArgs);
exports.GroupByQuotesArgs = GroupByQuotesArgs;
