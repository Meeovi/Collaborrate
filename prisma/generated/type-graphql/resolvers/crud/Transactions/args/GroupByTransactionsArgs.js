"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsOrderByWithAggregationInput_1 = require("../../../inputs/TransactionsOrderByWithAggregationInput");
const TransactionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TransactionsScalarWhereWithAggregatesInput");
const TransactionsWhereInput_1 = require("../../../inputs/TransactionsWhereInput");
const TransactionsScalarFieldEnum_1 = require("../../../../enums/TransactionsScalarFieldEnum");
let GroupByTransactionsArgs = class GroupByTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], GroupByTransactionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsOrderByWithAggregationInput_1.TransactionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTransactionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsScalarFieldEnum_1.TransactionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTransactionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsScalarWhereWithAggregatesInput_1.TransactionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsScalarWhereWithAggregatesInput_1.TransactionsScalarWhereWithAggregatesInput)
], GroupByTransactionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTransactionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTransactionsArgs.prototype, "skip", void 0);
GroupByTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTransactionsArgs);
exports.GroupByTransactionsArgs = GroupByTransactionsArgs;
