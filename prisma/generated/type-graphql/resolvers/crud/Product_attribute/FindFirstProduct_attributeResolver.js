"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstProduct_attributeArgs_1 = require("./args/FindFirstProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const helpers_1 = require("../../../helpers");
let FindFirstProduct_attributeResolver = class FindFirstProduct_attributeResolver {
    async findFirstProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_attributeArgs_1.FindFirstProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProduct_attributeResolver.prototype, "findFirstProduct_attribute", null);
FindFirstProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], FindFirstProduct_attributeResolver);
exports.FindFirstProduct_attributeResolver = FindFirstProduct_attributeResolver;
