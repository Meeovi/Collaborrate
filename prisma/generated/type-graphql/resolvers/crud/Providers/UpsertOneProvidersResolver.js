"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneProvidersArgs_1 = require("./args/UpsertOneProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let UpsertOneProvidersResolver = class UpsertOneProvidersResolver {
    async upsertOneProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.upsert({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProvidersArgs_1.UpsertOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProvidersResolver.prototype, "upsertOneProviders", null);
UpsertOneProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], UpsertOneProvidersResolver);
exports.UpsertOneProvidersResolver = UpsertOneProvidersResolver;
