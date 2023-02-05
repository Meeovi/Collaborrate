"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneZonesArgs_1 = require("./args/UpsertOneZonesArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let UpsertOneZonesResolver = class UpsertOneZonesResolver {
    async upsertOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneZonesArgs_1.UpsertOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneZonesResolver.prototype, "upsertOneZones", null);
UpsertOneZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], UpsertOneZonesResolver);
exports.UpsertOneZonesResolver = UpsertOneZonesResolver;
