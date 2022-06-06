"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsOrderByWithAggregationInput_1 = require("../../../inputs/Special_discountsOrderByWithAggregationInput");
const Special_discountsScalarWhereWithAggregatesInput_1 = require("../../../inputs/Special_discountsScalarWhereWithAggregatesInput");
const Special_discountsWhereInput_1 = require("../../../inputs/Special_discountsWhereInput");
const Special_discountsScalarFieldEnum_1 = require("../../../../enums/Special_discountsScalarFieldEnum");
let GroupBySpecial_discountsArgs = class GroupBySpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereInput_1.Special_discountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereInput_1.Special_discountsWhereInput)
], GroupBySpecial_discountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsOrderByWithAggregationInput_1.Special_discountsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySpecial_discountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsScalarFieldEnum_1.Special_discountsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySpecial_discountsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsScalarWhereWithAggregatesInput_1.Special_discountsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsScalarWhereWithAggregatesInput_1.Special_discountsScalarWhereWithAggregatesInput)
], GroupBySpecial_discountsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySpecial_discountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySpecial_discountsArgs.prototype, "skip", void 0);
GroupBySpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySpecial_discountsArgs);
exports.GroupBySpecial_discountsArgs = GroupBySpecial_discountsArgs;
