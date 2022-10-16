"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByEventsArgs_1 = require("./args/GroupByEventsArgs");
const Events_1 = require("../../../models/Events");
const EventsGroupBy_1 = require("../../outputs/EventsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEventsResolver = class GroupByEventsResolver {
    async groupByEvents(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EventsGroupBy_1.EventsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEventsArgs_1.GroupByEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEventsResolver.prototype, "groupByEvents", null);
GroupByEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], GroupByEventsResolver);
exports.GroupByEventsResolver = GroupByEventsResolver;
