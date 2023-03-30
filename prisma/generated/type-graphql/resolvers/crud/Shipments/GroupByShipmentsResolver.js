"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByShipmentsArgs_1 = require("./args/GroupByShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const ShipmentsGroupBy_1 = require("../../outputs/ShipmentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByShipmentsResolver = class GroupByShipmentsResolver {
    async groupByShipments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShipmentsGroupBy_1.ShipmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShipmentsArgs_1.GroupByShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByShipmentsResolver.prototype, "groupByShipments", null);
GroupByShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], GroupByShipmentsResolver);
exports.GroupByShipmentsResolver = GroupByShipmentsResolver;
