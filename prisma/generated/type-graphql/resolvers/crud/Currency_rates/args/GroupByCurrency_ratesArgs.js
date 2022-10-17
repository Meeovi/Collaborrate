"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesOrderByWithAggregationInput_1 = require("../../../inputs/Currency_ratesOrderByWithAggregationInput");
const Currency_ratesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Currency_ratesScalarWhereWithAggregatesInput");
const Currency_ratesWhereInput_1 = require("../../../inputs/Currency_ratesWhereInput");
const Currency_ratesScalarFieldEnum_1 = require("../../../../enums/Currency_ratesScalarFieldEnum");
let GroupByCurrency_ratesArgs = class GroupByCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereInput_1.Currency_ratesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereInput_1.Currency_ratesWhereInput)
], GroupByCurrency_ratesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesOrderByWithAggregationInput_1.Currency_ratesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrency_ratesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesScalarFieldEnum_1.Currency_ratesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrency_ratesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesScalarWhereWithAggregatesInput_1.Currency_ratesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesScalarWhereWithAggregatesInput_1.Currency_ratesScalarWhereWithAggregatesInput)
], GroupByCurrency_ratesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrency_ratesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrency_ratesArgs.prototype, "skip", void 0);
GroupByCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCurrency_ratesArgs);
exports.GroupByCurrency_ratesArgs = GroupByCurrency_ratesArgs;
