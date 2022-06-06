"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_1 = require("../../../models/Product_attribute");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const Products_1 = require("../../../models/Products");
const Product_attributeProduct_attribute_setArgs_1 = require("./args/Product_attributeProduct_attribute_setArgs");
const helpers_1 = require("../../../helpers");
let Product_attributeRelationsResolver = class Product_attributeRelationsResolver {
    async products(product_attribute, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findUnique({
            where: {
                id: product_attribute.id,
            },
        }).products({});
    }
    async product_attribute_set(product_attribute, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findUnique({
            where: {
                id: product_attribute.id,
            },
        }).product_attribute_set(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_attribute_1.Product_attribute, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeRelationsResolver.prototype, "products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_attribute_set_1.Product_attribute_set], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_attribute_1.Product_attribute, Object, Product_attributeProduct_attribute_setArgs_1.Product_attributeProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeRelationsResolver.prototype, "product_attribute_set", null);
Product_attributeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], Product_attributeRelationsResolver);
exports.Product_attributeRelationsResolver = Product_attributeRelationsResolver;
