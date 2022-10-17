"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryOrderByWithAggregationInput_1 = require("../../../inputs/Tax_categoryOrderByWithAggregationInput");
const Tax_categoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/Tax_categoryScalarWhereWithAggregatesInput");
const Tax_categoryWhereInput_1 = require("../../../inputs/Tax_categoryWhereInput");
const Tax_categoryScalarFieldEnum_1 = require("../../../../enums/Tax_categoryScalarFieldEnum");
let GroupByTax_categoryArgs = class GroupByTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereInput_1.Tax_categoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereInput_1.Tax_categoryWhereInput)
], GroupByTax_categoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryOrderByWithAggregationInput_1.Tax_categoryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_categoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryScalarFieldEnum_1.Tax_categoryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTax_categoryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryScalarWhereWithAggregatesInput_1.Tax_categoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryScalarWhereWithAggregatesInput_1.Tax_categoryScalarWhereWithAggregatesInput)
], GroupByTax_categoryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_categoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTax_categoryArgs.prototype, "skip", void 0);
GroupByTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTax_categoryArgs);
exports.GroupByTax_categoryArgs = GroupByTax_categoryArgs;
