"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueShipmentsArgs_1 = require("./args/FindUniqueShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let FindUniqueShipmentsResolver = class FindUniqueShipmentsResolver {
    async findUniqueShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShipmentsArgs_1.FindUniqueShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueShipmentsResolver.prototype, "findUniqueShipments", null);
FindUniqueShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], FindUniqueShipmentsResolver);
exports.FindUniqueShipmentsResolver = FindUniqueShipmentsResolver;
