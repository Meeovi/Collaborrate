"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsCreateInput_1 = require("../../../inputs/AccountsCreateInput");
const AccountsUpdateInput_1 = require("../../../inputs/AccountsUpdateInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let UpsertOneAccountsArgs = class UpsertOneAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], UpsertOneAccountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCreateInput_1.AccountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsCreateInput_1.AccountsCreateInput)
], UpsertOneAccountsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsUpdateInput_1.AccountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsUpdateInput_1.AccountsUpdateInput)
], UpsertOneAccountsArgs.prototype, "update", void 0);
UpsertOneAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAccountsArgs);
exports.UpsertOneAccountsArgs = UpsertOneAccountsArgs;
