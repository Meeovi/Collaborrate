"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneZonesArgs_1 = require("./args/UpdateOneZonesArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let UpdateOneZonesResolver = class UpdateOneZonesResolver {
    async updateOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneZonesArgs_1.UpdateOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneZonesResolver.prototype, "updateOneZones", null);
UpdateOneZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], UpdateOneZonesResolver);
exports.UpdateOneZonesResolver = UpdateOneZonesResolver;
