"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsOrderByWithAggregationInput_1 = require("../../../inputs/AccountsOrderByWithAggregationInput");
const AccountsScalarWhereWithAggregatesInput_1 = require("../../../inputs/AccountsScalarWhereWithAggregatesInput");
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
const AccountsScalarFieldEnum_1 = require("../../../../enums/AccountsScalarFieldEnum");
let GroupByAccountsArgs = class GroupByAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], GroupByAccountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsOrderByWithAggregationInput_1.AccountsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAccountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsScalarFieldEnum_1.AccountsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAccountsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsScalarWhereWithAggregatesInput_1.AccountsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsScalarWhereWithAggregatesInput_1.AccountsScalarWhereWithAggregatesInput)
], GroupByAccountsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAccountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAccountsArgs.prototype, "skip", void 0);
GroupByAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAccountsArgs);
exports.GroupByAccountsArgs = GroupByAccountsArgs;
