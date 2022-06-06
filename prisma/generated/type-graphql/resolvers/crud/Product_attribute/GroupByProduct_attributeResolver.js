"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProduct_attributeArgs_1 = require("./args/GroupByProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const Product_attributeGroupBy_1 = require("../../outputs/Product_attributeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProduct_attributeResolver = class GroupByProduct_attributeResolver {
    async groupByProduct_attribute(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attributeGroupBy_1.Product_attributeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_attributeArgs_1.GroupByProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProduct_attributeResolver.prototype, "groupByProduct_attribute", null);
GroupByProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], GroupByProduct_attributeResolver);
exports.GroupByProduct_attributeResolver = GroupByProduct_attributeResolver;
