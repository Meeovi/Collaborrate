"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByThemesArgs_1 = require("./args/GroupByThemesArgs");
const Themes_1 = require("../../../models/Themes");
const ThemesGroupBy_1 = require("../../outputs/ThemesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByThemesResolver = class GroupByThemesResolver {
    async groupByThemes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThemesGroupBy_1.ThemesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThemesArgs_1.GroupByThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByThemesResolver.prototype, "groupByThemes", null);
GroupByThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], GroupByThemesResolver);
exports.GroupByThemesResolver = GroupByThemesResolver;
