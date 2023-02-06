"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByFullfillmentsArgs_1 = require("./args/GroupByFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const FullfillmentsGroupBy_1 = require("../../outputs/FullfillmentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFullfillmentsResolver = class GroupByFullfillmentsResolver {
    async groupByFullfillments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FullfillmentsGroupBy_1.FullfillmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFullfillmentsArgs_1.GroupByFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFullfillmentsResolver.prototype, "groupByFullfillments", null);
GroupByFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], GroupByFullfillmentsResolver);
exports.GroupByFullfillmentsResolver = GroupByFullfillmentsResolver;
