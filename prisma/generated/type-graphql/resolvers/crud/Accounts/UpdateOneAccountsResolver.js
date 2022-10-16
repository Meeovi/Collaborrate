"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneAccountsArgs_1 = require("./args/UpdateOneAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const helpers_1 = require("../../../helpers");
let UpdateOneAccountsResolver = class UpdateOneAccountsResolver {
    async updateOneAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAccountsArgs_1.UpdateOneAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneAccountsResolver.prototype, "updateOneAccounts", null);
UpdateOneAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], UpdateOneAccountsResolver);
exports.UpdateOneAccountsResolver = UpdateOneAccountsResolver;
