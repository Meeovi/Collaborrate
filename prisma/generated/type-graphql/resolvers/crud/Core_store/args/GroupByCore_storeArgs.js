"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeOrderByWithAggregationInput_1 = require("../../../inputs/Core_storeOrderByWithAggregationInput");
const Core_storeScalarWhereWithAggregatesInput_1 = require("../../../inputs/Core_storeScalarWhereWithAggregatesInput");
const Core_storeWhereInput_1 = require("../../../inputs/Core_storeWhereInput");
const Core_storeScalarFieldEnum_1 = require("../../../../enums/Core_storeScalarFieldEnum");
let GroupByCore_storeArgs = class GroupByCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereInput_1.Core_storeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeWhereInput_1.Core_storeWhereInput)
], GroupByCore_storeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeOrderByWithAggregationInput_1.Core_storeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCore_storeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeScalarFieldEnum_1.Core_storeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCore_storeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeScalarWhereWithAggregatesInput_1.Core_storeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeScalarWhereWithAggregatesInput_1.Core_storeScalarWhereWithAggregatesInput)
], GroupByCore_storeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCore_storeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCore_storeArgs.prototype, "skip", void 0);
GroupByCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCore_storeArgs);
exports.GroupByCore_storeArgs = GroupByCore_storeArgs;
