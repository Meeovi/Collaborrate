"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsOrderByWithAggregationInput_1 = require("../../../inputs/PluginsOrderByWithAggregationInput");
const PluginsScalarWhereWithAggregatesInput_1 = require("../../../inputs/PluginsScalarWhereWithAggregatesInput");
const PluginsWhereInput_1 = require("../../../inputs/PluginsWhereInput");
const PluginsScalarFieldEnum_1 = require("../../../../enums/PluginsScalarFieldEnum");
let GroupByPluginsArgs = class GroupByPluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereInput_1.PluginsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereInput_1.PluginsWhereInput)
], GroupByPluginsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsOrderByWithAggregationInput_1.PluginsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPluginsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsScalarFieldEnum_1.PluginsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPluginsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsScalarWhereWithAggregatesInput_1.PluginsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsScalarWhereWithAggregatesInput_1.PluginsScalarWhereWithAggregatesInput)
], GroupByPluginsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPluginsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPluginsArgs.prototype, "skip", void 0);
GroupByPluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPluginsArgs);
exports.GroupByPluginsArgs = GroupByPluginsArgs;
