"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsOrderByWithAggregationInput_1 = require("../../../inputs/ReturnsOrderByWithAggregationInput");
const ReturnsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReturnsScalarWhereWithAggregatesInput");
const ReturnsWhereInput_1 = require("../../../inputs/ReturnsWhereInput");
const ReturnsScalarFieldEnum_1 = require("../../../../enums/ReturnsScalarFieldEnum");
let GroupByReturnsArgs = class GroupByReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], GroupByReturnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsOrderByWithAggregationInput_1.ReturnsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReturnsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsScalarFieldEnum_1.ReturnsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReturnsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsScalarWhereWithAggregatesInput_1.ReturnsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsScalarWhereWithAggregatesInput_1.ReturnsScalarWhereWithAggregatesInput)
], GroupByReturnsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReturnsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReturnsArgs.prototype, "skip", void 0);
GroupByReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReturnsArgs);
exports.GroupByReturnsArgs = GroupByReturnsArgs;
