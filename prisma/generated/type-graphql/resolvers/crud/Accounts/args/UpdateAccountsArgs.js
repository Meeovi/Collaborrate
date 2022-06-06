"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsUpdateInput_1 = require("../../../inputs/AccountsUpdateInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let UpdateAccountsArgs = class UpdateAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsUpdateInput_1.AccountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsUpdateInput_1.AccountsUpdateInput)
], UpdateAccountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], UpdateAccountsArgs.prototype, "where", void 0);
UpdateAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAccountsArgs);
exports.UpdateAccountsArgs = UpdateAccountsArgs;
