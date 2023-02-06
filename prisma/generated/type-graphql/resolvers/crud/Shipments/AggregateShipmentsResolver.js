"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShipmentsArgs_1 = require("./args/AggregateShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const AggregateShipments_1 = require("../../outputs/AggregateShipments");
const helpers_1 = require("../../../helpers");
let AggregateShipmentsResolver = class AggregateShipmentsResolver {
    async aggregateShipments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShipments_1.AggregateShipments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShipmentsArgs_1.AggregateShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShipmentsResolver.prototype, "aggregateShipments", null);
AggregateShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], AggregateShipmentsResolver);
exports.AggregateShipmentsResolver = AggregateShipmentsResolver;
