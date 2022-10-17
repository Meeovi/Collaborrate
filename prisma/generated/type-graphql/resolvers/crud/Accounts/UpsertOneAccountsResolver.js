"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneAccountsArgs_1 = require("./args/UpsertOneAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const helpers_1 = require("../../../helpers");
let UpsertOneAccountsResolver = class UpsertOneAccountsResolver {
    async upsertOneAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAccountsArgs_1.UpsertOneAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAccountsResolver.prototype, "upsertOneAccounts", null);
UpsertOneAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], UpsertOneAccountsResolver);
exports.UpsertOneAccountsResolver = UpsertOneAccountsResolver;
