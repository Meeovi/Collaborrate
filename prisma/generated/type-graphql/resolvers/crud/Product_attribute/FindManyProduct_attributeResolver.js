"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyProduct_attributeArgs_1 = require("./args/FindManyProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const helpers_1 = require("../../../helpers");
let FindManyProduct_attributeResolver = class FindManyProduct_attributeResolver {
    async product_attributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_1.Product_attribute], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_attributeArgs_1.FindManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProduct_attributeResolver.prototype, "product_attributes", null);
FindManyProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], FindManyProduct_attributeResolver);
exports.FindManyProduct_attributeResolver = FindManyProduct_attributeResolver;
