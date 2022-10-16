"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let DeleteOneAccountsArgs = class DeleteOneAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], DeleteOneAccountsArgs.prototype, "where", void 0);
DeleteOneAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAccountsArgs);
exports.DeleteOneAccountsArgs = DeleteOneAccountsArgs;
