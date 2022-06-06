"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAccountsArgs_1 = require("./args/AggregateAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const AggregateAccounts_1 = require("../../outputs/AggregateAccounts");
const helpers_1 = require("../../../helpers");
let AggregateAccountsResolver = class AggregateAccountsResolver {
    async aggregateAccounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAccounts_1.AggregateAccounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAccountsArgs_1.AggregateAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAccountsResolver.prototype, "aggregateAccounts", null);
AggregateAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], AggregateAccountsResolver);
exports.AggregateAccountsResolver = AggregateAccountsResolver;
