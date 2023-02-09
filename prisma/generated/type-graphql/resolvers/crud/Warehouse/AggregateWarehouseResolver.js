"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWarehouseArgs_1 = require("./args/AggregateWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const AggregateWarehouse_1 = require("../../outputs/AggregateWarehouse");
const helpers_1 = require("../../../helpers");
let AggregateWarehouseResolver = class AggregateWarehouseResolver {
    async aggregateWarehouse(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWarehouse_1.AggregateWarehouse, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWarehouseArgs_1.AggregateWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWarehouseResolver.prototype, "aggregateWarehouse", null);
AggregateWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], AggregateWarehouseResolver);
exports.AggregateWarehouseResolver = AggregateWarehouseResolver;
