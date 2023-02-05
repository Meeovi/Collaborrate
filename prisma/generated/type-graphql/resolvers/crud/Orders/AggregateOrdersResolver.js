"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOrdersArgs_1 = require("./args/AggregateOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const AggregateOrders_1 = require("../../outputs/AggregateOrders");
const helpers_1 = require("../../../helpers");
let AggregateOrdersResolver = class AggregateOrdersResolver {
    async aggregateOrders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrders_1.AggregateOrders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrdersArgs_1.AggregateOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOrdersResolver.prototype, "aggregateOrders", null);
AggregateOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], AggregateOrdersResolver);
exports.AggregateOrdersResolver = AggregateOrdersResolver;
