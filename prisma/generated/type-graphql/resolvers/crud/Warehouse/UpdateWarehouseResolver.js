"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateWarehouseArgs_1 = require("./args/UpdateWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let UpdateWarehouseResolver = class UpdateWarehouseResolver {
    async updateWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWarehouseArgs_1.UpdateWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateWarehouseResolver.prototype, "updateWarehouse", null);
UpdateWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], UpdateWarehouseResolver);
exports.UpdateWarehouseResolver = UpdateWarehouseResolver;
