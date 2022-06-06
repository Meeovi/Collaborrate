"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAccountsArgs_1 = require("./args/GroupByAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const AccountsGroupBy_1 = require("../../outputs/AccountsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAccountsResolver = class GroupByAccountsResolver {
    async groupByAccounts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AccountsGroupBy_1.AccountsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAccountsArgs_1.GroupByAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAccountsResolver.prototype, "groupByAccounts", null);
GroupByAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], GroupByAccountsResolver);
exports.GroupByAccountsResolver = GroupByAccountsResolver;
