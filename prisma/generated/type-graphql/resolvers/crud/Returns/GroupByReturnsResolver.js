"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByReturnsArgs_1 = require("./args/GroupByReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const ReturnsGroupBy_1 = require("../../outputs/ReturnsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReturnsResolver = class GroupByReturnsResolver {
    async groupByReturns(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReturnsGroupBy_1.ReturnsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReturnsArgs_1.GroupByReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReturnsResolver.prototype, "groupByReturns", null);
GroupByReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], GroupByReturnsResolver);
exports.GroupByReturnsResolver = GroupByReturnsResolver;
