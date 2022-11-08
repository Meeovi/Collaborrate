"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisitsArgs_1 = require("./args/AggregateVisitsArgs");
const CreateManyVisitsArgs_1 = require("./args/CreateManyVisitsArgs");
const CreateOneVisitsArgs_1 = require("./args/CreateOneVisitsArgs");
const DeleteManyVisitsArgs_1 = require("./args/DeleteManyVisitsArgs");
const DeleteOneVisitsArgs_1 = require("./args/DeleteOneVisitsArgs");
const FindFirstVisitsArgs_1 = require("./args/FindFirstVisitsArgs");
const FindManyVisitsArgs_1 = require("./args/FindManyVisitsArgs");
const FindUniqueVisitsArgs_1 = require("./args/FindUniqueVisitsArgs");
const GroupByVisitsArgs_1 = require("./args/GroupByVisitsArgs");
const UpdateManyVisitsArgs_1 = require("./args/UpdateManyVisitsArgs");
const UpdateOneVisitsArgs_1 = require("./args/UpdateOneVisitsArgs");
const UpsertOneVisitsArgs_1 = require("./args/UpsertOneVisitsArgs");
const helpers_1 = require("../../../helpers");
const Visits_1 = require("../../../models/Visits");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVisits_1 = require("../../outputs/AggregateVisits");
const VisitsGroupBy_1 = require("../../outputs/VisitsGroupBy");
let VisitsCrudResolver = class VisitsCrudResolver {
    async aggregateVisits(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByVisits(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVisits_1.AggregateVisits, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisitsArgs_1.AggregateVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "aggregateVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVisitsArgs_1.CreateManyVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "createManyVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneVisitsArgs_1.CreateOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "createOneVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVisitsArgs_1.DeleteManyVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "deleteManyVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVisitsArgs_1.DeleteOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "deleteOneVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVisitsArgs_1.FindFirstVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "findFirstVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Visits_1.Visits], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVisitsArgs_1.FindManyVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "findManyVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVisitsArgs_1.FindUniqueVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "findUniqueVisits", null);
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
], VisitsCrudResolver.prototype, "groupByVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVisitsArgs_1.UpdateManyVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "updateManyVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVisitsArgs_1.UpdateOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "updateOneVisits", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneVisitsArgs_1.UpsertOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisitsCrudResolver.prototype, "upsertOneVisits", null);
VisitsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], VisitsCrudResolver);
exports.VisitsCrudResolver = VisitsCrudResolver;
