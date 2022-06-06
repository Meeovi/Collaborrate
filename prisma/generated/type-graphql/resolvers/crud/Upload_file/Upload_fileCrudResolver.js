"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUpload_fileArgs_1 = require("./args/AggregateUpload_fileArgs");
const CreateManyUpload_fileArgs_1 = require("./args/CreateManyUpload_fileArgs");
const CreateUpload_fileArgs_1 = require("./args/CreateUpload_fileArgs");
const DeleteManyUpload_fileArgs_1 = require("./args/DeleteManyUpload_fileArgs");
const DeleteUpload_fileArgs_1 = require("./args/DeleteUpload_fileArgs");
const FindFirstUpload_fileArgs_1 = require("./args/FindFirstUpload_fileArgs");
const FindManyUpload_fileArgs_1 = require("./args/FindManyUpload_fileArgs");
const FindUniqueUpload_fileArgs_1 = require("./args/FindUniqueUpload_fileArgs");
const GroupByUpload_fileArgs_1 = require("./args/GroupByUpload_fileArgs");
const UpdateManyUpload_fileArgs_1 = require("./args/UpdateManyUpload_fileArgs");
const UpdateUpload_fileArgs_1 = require("./args/UpdateUpload_fileArgs");
const UpsertUpload_fileArgs_1 = require("./args/UpsertUpload_fileArgs");
const helpers_1 = require("../../../helpers");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUpload_file_1 = require("../../outputs/AggregateUpload_file");
const Upload_fileGroupBy_1 = require("../../outputs/Upload_fileGroupBy");
let Upload_fileCrudResolver = class Upload_fileCrudResolver {
    async upload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upload_files(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateUpload_file(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByUpload_file(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUpload_fileArgs_1.FindFirstUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "findFirstUpload_file", null);
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
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateUpload_fileArgs_1.CreateUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "createUpload_file", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteUpload_fileArgs_1.DeleteUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "deleteUpload_file", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_1.Upload_file, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateUpload_fileArgs_1.UpdateUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "updateUpload_file", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUpload_fileArgs_1.UpsertUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_fileCrudResolver.prototype, "upsertUpload_file", null);
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
Upload_fileCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], Upload_fileCrudResolver);
exports.Upload_fileCrudResolver = Upload_fileCrudResolver;
