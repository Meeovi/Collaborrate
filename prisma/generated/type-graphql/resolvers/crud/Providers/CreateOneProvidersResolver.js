"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneProvidersArgs_1 = require("./args/CreateOneProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let CreateOneProvidersResolver = class CreateOneProvidersResolver {
    async createOneProviders(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProvidersArgs_1.CreateOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProvidersResolver.prototype, "createOneProviders", null);
CreateOneProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], CreateOneProvidersResolver);
exports.CreateOneProvidersResolver = CreateOneProvidersResolver;
