"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByProduct_typesArgs_1 = require("./args/GroupByProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const Product_typesGroupBy_1 = require("../../outputs/Product_typesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProduct_typesResolver = class GroupByProduct_typesResolver {
    async groupByProduct_types(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_typesGroupBy_1.Product_typesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_typesArgs_1.GroupByProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProduct_typesResolver.prototype, "groupByProduct_types", null);
GroupByProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], GroupByProduct_typesResolver);
exports.GroupByProduct_typesResolver = GroupByProduct_typesResolver;
