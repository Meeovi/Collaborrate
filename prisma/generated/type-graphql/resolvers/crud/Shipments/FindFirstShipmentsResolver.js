"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstShipmentsArgs_1 = require("./args/FindFirstShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let FindFirstShipmentsResolver = class FindFirstShipmentsResolver {
    async findFirstShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShipmentsArgs_1.FindFirstShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstShipmentsResolver.prototype, "findFirstShipments", null);
FindFirstShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], FindFirstShipmentsResolver);
exports.FindFirstShipmentsResolver = FindFirstShipmentsResolver;
