"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let DeleteAccountsArgs = class DeleteAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], DeleteAccountsArgs.prototype, "where", void 0);
DeleteAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAccountsArgs);
exports.DeleteAccountsArgs = DeleteAccountsArgs;
