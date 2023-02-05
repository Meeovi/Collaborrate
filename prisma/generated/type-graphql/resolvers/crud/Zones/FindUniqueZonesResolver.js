"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueZonesArgs_1 = require("./args/FindUniqueZonesArgs");
const Zones_1 = require("../../../models/Zones");
const helpers_1 = require("../../../helpers");
let FindUniqueZonesResolver = class FindUniqueZonesResolver {
    async findUniqueZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueZonesArgs_1.FindUniqueZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueZonesResolver.prototype, "findUniqueZones", null);
FindUniqueZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], FindUniqueZonesResolver);
exports.FindUniqueZonesResolver = FindUniqueZonesResolver;
