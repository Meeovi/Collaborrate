"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneWarehouseArgs_1 = require("./args/CreateOneWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let CreateOneWarehouseResolver = class CreateOneWarehouseResolver {
    async createOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWarehouseArgs_1.CreateOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneWarehouseResolver.prototype, "createOneWarehouse", null);
CreateOneWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], CreateOneWarehouseResolver);
exports.CreateOneWarehouseResolver = CreateOneWarehouseResolver;
