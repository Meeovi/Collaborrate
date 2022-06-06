"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProduct_attributeArgs_1 = require("./args/AggregateProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const AggregateProduct_attribute_1 = require("../../outputs/AggregateProduct_attribute");
const helpers_1 = require("../../../helpers");
let AggregateProduct_attributeResolver = class AggregateProduct_attributeResolver {
    async aggregateProduct_attribute(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_attribute_1.AggregateProduct_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_attributeArgs_1.AggregateProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProduct_attributeResolver.prototype, "aggregateProduct_attribute", null);
AggregateProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], AggregateProduct_attributeResolver);
exports.AggregateProduct_attributeResolver = AggregateProduct_attributeResolver;
