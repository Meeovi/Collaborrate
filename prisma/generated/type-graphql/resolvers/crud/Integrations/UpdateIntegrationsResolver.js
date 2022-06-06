"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateIntegrationsArgs_1 = require("./args/UpdateIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let UpdateIntegrationsResolver = class UpdateIntegrationsResolver {
    async updateIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateIntegrationsArgs_1.UpdateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateIntegrationsResolver.prototype, "updateIntegrations", null);
UpdateIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], UpdateIntegrationsResolver);
exports.UpdateIntegrationsResolver = UpdateIntegrationsResolver;
