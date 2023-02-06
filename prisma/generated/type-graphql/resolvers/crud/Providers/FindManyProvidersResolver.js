"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyProvidersArgs_1 = require("./args/FindManyProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let FindManyProvidersResolver = class FindManyProvidersResolver {
    async findManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Providers_1.Providers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProvidersArgs_1.FindManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProvidersResolver.prototype, "findManyProviders", null);
FindManyProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], FindManyProvidersResolver);
exports.FindManyProvidersResolver = FindManyProvidersResolver;
