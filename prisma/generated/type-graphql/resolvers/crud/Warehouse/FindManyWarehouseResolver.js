"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyWarehouseArgs_1 = require("./args/FindManyWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let FindManyWarehouseResolver = class FindManyWarehouseResolver {
    async warehouses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Warehouse_1.Warehouse], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWarehouseArgs_1.FindManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyWarehouseResolver.prototype, "warehouses", null);
FindManyWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], FindManyWarehouseResolver);
exports.FindManyWarehouseResolver = FindManyWarehouseResolver;
