"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneIntegrationsArgs_1 = require("./args/UpsertOneIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let UpsertOneIntegrationsResolver = class UpsertOneIntegrationsResolver {
    async upsertOneIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIntegrationsArgs_1.UpsertOneIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneIntegrationsResolver.prototype, "upsertOneIntegrations", null);
UpsertOneIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], UpsertOneIntegrationsResolver);
exports.UpsertOneIntegrationsResolver = UpsertOneIntegrationsResolver;
