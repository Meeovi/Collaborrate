"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsCreateInput_1 = require("../../../inputs/AccountsCreateInput");
let CreateAccountsArgs = class CreateAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsCreateInput_1.AccountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsCreateInput_1.AccountsCreateInput)
], CreateAccountsArgs.prototype, "data", void 0);
CreateAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAccountsArgs);
exports.CreateAccountsArgs = CreateAccountsArgs;
