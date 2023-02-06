"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIntegrationsArgs_1 = require("./args/AggregateIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const AggregateIntegrations_1 = require("../../outputs/AggregateIntegrations");
const helpers_1 = require("../../../helpers");
let AggregateIntegrationsResolver = class AggregateIntegrationsResolver {
    async aggregateIntegrations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIntegrations_1.AggregateIntegrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIntegrationsArgs_1.AggregateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateIntegrationsResolver.prototype, "aggregateIntegrations", null);
AggregateIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], AggregateIntegrationsResolver);
exports.AggregateIntegrationsResolver = AggregateIntegrationsResolver;
