"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_1 = require("../../../models/Product_attribute");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const helpers_1 = require("../../../helpers");
let Product_attribute_setRelationsResolver = class Product_attribute_setRelationsResolver {
    async product_attribute(product_attribute_set, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.findUnique({
            where: {
                id: product_attribute_set.id,
            },
        }).product_attribute({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_attribute_1.Product_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_attribute_set_1.Product_attribute_set, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attribute_setRelationsResolver.prototype, "product_attribute", null);
Product_attribute_setRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], Product_attribute_setRelationsResolver);
exports.Product_attribute_setRelationsResolver = Product_attribute_setRelationsResolver;
