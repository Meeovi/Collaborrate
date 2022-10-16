"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneAccountsArgs_1 = require("./args/DeleteOneAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const helpers_1 = require("../../../helpers");
let DeleteOneAccountsResolver = class DeleteOneAccountsResolver {
    async deleteOneAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAccountsArgs_1.DeleteOneAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAccountsResolver.prototype, "deleteOneAccounts", null);
DeleteOneAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], DeleteOneAccountsResolver);
exports.DeleteOneAccountsResolver = DeleteOneAccountsResolver;
