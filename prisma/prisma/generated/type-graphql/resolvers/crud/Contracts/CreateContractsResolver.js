"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContractsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateContractsArgs_1 = require("./args/CreateContractsArgs");
const Contracts_1 = require("../../../models/Contracts");
const helpers_1 = require("../../../helpers");
let CreateContractsResolver = class CreateContractsResolver {
    async createContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateContractsArgs_1.CreateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateContractsResolver.prototype, "createContracts", null);
CreateContractsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], CreateContractsResolver);
exports.CreateContractsResolver = CreateContractsResolver;
