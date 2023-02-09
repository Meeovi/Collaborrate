"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPluginsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPluginsOrThrowArgs_1 = require("./args/FindFirstPluginsOrThrowArgs");
const Plugins_1 = require("../../../models/Plugins");
const helpers_1 = require("../../../helpers");
let FindFirstPluginsOrThrowResolver = class FindFirstPluginsOrThrowResolver {
    async findFirstPluginsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPluginsOrThrowArgs_1.FindFirstPluginsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPluginsOrThrowResolver.prototype, "findFirstPluginsOrThrow", null);
FindFirstPluginsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], FindFirstPluginsOrThrowResolver);
exports.FindFirstPluginsOrThrowResolver = FindFirstPluginsOrThrowResolver;
