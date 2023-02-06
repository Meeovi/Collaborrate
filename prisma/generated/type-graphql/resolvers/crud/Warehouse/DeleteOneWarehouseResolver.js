"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneWarehouseArgs_1 = require("./args/DeleteOneWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let DeleteOneWarehouseResolver = class DeleteOneWarehouseResolver {
    async deleteOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWarehouseArgs_1.DeleteOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneWarehouseResolver.prototype, "deleteOneWarehouse", null);
DeleteOneWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], DeleteOneWarehouseResolver);
exports.DeleteOneWarehouseResolver = DeleteOneWarehouseResolver;
