"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySegmentsArgs_1 = require("./args/GroupBySegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const SegmentsGroupBy_1 = require("../../outputs/SegmentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySegmentsResolver = class GroupBySegmentsResolver {
    async groupBySegments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SegmentsGroupBy_1.SegmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySegmentsArgs_1.GroupBySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySegmentsResolver.prototype, "groupBySegments", null);
GroupBySegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], GroupBySegmentsResolver);
exports.GroupBySegmentsResolver = GroupBySegmentsResolver;
