"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPaymentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByWithAggregationInput_1 = require("../../../inputs/PaymentsOrderByWithAggregationInput");
const PaymentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/PaymentsScalarWhereWithAggregatesInput");
const PaymentsWhereInput_1 = require("../../../inputs/PaymentsWhereInput");
const PaymentsScalarFieldEnum_1 = require("../../../../enums/PaymentsScalarFieldEnum");
let GroupByPaymentsArgs = class GroupByPaymentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsWhereInput_1.PaymentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsWhereInput_1.PaymentsWhereInput)
], GroupByPaymentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByWithAggregationInput_1.PaymentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPaymentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum_1.PaymentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPaymentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsScalarWhereWithAggregatesInput_1.PaymentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsScalarWhereWithAggregatesInput_1.PaymentsScalarWhereWithAggregatesInput)
], GroupByPaymentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPaymentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPaymentsArgs.prototype, "skip", void 0);
GroupByPaymentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPaymentsArgs);
exports.GroupByPaymentsArgs = GroupByPaymentsArgs;
