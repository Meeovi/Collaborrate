"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstZonesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstZonesOrThrowArgs_1 = require("./args/FindFirstZonesOrThrowArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let FindFirstZonesOrThrowResolver = class FindFirstZonesOrThrowResolver {
    async findFirstZonesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstZonesOrThrowArgs_1.FindFirstZonesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstZonesOrThrowResolver.prototype, "findFirstZonesOrThrow", null);
FindFirstZonesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], FindFirstZonesOrThrowResolver);
exports.FindFirstZonesOrThrowResolver = FindFirstZonesOrThrowResolver;
