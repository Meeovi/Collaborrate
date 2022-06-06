"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByOpportunitiesArgs_1 = require("./args/GroupByOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const OpportunitiesGroupBy_1 = require("../../outputs/OpportunitiesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOpportunitiesResolver = class GroupByOpportunitiesResolver {
    async groupByOpportunities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OpportunitiesGroupBy_1.OpportunitiesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOpportunitiesArgs_1.GroupByOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOpportunitiesResolver.prototype, "groupByOpportunities", null);
GroupByOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], GroupByOpportunitiesResolver);
exports.GroupByOpportunitiesResolver = GroupByOpportunitiesResolver;
