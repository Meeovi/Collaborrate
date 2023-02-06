"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCollectionsArgs_1 = require("./args/GroupByCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const CollectionsGroupBy_1 = require("../../outputs/CollectionsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCollectionsResolver = class GroupByCollectionsResolver {
    async groupByCollections(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CollectionsGroupBy_1.CollectionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCollectionsArgs_1.GroupByCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCollectionsResolver.prototype, "groupByCollections", null);
GroupByCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], GroupByCollectionsResolver);
exports.GroupByCollectionsResolver = GroupByCollectionsResolver;
