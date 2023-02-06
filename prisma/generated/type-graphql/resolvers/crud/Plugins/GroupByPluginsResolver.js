"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPluginsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPluginsArgs_1 = require("./args/GroupByPluginsArgs");
const Plugins_1 = require("../../../models/Plugins");
const PluginsGroupBy_1 = require("../../outputs/PluginsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPluginsResolver = class GroupByPluginsResolver {
    async groupByPlugins(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PluginsGroupBy_1.PluginsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPluginsArgs_1.GroupByPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPluginsResolver.prototype, "groupByPlugins", null);
GroupByPluginsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], GroupByPluginsResolver);
exports.GroupByPluginsResolver = GroupByPluginsResolver;
