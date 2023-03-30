"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePluginsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePluginsArgs_1 = require("./args/AggregatePluginsArgs");
const Plugins_1 = require("../../../models/Plugins");
const AggregatePlugins_1 = require("../../outputs/AggregatePlugins");
const helpers_1 = require("../../../helpers");
let AggregatePluginsResolver = class AggregatePluginsResolver {
    async aggregatePlugins(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePlugins_1.AggregatePlugins, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePluginsArgs_1.AggregatePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePluginsResolver.prototype, "aggregatePlugins", null);
AggregatePluginsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], AggregatePluginsResolver);
exports.AggregatePluginsResolver = AggregatePluginsResolver;
