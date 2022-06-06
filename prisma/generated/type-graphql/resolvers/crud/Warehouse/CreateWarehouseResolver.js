"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWarehouseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateWarehouseArgs_1 = require("./args/CreateWarehouseArgs");
const Warehouse_1 = require("../../../models/Warehouse");
const helpers_1 = require("../../../helpers");
let CreateWarehouseResolver = class CreateWarehouseResolver {
    async createWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWarehouseArgs_1.CreateWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateWarehouseResolver.prototype, "createWarehouse", null);
CreateWarehouseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], CreateWarehouseResolver);
exports.CreateWarehouseResolver = CreateWarehouseResolver;
