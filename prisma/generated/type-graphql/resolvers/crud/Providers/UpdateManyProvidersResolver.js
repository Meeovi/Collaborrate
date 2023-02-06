"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyProvidersArgs_1 = require("./args/UpdateManyProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyProvidersResolver = class UpdateManyProvidersResolver {
    async updateManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProvidersArgs_1.UpdateManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyProvidersResolver.prototype, "updateManyProviders", null);
UpdateManyProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], UpdateManyProvidersResolver);
exports.UpdateManyProvidersResolver = UpdateManyProvidersResolver;
