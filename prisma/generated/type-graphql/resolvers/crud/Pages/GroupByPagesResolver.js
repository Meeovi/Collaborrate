"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPagesArgs_1 = require("./args/GroupByPagesArgs");
const Pages_1 = require("../../../models/Pages");
const PagesGroupBy_1 = require("../../outputs/PagesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPagesResolver = class GroupByPagesResolver {
    async groupByPages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PagesGroupBy_1.PagesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPagesArgs_1.GroupByPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPagesResolver.prototype, "groupByPages", null);
GroupByPagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], GroupByPagesResolver);
exports.GroupByPagesResolver = GroupByPagesResolver;
