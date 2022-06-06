"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsCreateManyInput_1 = require("../../../inputs/AccountsCreateManyInput");
let CreateManyAccountsArgs = class CreateManyAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsCreateManyInput_1.AccountsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAccountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAccountsArgs.prototype, "skipDuplicates", void 0);
CreateManyAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAccountsArgs);
exports.CreateManyAccountsArgs = CreateManyAccountsArgs;
