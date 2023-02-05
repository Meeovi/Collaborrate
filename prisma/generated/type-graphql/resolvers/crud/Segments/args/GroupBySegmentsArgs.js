"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsOrderByWithAggregationInput_1 = require("../../../inputs/SegmentsOrderByWithAggregationInput");
const SegmentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/SegmentsScalarWhereWithAggregatesInput");
const SegmentsWhereInput_1 = require("../../../inputs/SegmentsWhereInput");
const SegmentsScalarFieldEnum_1 = require("../../../../enums/SegmentsScalarFieldEnum");
let GroupBySegmentsArgs = class GroupBySegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereInput_1.SegmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsWhereInput_1.SegmentsWhereInput)
], GroupBySegmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsOrderByWithAggregationInput_1.SegmentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySegmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsScalarFieldEnum_1.SegmentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySegmentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsScalarWhereWithAggregatesInput_1.SegmentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsScalarWhereWithAggregatesInput_1.SegmentsScalarWhereWithAggregatesInput)
], GroupBySegmentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySegmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySegmentsArgs.prototype, "skip", void 0);
GroupBySegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySegmentsArgs);
exports.GroupBySegmentsArgs = GroupBySegmentsArgs;
