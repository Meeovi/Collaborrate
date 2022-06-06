"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateContractsArgs_1 = require("./args/UpdateContractsArgs");
const Contracts_1 = require("../../../models/Contracts");
const helpers_1 = require("../../../helpers");
let UpdateContractsResolver = class UpdateContractsResolver {
    async updateContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateContractsArgs_1.UpdateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateContractsResolver.prototype, "updateContracts", null);
UpdateContractsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], UpdateContractsResolver);
exports.UpdateContractsResolver = UpdateContractsResolver;
