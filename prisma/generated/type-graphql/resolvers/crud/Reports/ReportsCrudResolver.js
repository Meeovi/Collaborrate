"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReportsArgs_1 = require("./args/AggregateReportsArgs");
const CreateManyReportsArgs_1 = require("./args/CreateManyReportsArgs");
const CreateReportsArgs_1 = require("./args/CreateReportsArgs");
const DeleteManyReportsArgs_1 = require("./args/DeleteManyReportsArgs");
const DeleteReportsArgs_1 = require("./args/DeleteReportsArgs");
const FindFirstReportsArgs_1 = require("./args/FindFirstReportsArgs");
const FindManyReportsArgs_1 = require("./args/FindManyReportsArgs");
const FindUniqueReportsArgs_1 = require("./args/FindUniqueReportsArgs");
const GroupByReportsArgs_1 = require("./args/GroupByReportsArgs");
const UpdateManyReportsArgs_1 = require("./args/UpdateManyReportsArgs");
const UpdateReportsArgs_1 = require("./args/UpdateReportsArgs");
const UpsertReportsArgs_1 = require("./args/UpsertReportsArgs");
const helpers_1 = require("../../../helpers");
const Reports_1 = require("../../../models/Reports");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReports_1 = require("../../outputs/AggregateReports");
const ReportsGroupBy_1 = require("../../outputs/ReportsGroupBy");
let ReportsCrudResolver = class ReportsCrudResolver {
    async findUniqueReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReports(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReports(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReportsArgs_1.FindUniqueReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "findUniqueReports", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReportsArgs_1.FindFirstReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "findFirstReports", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reports_1.Reports], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReportsArgs_1.FindManyReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "findManyReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReportsArgs_1.CreateReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "createReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReportsArgs_1.CreateManyReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "createManyReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReportsArgs_1.DeleteReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "deleteReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReportsArgs_1.UpdateReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "updateReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReportsArgs_1.DeleteManyReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "deleteManyReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReportsArgs_1.UpdateManyReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "updateManyReports", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reports_1.Reports, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReportsArgs_1.UpsertReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "upsertReports", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReports_1.AggregateReports, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReportsArgs_1.AggregateReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportsCrudResolver.prototype, "aggregateReports", null);
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
], ReportsCrudResolver.prototype, "groupByReports", null);
ReportsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], ReportsCrudResolver);
exports.ReportsCrudResolver = ReportsCrudResolver;
