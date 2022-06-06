"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsOrderByWithRelationInput_1 = require("../../../inputs/AccountsOrderByWithRelationInput");
const AccountsWhereInput_1 = require("../../../inputs/AccountsWhereInput");
const AccountsWhereUniqueInput_1 = require("../../../inputs/AccountsWhereUniqueInput");
let AggregateAccountsArgs = class AggregateAccountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereInput_1.AccountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereInput_1.AccountsWhereInput)
], AggregateAccountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsOrderByWithRelationInput_1.AccountsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAccountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountsWhereUniqueInput_1.AccountsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountsWhereUniqueInput_1.AccountsWhereUniqueInput)
], AggregateAccountsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAccountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAccountsArgs.prototype, "skip", void 0);
AggregateAccountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAccountsArgs);
exports.AggregateAccountsArgs = AggregateAccountsArgs;
