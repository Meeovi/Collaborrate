"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByZonesArgs_1 = require("./args/GroupByZonesArgs");
const Zones_1 = require("../../../models/Zones");
const ZonesGroupBy_1 = require("../../outputs/ZonesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByZonesResolver = class GroupByZonesResolver {
    async groupByZones(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ZonesGroupBy_1.ZonesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByZonesArgs_1.GroupByZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByZonesResolver.prototype, "groupByZones", null);
GroupByZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], GroupByZonesResolver);
exports.GroupByZonesResolver = GroupByZonesResolver;
