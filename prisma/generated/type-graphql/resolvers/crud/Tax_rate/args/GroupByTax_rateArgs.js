"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateOrderByWithAggregationInput_1 = require("../../../inputs/Tax_rateOrderByWithAggregationInput");
const Tax_rateScalarWhereWithAggregatesInput_1 = require("../../../inputs/Tax_rateScalarWhereWithAggregatesInput");
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
const Tax_rateScalarFieldEnum_1 = require("../../../../enums/Tax_rateScalarFieldEnum");
let GroupByTax_rateArgs = class GroupByTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], GroupByTax_rateArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateOrderByWithAggregationInput_1.Tax_rateOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_rateArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateScalarFieldEnum_1.Tax_rateScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_rateArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateScalarWhereWithAggregatesInput_1.Tax_rateScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateScalarWhereWithAggregatesInput_1.Tax_rateScalarWhereWithAggregatesInput)
], GroupByTax_rateArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_rateArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_rateArgs.prototype, "skip", void 0);
GroupByTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTax_rateArgs);
exports.GroupByTax_rateArgs = GroupByTax_rateArgs;
