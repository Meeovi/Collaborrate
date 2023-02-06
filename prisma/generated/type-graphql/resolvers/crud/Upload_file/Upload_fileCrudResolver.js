"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUpload_fileArgs_1 = require("./args/AggregateUpload_fileArgs");
const CreateManyUpload_fileArgs_1 = require("./args/CreateManyUpload_fileArgs");
const CreateOneUpload_fileArgs_1 = require("./args/CreateOneUpload_fileArgs");
const DeleteManyUpload_fileArgs_1 = require("./args/DeleteManyUpload_fileArgs");
const DeleteOneUpload_fileArgs_1 = require("./args/DeleteOneUpload_fileArgs");
const FindFirstUpload_fileArgs_1 = require("./args/FindFirstUpload_fileArgs");
const FindFirstUpload_fileOrThrowArgs_1 = require("./args/FindFirstUpload_fileOrThrowArgs");
const FindManyUpload_fileArgs_1 = require("./args/FindManyUpload_fileArgs");
const FindUniqueUpload_fileArgs_1 = require("./args/FindUniqueUpload_fileArgs");
const FindUniqueUpload_fileOrThrowArgs_1 = require("./args/FindUniqueUpload_fileOrThrowArgs");
const GroupByUpload_fileArgs_1 = require("./args/GroupByUpload_fileArgs");
const UpdateManyUpload_fileArgs_1 = require("./args/UpdateManyUpload_fileArgs");
const UpdateOneUpload_fileArgs_1 = require("./args/UpdateOneUpload_fileArgs");
const UpsertOneUpload_fileArgs_1 = require("./args/UpsertOneUpload_fileArgs");
const helpers_1 = require("../../../helpers");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUpload_file_1 = require("../../outputs/AggregateUpload_file");
const Upload_fileGroupBy_1 = require("../../outputs/Upload_fileGroupBy");
let Upload_fileCrudResolver = class Upload_fileCrudResolver {
    async aggregateUpload_file(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUpload_fileOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upload_files(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUpload_file(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUpload_file_1.AggregateUpload_file, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUpload_fileArgs_1.AggregateUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "aggregateUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUpload_fileArgs_1.CreateManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "createManyUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUpload_fileArgs_1.CreateOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "createOneUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUpload_fileArgs_1.DeleteManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "deleteManyUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUpload_fileArgs_1.DeleteOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "deleteOneUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUpload_fileArgs_1.FindFirstUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "findFirstUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUpload_fileOrThrowArgs_1.FindFirstUpload_fileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "findFirstUpload_fileOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_file_1.Upload_file], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUpload_fileArgs_1.FindManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upload_files", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUpload_fileArgs_1.FindUniqueUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUpload_fileOrThrowArgs_1.FindUniqueUpload_fileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "getUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_fileGroupBy_1.Upload_fileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUpload_fileArgs_1.GroupByUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "groupByUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUpload_fileArgs_1.UpdateManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "updateManyUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUpload_fileArgs_1.UpdateOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "updateOneUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUpload_fileArgs_1.UpsertOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upsertOneUpload_file", null);
Upload_fileCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], Upload_fileCrudResolver);
exports.Upload_fileCrudResolver = Upload_fileCrudResolver;
