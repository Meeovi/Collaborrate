"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsOrderByWithRelationInput_1 = require("../../../inputs/AccountsOrderByWithRelationInput");
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
const AccountsScalarFieldEnum_1 = require("../../../../enums/AccountsScalarFieldEnum");
let FindManyAccountsArgs = class FindManyAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], FindManyAccountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsOrderByWithRelationInput_1.AccountsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAccountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], FindManyAccountsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAccountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAccountsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsScalarFieldEnum_1.AccountsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAccountsArgs.prototype, "distinct", void 0);
FindManyAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAccountsArgs);
exports.FindManyAccountsArgs = FindManyAccountsArgs;
