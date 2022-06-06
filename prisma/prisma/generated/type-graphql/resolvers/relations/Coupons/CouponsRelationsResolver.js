"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Coupons_1 = require("../../../models/Coupons");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let CouponsRelationsResolver = class CouponsRelationsResolver {
    async products_couponsToproducts(coupons, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findUnique({
            where: {
                id: coupons.id,
            },
        }).products_couponsToproducts({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Coupons_1.Coupons, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsRelationsResolver.prototype, "products_couponsToproducts", null);
CouponsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], CouponsRelationsResolver);
exports.CouponsRelationsResolver = CouponsRelationsResolver;
