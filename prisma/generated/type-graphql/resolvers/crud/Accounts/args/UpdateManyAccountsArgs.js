"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsUpdateManyMutationInput_1 = require("../../../inputs/AccountsUpdateManyMutationInput");
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
let UpdateManyAccountsArgs = class UpdateManyAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsUpdateManyMutationInput_1.AccountsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsUpdateManyMutationInput_1.AccountsUpdateManyMutationInput)
], UpdateManyAccountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], UpdateManyAccountsArgs.prototype, "where", void 0);
UpdateManyAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAccountsArgs);
exports.UpdateManyAccountsArgs = UpdateManyAccountsArgs;
