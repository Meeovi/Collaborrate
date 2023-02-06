"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProvidersArgs_1 = require("./args/FindFirstProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let FindFirstProvidersResolver = class FindFirstProvidersResolver {
    async findFirstProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProvidersArgs_1.FindFirstProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProvidersResolver.prototype, "findFirstProviders", null);
FindFirstProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], FindFirstProvidersResolver);
exports.FindFirstProvidersResolver = FindFirstProvidersResolver;
