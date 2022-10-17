"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLeadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByLeadsArgs_1 = require("./args/GroupByLeadsArgs");
const Leads_1 = require("../../../models/Leads");
const LeadsGroupBy_1 = require("../../outputs/LeadsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLeadsResolver = class GroupByLeadsResolver {
    async groupByLeads(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LeadsGroupBy_1.LeadsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLeadsArgs_1.GroupByLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLeadsResolver.prototype, "groupByLeads", null);
GroupByLeadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], GroupByLeadsResolver);
exports.GroupByLeadsResolver = GroupByLeadsResolver;
