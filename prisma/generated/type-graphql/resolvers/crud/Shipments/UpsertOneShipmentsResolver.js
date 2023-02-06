"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneShipmentsArgs_1 = require("./args/UpsertOneShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let UpsertOneShipmentsResolver = class UpsertOneShipmentsResolver {
    async upsertOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneShipmentsArgs_1.UpsertOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneShipmentsResolver.prototype, "upsertOneShipments", null);
UpsertOneShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], UpsertOneShipmentsResolver);
exports.UpsertOneShipmentsResolver = UpsertOneShipmentsResolver;
