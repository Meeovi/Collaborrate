"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneZonesArgs_1 = require("./args/DeleteOneZonesArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let DeleteOneZonesResolver = class DeleteOneZonesResolver {
    async deleteOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneZonesArgs_1.DeleteOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneZonesResolver.prototype, "deleteOneZones", null);
DeleteOneZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], DeleteOneZonesResolver);
exports.DeleteOneZonesResolver = DeleteOneZonesResolver;
