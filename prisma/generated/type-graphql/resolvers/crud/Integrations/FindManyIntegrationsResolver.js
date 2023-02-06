"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyIntegrationsArgs_1 = require("./args/FindManyIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let FindManyIntegrationsResolver = class FindManyIntegrationsResolver {
    async findManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Integrations_1.Integrations], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIntegrationsArgs_1.FindManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyIntegrationsResolver.prototype, "findManyIntegrations", null);
FindManyIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], FindManyIntegrationsResolver);
exports.FindManyIntegrationsResolver = FindManyIntegrationsResolver;
