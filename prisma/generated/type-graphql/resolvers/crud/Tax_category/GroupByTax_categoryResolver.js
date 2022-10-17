"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTax_categoryArgs_1 = require("./args/GroupByTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const Tax_categoryGroupBy_1 = require("../../outputs/Tax_categoryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTax_categoryResolver = class GroupByTax_categoryResolver {
    async groupByTax_category(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_categoryGroupBy_1.Tax_categoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTax_categoryArgs_1.GroupByTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTax_categoryResolver.prototype, "groupByTax_category", null);
GroupByTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], GroupByTax_categoryResolver);
exports.GroupByTax_categoryResolver = GroupByTax_categoryResolver;
