"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByWithAggregationInput_1 = require("../../../inputs/ReportsOrderByWithAggregationInput");
const ReportsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReportsScalarWhereWithAggregatesInput");
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
const ReportsScalarFieldEnum_1 = require("../../../../enums/ReportsScalarFieldEnum");
let GroupByReportsArgs = class GroupByReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], GroupByReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsOrderByWithAggregationInput_1.ReportsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReportsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsScalarFieldEnum_1.ReportsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReportsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsScalarWhereWithAggregatesInput_1.ReportsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsScalarWhereWithAggregatesInput_1.ReportsScalarWhereWithAggregatesInput)
], GroupByReportsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReportsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReportsArgs.prototype, "skip", void 0);
GroupByReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReportsArgs);
exports.GroupByReportsArgs = GroupByReportsArgs;
