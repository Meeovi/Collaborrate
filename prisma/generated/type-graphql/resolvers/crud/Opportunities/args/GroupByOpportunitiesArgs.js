"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesOrderByWithAggregationInput_1 = require("../../../inputs/OpportunitiesOrderByWithAggregationInput");
const OpportunitiesScalarWhereWithAggregatesInput_1 = require("../../../inputs/OpportunitiesScalarWhereWithAggregatesInput");
const OpportunitiesWhereInput_1 = require("../../../inputs/OpportunitiesWhereInput");
const OpportunitiesScalarFieldEnum_1 = require("../../../../enums/OpportunitiesScalarFieldEnum");
let GroupByOpportunitiesArgs = class GroupByOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereInput_1.OpportunitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereInput_1.OpportunitiesWhereInput)
], GroupByOpportunitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesOrderByWithAggregationInput_1.OpportunitiesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOpportunitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesScalarFieldEnum_1.OpportunitiesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOpportunitiesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesScalarWhereWithAggregatesInput_1.OpportunitiesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OpportunitiesScalarWhereWithAggregatesInput_1.OpportunitiesScalarWhereWithAggregatesInput)
], GroupByOpportunitiesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOpportunitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOpportunitiesArgs.prototype, "skip", void 0);
GroupByOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOpportunitiesArgs);
exports.GroupByOpportunitiesArgs = GroupByOpportunitiesArgs;
