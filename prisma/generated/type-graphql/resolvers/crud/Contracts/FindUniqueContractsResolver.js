"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContractsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueContractsArgs_1 = require("./args/FindUniqueContractsArgs");
const Contracts_1 = require("../../../models/Contracts");
const helpers_1 = require("../../../helpers");
let FindUniqueContractsResolver = class FindUniqueContractsResolver {
    async findUniqueContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContractsArgs_1.FindUniqueContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueContractsResolver.prototype, "findUniqueContracts", null);
FindUniqueContractsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], FindUniqueContractsResolver);
exports.FindUniqueContractsResolver = FindUniqueContractsResolver;
