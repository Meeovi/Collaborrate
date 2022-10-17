"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMeetingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMeetingArgs_1 = require("./args/GroupByMeetingArgs");
const Meeting_1 = require("../../../models/Meeting");
const MeetingGroupBy_1 = require("../../outputs/MeetingGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMeetingResolver = class GroupByMeetingResolver {
    async groupByMeeting(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MeetingGroupBy_1.MeetingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMeetingArgs_1.GroupByMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMeetingResolver.prototype, "groupByMeeting", null);
GroupByMeetingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], GroupByMeetingResolver);
exports.GroupByMeetingResolver = GroupByMeetingResolver;
