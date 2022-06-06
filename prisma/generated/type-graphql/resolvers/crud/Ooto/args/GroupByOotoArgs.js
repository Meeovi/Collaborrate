"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByWithAggregationInput_1 = require("../../../inputs/OotoOrderByWithAggregationInput");
const OotoScalarWhereWithAggregatesInput_1 = require("../../../inputs/OotoScalarWhereWithAggregatesInput");
const OotoWhereInput_1 = require("../../../inputs/OotoWhereInput");
const OotoScalarFieldEnum_1 = require("../../../../enums/OotoScalarFieldEnum");
let GroupByOotoArgs = class GroupByOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereInput_1.OotoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoWhereInput_1.OotoWhereInput)
], GroupByOotoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoOrderByWithAggregationInput_1.OotoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOotoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoScalarFieldEnum_1.OotoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOotoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoScalarWhereWithAggregatesInput_1.OotoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoScalarWhereWithAggregatesInput_1.OotoScalarWhereWithAggregatesInput)
], GroupByOotoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOotoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOotoArgs.prototype, "skip", void 0);
GroupByOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOotoArgs);
exports.GroupByOotoArgs = GroupByOotoArgs;
