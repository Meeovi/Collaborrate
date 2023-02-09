"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyIntegrationsArgs_1 = require("./args/UpdateManyIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyIntegrationsResolver = class UpdateManyIntegrationsResolver {
    async updateManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIntegrationsArgs_1.UpdateManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyIntegrationsResolver.prototype, "updateManyIntegrations", null);
UpdateManyIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], UpdateManyIntegrationsResolver);
exports.UpdateManyIntegrationsResolver = UpdateManyIntegrationsResolver;
