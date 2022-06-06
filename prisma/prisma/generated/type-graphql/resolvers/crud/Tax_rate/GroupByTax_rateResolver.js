"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTax_rateArgs_1 = require("./args/GroupByTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const Tax_rateGroupBy_1 = require("../../outputs/Tax_rateGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTax_rateResolver = class GroupByTax_rateResolver {
    async groupByTax_rate(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_rateGroupBy_1.Tax_rateGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTax_rateArgs_1.GroupByTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTax_rateResolver.prototype, "groupByTax_rate", null);
GroupByTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], GroupByTax_rateResolver);
exports.GroupByTax_rateResolver = GroupByTax_rateResolver;
