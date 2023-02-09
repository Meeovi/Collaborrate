"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateZonesArgs_1 = require("./args/AggregateZonesArgs");
const Zones_1 = require("../../../models/Zones");
const AggregateZones_1 = require("../../outputs/AggregateZones");
const helpers_1 = require("../../../helpers");
let AggregateZonesResolver = class AggregateZonesResolver {
    async aggregateZones(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateZones_1.AggregateZones, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateZonesArgs_1.AggregateZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateZonesResolver.prototype, "aggregateZones", null);
AggregateZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], AggregateZonesResolver);
exports.AggregateZonesResolver = AggregateZonesResolver;
