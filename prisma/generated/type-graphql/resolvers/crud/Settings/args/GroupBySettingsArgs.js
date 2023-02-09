"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsOrderByWithAggregationInput_1 = require("../../../inputs/SettingsOrderByWithAggregationInput");
const SettingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/SettingsScalarWhereWithAggregatesInput");
const SettingsWhereInput_1 = require("../../../inputs/SettingsWhereInput");
const SettingsScalarFieldEnum_1 = require("../../../../enums/SettingsScalarFieldEnum");
let GroupBySettingsArgs = class GroupBySettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereInput_1.SettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereInput_1.SettingsWhereInput)
], GroupBySettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsOrderByWithAggregationInput_1.SettingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsScalarFieldEnum_1.SettingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySettingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsScalarWhereWithAggregatesInput_1.SettingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsScalarWhereWithAggregatesInput_1.SettingsScalarWhereWithAggregatesInput)
], GroupBySettingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySettingsArgs.prototype, "skip", void 0);
GroupBySettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySettingsArgs);
exports.GroupBySettingsArgs = GroupBySettingsArgs;
