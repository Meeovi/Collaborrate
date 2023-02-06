"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersOrderByWithAggregationInput_1 = require("../../../inputs/ProvidersOrderByWithAggregationInput");
const ProvidersScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProvidersScalarWhereWithAggregatesInput");
const ProvidersWhereInput_1 = require("../../../inputs/ProvidersWhereInput");
const ProvidersScalarFieldEnum_1 = require("../../../../enums/ProvidersScalarFieldEnum");
let GroupByProvidersArgs = class GroupByProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], GroupByProvidersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersOrderByWithAggregationInput_1.ProvidersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProvidersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersScalarFieldEnum_1.ProvidersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProvidersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersScalarWhereWithAggregatesInput_1.ProvidersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersScalarWhereWithAggregatesInput_1.ProvidersScalarWhereWithAggregatesInput)
], GroupByProvidersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProvidersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProvidersArgs.prototype, "skip", void 0);
GroupByProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProvidersArgs);
exports.GroupByProvidersArgs = GroupByProvidersArgs;
