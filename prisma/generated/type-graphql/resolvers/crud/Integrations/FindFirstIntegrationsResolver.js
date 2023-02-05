"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstIntegrationsArgs_1 = require("./args/FindFirstIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let FindFirstIntegrationsResolver = class FindFirstIntegrationsResolver {
    async findFirstIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIntegrationsArgs_1.FindFirstIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstIntegrationsResolver.prototype, "findFirstIntegrations", null);
FindFirstIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], FindFirstIntegrationsResolver);
exports.FindFirstIntegrationsResolver = FindFirstIntegrationsResolver;
