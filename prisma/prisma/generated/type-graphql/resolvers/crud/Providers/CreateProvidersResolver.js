"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateProvidersArgs_1 = require("./args/CreateProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let CreateProvidersResolver = class CreateProvidersResolver {
    async createProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProvidersArgs_1.CreateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateProvidersResolver.prototype, "createProviders", null);
CreateProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], CreateProvidersResolver);
exports.CreateProvidersResolver = CreateProvidersResolver;
