"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySourceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySourceArgs_1 = require("./args/GroupBySourceArgs");
const Source_1 = require("../../../models/Source");
const SourceGroupBy_1 = require("../../outputs/SourceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySourceResolver = class GroupBySourceResolver {
    async groupBySource(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SourceGroupBy_1.SourceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySourceArgs_1.GroupBySourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySourceResolver.prototype, "groupBySource", null);
GroupBySourceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], GroupBySourceResolver);
exports.GroupBySourceResolver = GroupBySourceResolver;
