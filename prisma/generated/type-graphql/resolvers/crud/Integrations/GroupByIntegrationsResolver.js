"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByIntegrationsArgs_1 = require("./args/GroupByIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const IntegrationsGroupBy_1 = require("../../outputs/IntegrationsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByIntegrationsResolver = class GroupByIntegrationsResolver {
    async groupByIntegrations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IntegrationsGroupBy_1.IntegrationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIntegrationsArgs_1.GroupByIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByIntegrationsResolver.prototype, "groupByIntegrations", null);
GroupByIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], GroupByIntegrationsResolver);
exports.GroupByIntegrationsResolver = GroupByIntegrationsResolver;
