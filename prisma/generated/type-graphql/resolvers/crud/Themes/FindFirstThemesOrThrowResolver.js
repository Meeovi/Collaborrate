"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThemesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstThemesOrThrowArgs_1 = require("./args/FindFirstThemesOrThrowArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let FindFirstThemesOrThrowResolver = class FindFirstThemesOrThrowResolver {
    async findFirstThemesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThemesOrThrowArgs_1.FindFirstThemesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstThemesOrThrowResolver.prototype, "findFirstThemesOrThrow", null);
FindFirstThemesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], FindFirstThemesOrThrowResolver);
exports.FindFirstThemesOrThrowResolver = FindFirstThemesOrThrowResolver;
