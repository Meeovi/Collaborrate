"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByEndofshiftArgs_1 = require("./args/GroupByEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const EndofshiftGroupBy_1 = require("../../outputs/EndofshiftGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEndofshiftResolver = class GroupByEndofshiftResolver {
    async groupByEndofshift(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EndofshiftGroupBy_1.EndofshiftGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEndofshiftArgs_1.GroupByEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEndofshiftResolver.prototype, "groupByEndofshift", null);
GroupByEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], GroupByEndofshiftResolver);
exports.GroupByEndofshiftResolver = GroupByEndofshiftResolver;
