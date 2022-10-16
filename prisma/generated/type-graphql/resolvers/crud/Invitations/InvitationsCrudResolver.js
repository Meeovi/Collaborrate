"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInvitationsArgs_1 = require("./args/AggregateInvitationsArgs");
const CreateManyInvitationsArgs_1 = require("./args/CreateManyInvitationsArgs");
const CreateOneInvitationsArgs_1 = require("./args/CreateOneInvitationsArgs");
const DeleteManyInvitationsArgs_1 = require("./args/DeleteManyInvitationsArgs");
const DeleteOneInvitationsArgs_1 = require("./args/DeleteOneInvitationsArgs");
const FindFirstInvitationsArgs_1 = require("./args/FindFirstInvitationsArgs");
const FindManyInvitationsArgs_1 = require("./args/FindManyInvitationsArgs");
const FindUniqueInvitationsArgs_1 = require("./args/FindUniqueInvitationsArgs");
const GroupByInvitationsArgs_1 = require("./args/GroupByInvitationsArgs");
const UpdateManyInvitationsArgs_1 = require("./args/UpdateManyInvitationsArgs");
const UpdateOneInvitationsArgs_1 = require("./args/UpdateOneInvitationsArgs");
const UpsertOneInvitationsArgs_1 = require("./args/UpsertOneInvitationsArgs");
const helpers_1 = require("../../../helpers");
const Invitations_1 = require("../../../models/Invitations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInvitations_1 = require("../../outputs/AggregateInvitations");
const InvitationsGroupBy_1 = require("../../outputs/InvitationsGroupBy");
let InvitationsCrudResolver = class InvitationsCrudResolver {
    async aggregateInvitations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByInvitations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInvitations_1.AggregateInvitations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInvitationsArgs_1.AggregateInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "aggregateInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInvitationsArgs_1.CreateManyInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "createManyInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInvitationsArgs_1.CreateOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "createOneInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInvitationsArgs_1.DeleteManyInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "deleteManyInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInvitationsArgs_1.DeleteOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "deleteOneInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Invitations_1.Invitations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInvitationsArgs_1.FindFirstInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "findFirstInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Invitations_1.Invitations], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInvitationsArgs_1.FindManyInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "findManyInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Invitations_1.Invitations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInvitationsArgs_1.FindUniqueInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "findUniqueInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InvitationsGroupBy_1.InvitationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInvitationsArgs_1.GroupByInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "groupByInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInvitationsArgs_1.UpdateManyInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "updateManyInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInvitationsArgs_1.UpdateOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "updateOneInvitations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInvitationsArgs_1.UpsertOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitationsCrudResolver.prototype, "upsertOneInvitations", null);
InvitationsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], InvitationsCrudResolver);
exports.InvitationsCrudResolver = InvitationsCrudResolver;
