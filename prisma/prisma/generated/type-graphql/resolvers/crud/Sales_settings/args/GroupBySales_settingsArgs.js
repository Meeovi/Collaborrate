"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySales_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsOrderByWithAggregationInput_1 = require("../../../inputs/Sales_settingsOrderByWithAggregationInput");
const Sales_settingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/Sales_settingsScalarWhereWithAggregatesInput");
const Sales_settingsWhereInput_1 = require("../../../inputs/Sales_settingsWhereInput");
const Sales_settingsScalarFieldEnum_1 = require("../../../../enums/Sales_settingsScalarFieldEnum");
let GroupBySales_settingsArgs = class GroupBySales_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsWhereInput_1.Sales_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsWhereInput_1.Sales_settingsWhereInput)
], GroupBySales_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsOrderByWithAggregationInput_1.Sales_settingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySales_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sales_settingsScalarFieldEnum_1.Sales_settingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySales_settingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsScalarWhereWithAggregatesInput_1.Sales_settingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsScalarWhereWithAggregatesInput_1.Sales_settingsScalarWhereWithAggregatesInput)
], GroupBySales_settingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySales_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySales_settingsArgs.prototype, "skip", void 0);
GroupBySales_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySales_settingsArgs);
exports.GroupBySales_settingsArgs = GroupBySales_settingsArgs;
