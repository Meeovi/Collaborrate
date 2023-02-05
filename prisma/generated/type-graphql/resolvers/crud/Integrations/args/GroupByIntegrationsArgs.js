"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsOrderByWithAggregationInput_1 = require("../../../inputs/IntegrationsOrderByWithAggregationInput");
const IntegrationsScalarWhereWithAggregatesInput_1 = require("../../../inputs/IntegrationsScalarWhereWithAggregatesInput");
const IntegrationsWhereInput_1 = require("../../../inputs/IntegrationsWhereInput");
const IntegrationsScalarFieldEnum_1 = require("../../../../enums/IntegrationsScalarFieldEnum");
let GroupByIntegrationsArgs = class GroupByIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereInput_1.IntegrationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereInput_1.IntegrationsWhereInput)
], GroupByIntegrationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsOrderByWithAggregationInput_1.IntegrationsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIntegrationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsScalarFieldEnum_1.IntegrationsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByIntegrationsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsScalarWhereWithAggregatesInput_1.IntegrationsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsScalarWhereWithAggregatesInput_1.IntegrationsScalarWhereWithAggregatesInput)
], GroupByIntegrationsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIntegrationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByIntegrationsArgs.prototype, "skip", void 0);
GroupByIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByIntegrationsArgs);
exports.GroupByIntegrationsArgs = GroupByIntegrationsArgs;
