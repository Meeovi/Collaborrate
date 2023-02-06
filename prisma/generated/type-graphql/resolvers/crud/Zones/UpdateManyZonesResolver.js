"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyZonesArgs_1 = require("./args/UpdateManyZonesArgs");
const Zones_1 = require("../../../models/Zones");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyZonesResolver = class UpdateManyZonesResolver {
    async updateManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyZonesArgs_1.UpdateManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyZonesResolver.prototype, "updateManyZones", null);
UpdateManyZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], UpdateManyZonesResolver);
exports.UpdateManyZonesResolver = UpdateManyZonesResolver;
