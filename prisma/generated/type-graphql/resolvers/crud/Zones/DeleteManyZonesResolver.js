"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyZonesArgs_1 = require("./args/DeleteManyZonesArgs");
const Zones_1 = require("../../../models/Zones");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyZonesResolver = class DeleteManyZonesResolver {
    async deleteManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyZonesArgs_1.DeleteManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyZonesResolver.prototype, "deleteManyZones", null);
DeleteManyZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], DeleteManyZonesResolver);
exports.DeleteManyZonesResolver = DeleteManyZonesResolver;
