"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyShipmentsArgs_1 = require("./args/UpdateManyShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyShipmentsResolver = class UpdateManyShipmentsResolver {
    async updateManyShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShipmentsArgs_1.UpdateManyShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyShipmentsResolver.prototype, "updateManyShipments", null);
UpdateManyShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], UpdateManyShipmentsResolver);
exports.UpdateManyShipmentsResolver = UpdateManyShipmentsResolver;
