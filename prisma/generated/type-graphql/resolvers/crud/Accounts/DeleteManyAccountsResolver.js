"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyAccountsArgs_1 = require("./args/DeleteManyAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAccountsResolver = class DeleteManyAccountsResolver {
    async deleteManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAccountsArgs_1.DeleteManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyAccountsResolver.prototype, "deleteManyAccounts", null);
DeleteManyAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], DeleteManyAccountsResolver);
exports.DeleteManyAccountsResolver = DeleteManyAccountsResolver;
