"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsOrderByWithAggregationInput_1 = require("../../../inputs/TargetsOrderByWithAggregationInput");
const TargetsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TargetsScalarWhereWithAggregatesInput");
const TargetsWhereInput_1 = require("../../../inputs/TargetsWhereInput");
const TargetsScalarFieldEnum_1 = require("../../../../enums/TargetsScalarFieldEnum");
let GroupByTargetsArgs = class GroupByTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereInput_1.TargetsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereInput_1.TargetsWhereInput)
], GroupByTargetsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsOrderByWithAggregationInput_1.TargetsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTargetsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsScalarFieldEnum_1.TargetsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTargetsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsScalarWhereWithAggregatesInput_1.TargetsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsScalarWhereWithAggregatesInput_1.TargetsScalarWhereWithAggregatesInput)
], GroupByTargetsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTargetsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTargetsArgs.prototype, "skip", void 0);
GroupByTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTargetsArgs);
exports.GroupByTargetsArgs = GroupByTargetsArgs;
