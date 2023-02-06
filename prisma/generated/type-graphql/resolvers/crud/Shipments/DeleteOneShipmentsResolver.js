"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneShipmentsArgs_1 = require("./args/DeleteOneShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let DeleteOneShipmentsResolver = class DeleteOneShipmentsResolver {
    async deleteOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShipmentsArgs_1.DeleteOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneShipmentsResolver.prototype, "deleteOneShipments", null);
DeleteOneShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], DeleteOneShipmentsResolver);
exports.DeleteOneShipmentsResolver = DeleteOneShipmentsResolver;
