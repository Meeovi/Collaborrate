"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByWithAggregationInput_1 = require("../../../inputs/General_settingsOrderByWithAggregationInput");
const General_settingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/General_settingsScalarWhereWithAggregatesInput");
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
const General_settingsScalarFieldEnum_1 = require("../../../../enums/General_settingsScalarFieldEnum");
let GroupByGeneral_settingsArgs = class GroupByGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], GroupByGeneral_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsOrderByWithAggregationInput_1.General_settingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGeneral_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsScalarFieldEnum_1.General_settingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGeneral_settingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsScalarWhereWithAggregatesInput_1.General_settingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsScalarWhereWithAggregatesInput_1.General_settingsScalarWhereWithAggregatesInput)
], GroupByGeneral_settingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGeneral_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGeneral_settingsArgs.prototype, "skip", void 0);
GroupByGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByGeneral_settingsArgs);
exports.GroupByGeneral_settingsArgs = GroupByGeneral_settingsArgs;
