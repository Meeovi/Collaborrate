"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_attribute_setResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByProduct_attribute_setArgs_1 = require("./args/GroupByProduct_attribute_setArgs");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const Product_attribute_setGroupBy_1 = require("../../outputs/Product_attribute_setGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProduct_attribute_setResolver = class GroupByProduct_attribute_setResolver {
    async groupByProduct_attribute_set(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_setGroupBy_1.Product_attribute_setGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_attribute_setArgs_1.GroupByProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProduct_attribute_setResolver.prototype, "groupByProduct_attribute_set", null);
GroupByProduct_attribute_setResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], GroupByProduct_attribute_setResolver);
exports.GroupByProduct_attribute_setResolver = GroupByProduct_attribute_setResolver;
