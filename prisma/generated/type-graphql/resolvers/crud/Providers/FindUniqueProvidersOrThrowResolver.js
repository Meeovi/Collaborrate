"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProvidersOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProvidersOrThrowArgs_1 = require("./args/FindUniqueProvidersOrThrowArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let FindUniqueProvidersOrThrowResolver = class FindUniqueProvidersOrThrowResolver {
    async findUniqueProvidersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProvidersOrThrowArgs_1.FindUniqueProvidersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProvidersOrThrowResolver.prototype, "findUniqueProvidersOrThrow", null);
FindUniqueProvidersOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], FindUniqueProvidersOrThrowResolver);
exports.FindUniqueProvidersOrThrowResolver = FindUniqueProvidersOrThrowResolver;
