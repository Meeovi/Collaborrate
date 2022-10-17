"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAccountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyAccountsArgs_1 = require("./args/CreateManyAccountsArgs");
const Accounts_1 = require("../../../models/Accounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAccountsResolver = class CreateManyAccountsResolver {
    async createManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAccountsArgs_1.CreateManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAccountsResolver.prototype, "createManyAccounts", null);
CreateManyAccountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], CreateManyAccountsResolver);
exports.CreateManyAccountsResolver = CreateManyAccountsResolver;
