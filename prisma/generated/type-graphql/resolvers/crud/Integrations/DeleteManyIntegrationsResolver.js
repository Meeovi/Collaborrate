"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyIntegrationsArgs_1 = require("./args/DeleteManyIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyIntegrationsResolver = class DeleteManyIntegrationsResolver {
    async deleteManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIntegrationsArgs_1.DeleteManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyIntegrationsResolver.prototype, "deleteManyIntegrations", null);
DeleteManyIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], DeleteManyIntegrationsResolver);
exports.DeleteManyIntegrationsResolver = DeleteManyIntegrationsResolver;
