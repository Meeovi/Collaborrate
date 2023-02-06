"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesOrderByWithAggregationInput_1 = require("../../../inputs/ThemesOrderByWithAggregationInput");
const ThemesScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThemesScalarWhereWithAggregatesInput");
const ThemesWhereInput_1 = require("../../../inputs/ThemesWhereInput");
const ThemesScalarFieldEnum_1 = require("../../../../enums/ThemesScalarFieldEnum");
let GroupByThemesArgs = class GroupByThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], GroupByThemesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesOrderByWithAggregationInput_1.ThemesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThemesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarFieldEnum_1.ThemesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThemesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesScalarWhereWithAggregatesInput_1.ThemesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesScalarWhereWithAggregatesInput_1.ThemesScalarWhereWithAggregatesInput)
], GroupByThemesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThemesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThemesArgs.prototype, "skip", void 0);
GroupByThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThemesArgs);
exports.GroupByThemesArgs = GroupByThemesArgs;
