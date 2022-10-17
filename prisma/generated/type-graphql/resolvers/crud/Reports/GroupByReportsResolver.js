"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReportsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReportsArgs_1 = require("./args/GroupByReportsArgs");
const Reports_1 = require("../../../models/Reports");
const ReportsGroupBy_1 = require("../../outputs/ReportsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReportsResolver = class GroupByReportsResolver {
    async groupByReports(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReportsGroupBy_1.ReportsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReportsArgs_1.GroupByReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReportsResolver.prototype, "groupByReports", null);
GroupByReportsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], GroupByReportsResolver);
exports.GroupByReportsResolver = GroupByReportsResolver;
