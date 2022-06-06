"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
let DeleteManyAccountsArgs = class DeleteManyAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], DeleteManyAccountsArgs.prototype, "where", void 0);
DeleteManyAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAccountsArgs);
exports.DeleteManyAccountsArgs = DeleteManyAccountsArgs;
