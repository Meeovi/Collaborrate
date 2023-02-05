"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyThemesArgs_1 = require("./args/FindManyThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let FindManyThemesResolver = class FindManyThemesResolver {
    async findManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Themes_1.Themes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThemesArgs_1.FindManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyThemesResolver.prototype, "findManyThemes", null);
FindManyThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], FindManyThemesResolver);
exports.FindManyThemesResolver = FindManyThemesResolver;
