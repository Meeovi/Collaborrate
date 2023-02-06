"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShipmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneShipmentsArgs_1 = require("./args/CreateOneShipmentsArgs");
const Shipments_1 = require("../../../models/Shipments");
const helpers_1 = require("../../../helpers");
let CreateOneShipmentsResolver = class CreateOneShipmentsResolver {
    async createOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneShipmentsArgs_1.CreateOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneShipmentsResolver.prototype, "createOneShipments", null);
CreateOneShipmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], CreateOneShipmentsResolver);
exports.CreateOneShipmentsResolver = CreateOneShipmentsResolver;
