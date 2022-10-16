"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleOrderByWithAggregationInput_1 = require("../../../inputs/Tax_ruleOrderByWithAggregationInput");
const Tax_ruleScalarWhereWithAggregatesInput_1 = require("../../../inputs/Tax_ruleScalarWhereWithAggregatesInput");
const Tax_ruleWhereInput_1 = require("../../../inputs/Tax_ruleWhereInput");
const Tax_ruleScalarFieldEnum_1 = require("../../../../enums/Tax_ruleScalarFieldEnum");
let GroupByTax_ruleArgs = class GroupByTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], GroupByTax_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleOrderByWithAggregationInput_1.Tax_ruleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarFieldEnum_1.Tax_ruleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_ruleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleScalarWhereWithAggregatesInput_1.Tax_ruleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleScalarWhereWithAggregatesInput_1.Tax_ruleScalarWhereWithAggregatesInput)
], GroupByTax_ruleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_ruleArgs.prototype, "skip", void 0);
GroupByTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTax_ruleArgs);
exports.GroupByTax_ruleArgs = GroupByTax_ruleArgs;
