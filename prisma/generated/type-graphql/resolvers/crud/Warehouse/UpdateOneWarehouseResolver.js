"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneWarehouseArgs_1 = require("./args/UpdateOneWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let UpdateOneWarehouseResolver = class UpdateOneWarehouseResolver {
    async updateOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWarehouseArgs_1.UpdateOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneWarehouseResolver.prototype, "updateOneWarehouse", null);
UpdateOneWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], UpdateOneWarehouseResolver);
exports.UpdateOneWarehouseResolver = UpdateOneWarehouseResolver;
