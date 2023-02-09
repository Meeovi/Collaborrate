"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesOrderByWithAggregationInput_1 = require("../../../inputs/TaxesOrderByWithAggregationInput");
const TaxesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TaxesScalarWhereWithAggregatesInput");
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
const TaxesScalarFieldEnum_1 = require("../../../../enums/TaxesScalarFieldEnum");
let GroupByTaxesArgs = class GroupByTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], GroupByTaxesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesOrderByWithAggregationInput_1.TaxesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaxesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesScalarFieldEnum_1.TaxesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTaxesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesScalarWhereWithAggregatesInput_1.TaxesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesScalarWhereWithAggregatesInput_1.TaxesScalarWhereWithAggregatesInput)
], GroupByTaxesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaxesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTaxesArgs.prototype, "skip", void 0);
GroupByTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTaxesArgs);
exports.GroupByTaxesArgs = GroupByTaxesArgs;
