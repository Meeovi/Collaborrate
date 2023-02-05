"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCategoriesArgs_1 = require("./args/GroupByCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const CategoriesGroupBy_1 = require("../../outputs/CategoriesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCategoriesResolver = class GroupByCategoriesResolver {
    async groupByCategories(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CategoriesGroupBy_1.CategoriesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCategoriesArgs_1.GroupByCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCategoriesResolver.prototype, "groupByCategories", null);
GroupByCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], GroupByCategoriesResolver);
exports.GroupByCategoriesResolver = GroupByCategoriesResolver;
