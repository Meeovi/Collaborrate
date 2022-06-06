"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customers_1 = require("../../../models/Customers");
const Products_1 = require("../../../models/Products");
const Returns_1 = require("../../../models/Returns");
const helpers_1 = require("../../../helpers");
let ReturnsRelationsResolver = class ReturnsRelationsResolver {
    async customers(returns, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUnique({
            where: {
                id: returns.id,
            },
        }).customers({});
    }
    async products(returns, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUnique({
            where: {
                id: returns.id,
            },
        }).products({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Returns_1.Returns, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsRelationsResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Returns_1.Returns, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsRelationsResolver.prototype, "products", null);
ReturnsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], ReturnsRelationsResolver);
exports.ReturnsRelationsResolver = ReturnsRelationsResolver;
