"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTicketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTicketingArgs_1 = require("./args/GroupByTicketingArgs");
const Ticketing_1 = require("../../../models/Ticketing");
const TicketingGroupBy_1 = require("../../outputs/TicketingGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTicketingResolver = class GroupByTicketingResolver {
    async groupByTicketing(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TicketingGroupBy_1.TicketingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTicketingArgs_1.GroupByTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTicketingResolver.prototype, "groupByTicketing", null);
GroupByTicketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], GroupByTicketingResolver);
exports.GroupByTicketingResolver = GroupByTicketingResolver;
