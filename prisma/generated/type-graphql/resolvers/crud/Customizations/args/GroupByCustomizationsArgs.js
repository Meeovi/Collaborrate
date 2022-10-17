"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsOrderByWithAggregationInput_1 = require("../../../inputs/CustomizationsOrderByWithAggregationInput");
const CustomizationsScalarWhereWithAggregatesInput_1 = require("../../../inputs/CustomizationsScalarWhereWithAggregatesInput");
const CustomizationsWhereInput_1 = require("../../../inputs/CustomizationsWhereInput");
const CustomizationsScalarFieldEnum_1 = require("../../../../enums/CustomizationsScalarFieldEnum");
let GroupByCustomizationsArgs = class GroupByCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereInput_1.CustomizationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereInput_1.CustomizationsWhereInput)
], GroupByCustomizationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsOrderByWithAggregationInput_1.CustomizationsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomizationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsScalarFieldEnum_1.CustomizationsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomizationsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsScalarWhereWithAggregatesInput_1.CustomizationsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsScalarWhereWithAggregatesInput_1.CustomizationsScalarWhereWithAggregatesInput)
], GroupByCustomizationsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomizationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomizationsArgs.prototype, "skip", void 0);
GroupByCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCustomizationsArgs);
exports.GroupByCustomizationsArgs = GroupByCustomizationsArgs;
