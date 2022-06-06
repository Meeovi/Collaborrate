"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleOrderByWithAggregationInput_1 = require("../../../inputs/Catalog_price_ruleOrderByWithAggregationInput");
const Catalog_price_ruleScalarWhereWithAggregatesInput_1 = require("../../../inputs/Catalog_price_ruleScalarWhereWithAggregatesInput");
const Catalog_price_ruleWhereInput_1 = require("../../../inputs/Catalog_price_ruleWhereInput");
const Catalog_price_ruleScalarFieldEnum_1 = require("../../../../enums/Catalog_price_ruleScalarFieldEnum");
let GroupByCatalog_price_ruleArgs = class GroupByCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput)
], GroupByCatalog_price_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithAggregationInput_1.Catalog_price_ruleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCatalog_price_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleScalarFieldEnum_1.Catalog_price_ruleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCatalog_price_ruleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleScalarWhereWithAggregatesInput_1.Catalog_price_ruleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleScalarWhereWithAggregatesInput_1.Catalog_price_ruleScalarWhereWithAggregatesInput)
], GroupByCatalog_price_ruleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCatalog_price_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCatalog_price_ruleArgs.prototype, "skip", void 0);
GroupByCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCatalog_price_ruleArgs);
exports.GroupByCatalog_price_ruleArgs = GroupByCatalog_price_ruleArgs;
