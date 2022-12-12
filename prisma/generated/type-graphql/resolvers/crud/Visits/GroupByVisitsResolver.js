"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByVisitsArgs_1 = require("./args/GroupByVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const VisitsGroupBy_1 = require("../../outputs/VisitsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVisitsResolver = class GroupByVisitsResolver {
    async groupByVisits(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VisitsGroupBy_1.VisitsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVisitsArgs_1.GroupByVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByVisitsResolver.prototype, "groupByVisits", null);
GroupByVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], GroupByVisitsResolver);
exports.GroupByVisitsResolver = GroupByVisitsResolver;
