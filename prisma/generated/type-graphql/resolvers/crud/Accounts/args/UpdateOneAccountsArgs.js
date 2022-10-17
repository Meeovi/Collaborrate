"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsUpdateInput_1 = require("../../../inputs/AccountsUpdateInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let UpdateOneAccountsArgs = class UpdateOneAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsUpdateInput_1.AccountsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsUpdateInput_1.AccountsUpdateInput)
], UpdateOneAccountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], UpdateOneAccountsArgs.prototype, "where", void 0);
UpdateOneAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAccountsArgs);
exports.UpdateOneAccountsArgs = UpdateOneAccountsArgs;
