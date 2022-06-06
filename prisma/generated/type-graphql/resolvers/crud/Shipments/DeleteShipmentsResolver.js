"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteShipmentsArgs_1 = require("./args/DeleteShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let DeleteShipmentsResolver = class DeleteShipmentsResolver {
    async deleteShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteShipmentsArgs_1.DeleteShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteShipmentsResolver.prototype, "deleteShipments", null);
DeleteShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], DeleteShipmentsResolver);
exports.DeleteShipmentsResolver = DeleteShipmentsResolver;
