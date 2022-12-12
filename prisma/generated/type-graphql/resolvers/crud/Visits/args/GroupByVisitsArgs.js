"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsOrderByWithAggregationInput_1 = require("../../../inputs/VisitsOrderByWithAggregationInput");
const VisitsScalarWhereWithAggregatesInput_1 = require("../../../inputs/VisitsScalarWhereWithAggregatesInput");
const VisitsWhereInput_1 = require("../../../inputs/VisitsWhereInput");
const VisitsScalarFieldEnum_1 = require("../../../../enums/VisitsScalarFieldEnum");
let GroupByVisitsArgs = class GroupByVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereInput_1.VisitsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsWhereInput_1.VisitsWhereInput)
], GroupByVisitsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsOrderByWithAggregationInput_1.VisitsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisitsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsScalarFieldEnum_1.VisitsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisitsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsScalarWhereWithAggregatesInput_1.VisitsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsScalarWhereWithAggregatesInput_1.VisitsScalarWhereWithAggregatesInput)
], GroupByVisitsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisitsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisitsArgs.prototype, "skip", void 0);
GroupByVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVisitsArgs);
exports.GroupByVisitsArgs = GroupByVisitsArgs;
