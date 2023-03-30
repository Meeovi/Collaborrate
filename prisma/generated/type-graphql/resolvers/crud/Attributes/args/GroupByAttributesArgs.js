"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesOrderByWithAggregationInput_1 = require("../../../inputs/AttributesOrderByWithAggregationInput");
const AttributesScalarWhereWithAggregatesInput_1 = require("../../../inputs/AttributesScalarWhereWithAggregatesInput");
const AttributesWhereInput_1 = require("../../../inputs/AttributesWhereInput");
const AttributesScalarFieldEnum_1 = require("../../../../enums/AttributesScalarFieldEnum");
let GroupByAttributesArgs = class GroupByAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereInput_1.AttributesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereInput_1.AttributesWhereInput)
], GroupByAttributesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesOrderByWithAggregationInput_1.AttributesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAttributesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesScalarFieldEnum_1.AttributesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAttributesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesScalarWhereWithAggregatesInput_1.AttributesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesScalarWhereWithAggregatesInput_1.AttributesScalarWhereWithAggregatesInput)
], GroupByAttributesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAttributesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAttributesArgs.prototype, "skip", void 0);
GroupByAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAttributesArgs);
exports.GroupByAttributesArgs = GroupByAttributesArgs;
