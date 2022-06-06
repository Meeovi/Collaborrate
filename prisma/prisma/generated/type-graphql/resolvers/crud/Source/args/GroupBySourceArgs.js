"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceOrderByWithAggregationInput_1 = require("../../../inputs/SourceOrderByWithAggregationInput");
const SourceScalarWhereWithAggregatesInput_1 = require("../../../inputs/SourceScalarWhereWithAggregatesInput");
const SourceWhereInput_1 = require("../../../inputs/SourceWhereInput");
const SourceScalarFieldEnum_1 = require("../../../../enums/SourceScalarFieldEnum");
let GroupBySourceArgs = class GroupBySourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereInput_1.SourceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereInput_1.SourceWhereInput)
], GroupBySourceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceOrderByWithAggregationInput_1.SourceOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySourceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceScalarFieldEnum_1.SourceScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySourceArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceScalarWhereWithAggregatesInput_1.SourceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceScalarWhereWithAggregatesInput_1.SourceScalarWhereWithAggregatesInput)
], GroupBySourceArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySourceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySourceArgs.prototype, "skip", void 0);
GroupBySourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySourceArgs);
exports.GroupBySourceArgs = GroupBySourceArgs;
