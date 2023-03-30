"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueZonesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueZonesOrThrowArgs_1 = require("./args/FindUniqueZonesOrThrowArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let FindUniqueZonesOrThrowResolver = class FindUniqueZonesOrThrowResolver {
    async findUniqueZonesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueZonesOrThrowArgs_1.FindUniqueZonesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueZonesOrThrowResolver.prototype, "findUniqueZonesOrThrow", null);
FindUniqueZonesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], FindUniqueZonesOrThrowResolver);
exports.FindUniqueZonesOrThrowResolver = FindUniqueZonesOrThrowResolver;
