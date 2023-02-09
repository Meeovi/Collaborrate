"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWarehouseOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstWarehouseOrThrowArgs_1 = require("./args/FindFirstWarehouseOrThrowArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let FindFirstWarehouseOrThrowResolver = class FindFirstWarehouseOrThrowResolver {
    async findFirstWarehouseOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWarehouseOrThrowArgs_1.FindFirstWarehouseOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstWarehouseOrThrowResolver.prototype, "findFirstWarehouseOrThrow", null);
FindFirstWarehouseOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], FindFirstWarehouseOrThrowResolver);
exports.FindFirstWarehouseOrThrowResolver = FindFirstWarehouseOrThrowResolver;
