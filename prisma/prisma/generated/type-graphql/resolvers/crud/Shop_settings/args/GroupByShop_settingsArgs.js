"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsOrderByWithAggregationInput_1 = require("../../../inputs/Shop_settingsOrderByWithAggregationInput");
const Shop_settingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/Shop_settingsScalarWhereWithAggregatesInput");
const Shop_settingsWhereInput_1 = require("../../../inputs/Shop_settingsWhereInput");
const Shop_settingsScalarFieldEnum_1 = require("../../../../enums/Shop_settingsScalarFieldEnum");
let GroupByShop_settingsArgs = class GroupByShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereInput_1.Shop_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereInput_1.Shop_settingsWhereInput)
], GroupByShop_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsOrderByWithAggregationInput_1.Shop_settingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShop_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsScalarFieldEnum_1.Shop_settingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShop_settingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsScalarWhereWithAggregatesInput_1.Shop_settingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsScalarWhereWithAggregatesInput_1.Shop_settingsScalarWhereWithAggregatesInput)
], GroupByShop_settingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShop_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShop_settingsArgs.prototype, "skip", void 0);
GroupByShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShop_settingsArgs);
exports.GroupByShop_settingsArgs = GroupByShop_settingsArgs;
