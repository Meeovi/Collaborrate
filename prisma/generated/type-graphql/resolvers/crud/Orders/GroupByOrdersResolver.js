"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByOrdersArgs_1 = require("./args/GroupByOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const OrdersGroupBy_1 = require("../../outputs/OrdersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrdersResolver = class GroupByOrdersResolver {
    async groupByOrders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrdersGroupBy_1.OrdersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrdersArgs_1.GroupByOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOrdersResolver.prototype, "groupByOrders", null);
GroupByOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], GroupByOrdersResolver);
exports.GroupByOrdersResolver = GroupByOrdersResolver;
