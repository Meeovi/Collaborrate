"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesOrderByWithAggregationInput_1 = require("../../../inputs/InvoicesOrderByWithAggregationInput");
const InvoicesScalarWhereWithAggregatesInput_1 = require("../../../inputs/InvoicesScalarWhereWithAggregatesInput");
const InvoicesWhereInput_1 = require("../../../inputs/InvoicesWhereInput");
const InvoicesScalarFieldEnum_1 = require("../../../../enums/InvoicesScalarFieldEnum");
let GroupByInvoicesArgs = class GroupByInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereInput_1.InvoicesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereInput_1.InvoicesWhereInput)
], GroupByInvoicesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesOrderByWithAggregationInput_1.InvoicesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInvoicesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesScalarFieldEnum_1.InvoicesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInvoicesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesScalarWhereWithAggregatesInput_1.InvoicesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesScalarWhereWithAggregatesInput_1.InvoicesScalarWhereWithAggregatesInput)
], GroupByInvoicesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInvoicesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInvoicesArgs.prototype, "skip", void 0);
GroupByInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInvoicesArgs);
exports.GroupByInvoicesArgs = GroupByInvoicesArgs;
