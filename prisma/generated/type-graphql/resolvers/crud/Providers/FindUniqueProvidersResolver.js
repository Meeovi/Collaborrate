"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProvidersArgs_1 = require("./args/FindUniqueProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let FindUniqueProvidersResolver = class FindUniqueProvidersResolver {
    async findUniqueProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProvidersArgs_1.FindUniqueProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProvidersResolver.prototype, "findUniqueProviders", null);
FindUniqueProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], FindUniqueProvidersResolver);
exports.FindUniqueProvidersResolver = FindUniqueProvidersResolver;
