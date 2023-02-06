"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWarehouseOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWarehouseOrThrowArgs_1 = require("./args/FindUniqueWarehouseOrThrowArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let FindUniqueWarehouseOrThrowResolver = class FindUniqueWarehouseOrThrowResolver {
    async getWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWarehouseOrThrowArgs_1.FindUniqueWarehouseOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueWarehouseOrThrowResolver.prototype, "getWarehouse", null);
FindUniqueWarehouseOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], FindUniqueWarehouseOrThrowResolver);
exports.FindUniqueWarehouseOrThrowResolver = FindUniqueWarehouseOrThrowResolver;
