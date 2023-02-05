"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePluginsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOnePluginsArgs_1 = require("./args/UpsertOnePluginsArgs");
const Plugins_1 = require("../../../models/Plugins");
const helpers_1 = require("../../../helpers");
let UpsertOnePluginsResolver = class UpsertOnePluginsResolver {
    async upsertOnePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Plugins_1.Plugins, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePluginsArgs_1.UpsertOnePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePluginsResolver.prototype, "upsertOnePlugins", null);
UpsertOnePluginsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], UpsertOnePluginsResolver);
exports.UpsertOnePluginsResolver = UpsertOnePluginsResolver;
