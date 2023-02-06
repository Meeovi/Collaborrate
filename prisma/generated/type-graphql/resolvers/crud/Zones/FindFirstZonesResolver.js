"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstZonesArgs_1 = require("./args/FindFirstZonesArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let FindFirstZonesResolver = class FindFirstZonesResolver {
    async findFirstZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstZonesArgs_1.FindFirstZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstZonesResolver.prototype, "findFirstZones", null);
FindFirstZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], FindFirstZonesResolver);
exports.FindFirstZonesResolver = FindFirstZonesResolver;
