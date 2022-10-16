"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AccountsOrderByWithRelationAndSearchRelevanceInput");
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
const AccountsScalarFieldEnum_1 = require("../../../../enums/AccountsScalarFieldEnum");
let FindFirstAccountsArgs = class FindFirstAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], FindFirstAccountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsOrderByWithRelationAndSearchRelevanceInput_1.AccountsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAccountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], FindFirstAccountsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAccountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAccountsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsScalarFieldEnum_1.AccountsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAccountsArgs.prototype, "distinct", void 0);
FindFirstAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAccountsArgs);
exports.FindFirstAccountsArgs = FindFirstAccountsArgs;
