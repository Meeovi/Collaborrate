"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMeetingArgs_1 = require("./args/AggregateMeetingArgs");
const CreateManyMeetingArgs_1 = require("./args/CreateManyMeetingArgs");
const CreateMeetingArgs_1 = require("./args/CreateMeetingArgs");
const DeleteManyMeetingArgs_1 = require("./args/DeleteManyMeetingArgs");
const DeleteMeetingArgs_1 = require("./args/DeleteMeetingArgs");
const FindFirstMeetingArgs_1 = require("./args/FindFirstMeetingArgs");
const FindManyMeetingArgs_1 = require("./args/FindManyMeetingArgs");
const FindUniqueMeetingArgs_1 = require("./args/FindUniqueMeetingArgs");
const GroupByMeetingArgs_1 = require("./args/GroupByMeetingArgs");
const UpdateManyMeetingArgs_1 = require("./args/UpdateManyMeetingArgs");
const UpdateMeetingArgs_1 = require("./args/UpdateMeetingArgs");
const UpsertMeetingArgs_1 = require("./args/UpsertMeetingArgs");
const helpers_1 = require("../../../helpers");
const Meeting_1 = require("../../../models/Meeting");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMeeting_1 = require("../../outputs/AggregateMeeting");
const MeetingGroupBy_1 = require("../../outputs/MeetingGroupBy");
let MeetingCrudResolver = class MeetingCrudResolver {
    async meeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async meetings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMeeting(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMeeting(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMeeting(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meeting.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMeetingArgs_1.FindUniqueMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "meeting", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMeetingArgs_1.FindFirstMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "findFirstMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Meeting_1.Meeting], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMeetingArgs_1.FindManyMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "meetings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMeetingArgs_1.CreateMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "createMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMeetingArgs_1.CreateManyMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "createManyMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMeetingArgs_1.DeleteMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "deleteMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMeetingArgs_1.UpdateMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "updateMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMeetingArgs_1.DeleteManyMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "deleteManyMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMeetingArgs_1.UpdateManyMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "updateManyMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meeting_1.Meeting, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMeetingArgs_1.UpsertMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "upsertMeeting", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMeeting_1.AggregateMeeting, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMeetingArgs_1.AggregateMeetingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MeetingCrudResolver.prototype, "aggregateMeeting", null);
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
], MeetingCrudResolver.prototype, "groupByMeeting", null);
MeetingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meeting_1.Meeting)
], MeetingCrudResolver);
exports.MeetingCrudResolver = MeetingCrudResolver;
