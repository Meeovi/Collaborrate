"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstThemesArgs_1 = require("./args/FindFirstThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let FindFirstThemesResolver = class FindFirstThemesResolver {
    async findFirstThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThemesArgs_1.FindFirstThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstThemesResolver.prototype, "findFirstThemes", null);
FindFirstThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], FindFirstThemesResolver);
exports.FindFirstThemesResolver = FindFirstThemesResolver;
