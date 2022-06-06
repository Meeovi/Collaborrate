"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsOrderByWithAggregationInput_1 = require("../../../inputs/ContractsOrderByWithAggregationInput");
const ContractsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ContractsScalarWhereWithAggregatesInput");
const ContractsWhereInput_1 = require("../../../inputs/ContractsWhereInput");
const ContractsScalarFieldEnum_1 = require("../../../../enums/ContractsScalarFieldEnum");
let GroupByContractsArgs = class GroupByContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsWhereInput_1.ContractsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsWhereInput_1.ContractsWhereInput)
], GroupByContractsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsOrderByWithAggregationInput_1.ContractsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByContractsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsScalarFieldEnum_1.ContractsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByContractsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ContractsScalarWhereWithAggregatesInput_1.ContractsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ContractsScalarWhereWithAggregatesInput_1.ContractsScalarWhereWithAggregatesInput)
], GroupByContractsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByContractsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByContractsArgs.prototype, "skip", void 0);
GroupByContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByContractsArgs);
exports.GroupByContractsArgs = GroupByContractsArgs;
