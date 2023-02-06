"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPartnersArgs_1 = require("./args/GroupByPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const PartnersGroupBy_1 = require("../../outputs/PartnersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPartnersResolver = class GroupByPartnersResolver {
    async groupByPartners(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PartnersGroupBy_1.PartnersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPartnersArgs_1.GroupByPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPartnersResolver.prototype, "groupByPartners", null);
GroupByPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], GroupByPartnersResolver);
exports.GroupByPartnersResolver = GroupByPartnersResolver;
