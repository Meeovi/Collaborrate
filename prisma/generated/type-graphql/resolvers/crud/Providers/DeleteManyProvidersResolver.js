"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyProvidersArgs_1 = require("./args/DeleteManyProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProvidersResolver = class DeleteManyProvidersResolver {
    async deleteManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProvidersArgs_1.DeleteManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProvidersResolver.prototype, "deleteManyProviders", null);
DeleteManyProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], DeleteManyProvidersResolver);
exports.DeleteManyProvidersResolver = DeleteManyProvidersResolver;
