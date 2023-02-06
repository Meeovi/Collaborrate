"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyWarehouseArgs_1 = require("./args/DeleteManyWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyWarehouseResolver = class DeleteManyWarehouseResolver {
    async deleteManyWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWarehouseArgs_1.DeleteManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyWarehouseResolver.prototype, "deleteManyWarehouse", null);
DeleteManyWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], DeleteManyWarehouseResolver);
exports.DeleteManyWarehouseResolver = DeleteManyWarehouseResolver;
