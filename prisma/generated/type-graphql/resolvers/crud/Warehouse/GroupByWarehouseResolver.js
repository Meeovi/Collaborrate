"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByWarehouseArgs_1 = require("./args/GroupByWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const WarehouseGroupBy_1 = require("../../outputs/WarehouseGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWarehouseResolver = class GroupByWarehouseResolver {
    async groupByWarehouse(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WarehouseGroupBy_1.WarehouseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWarehouseArgs_1.GroupByWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWarehouseResolver.prototype, "groupByWarehouse", null);
GroupByWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], GroupByWarehouseResolver);
exports.GroupByWarehouseResolver = GroupByWarehouseResolver;
