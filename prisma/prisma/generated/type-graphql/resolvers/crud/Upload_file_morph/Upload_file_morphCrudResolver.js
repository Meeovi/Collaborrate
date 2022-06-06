"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUpload_file_morphArgs_1 = require("./args/AggregateUpload_file_morphArgs");
const CreateManyUpload_file_morphArgs_1 = require("./args/CreateManyUpload_file_morphArgs");
const CreateUpload_file_morphArgs_1 = require("./args/CreateUpload_file_morphArgs");
const DeleteManyUpload_file_morphArgs_1 = require("./args/DeleteManyUpload_file_morphArgs");
const DeleteUpload_file_morphArgs_1 = require("./args/DeleteUpload_file_morphArgs");
const FindFirstUpload_file_morphArgs_1 = require("./args/FindFirstUpload_file_morphArgs");
const FindManyUpload_file_morphArgs_1 = require("./args/FindManyUpload_file_morphArgs");
const FindUniqueUpload_file_morphArgs_1 = require("./args/FindUniqueUpload_file_morphArgs");
const GroupByUpload_file_morphArgs_1 = require("./args/GroupByUpload_file_morphArgs");
const UpdateManyUpload_file_morphArgs_1 = require("./args/UpdateManyUpload_file_morphArgs");
const UpdateUpload_file_morphArgs_1 = require("./args/UpdateUpload_file_morphArgs");
const UpsertUpload_file_morphArgs_1 = require("./args/UpsertUpload_file_morphArgs");
const helpers_1 = require("../../../helpers");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUpload_file_morph_1 = require("../../outputs/AggregateUpload_file_morph");
const Upload_file_morphGroupBy_1 = require("../../outputs/Upload_file_morphGroupBy");
let Upload_file_morphCrudResolver = class Upload_file_morphCrudResolver {
    async upload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upload_file_morphs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateUpload_file_morph(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByUpload_file_morph(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUpload_file_morphArgs_1.FindUniqueUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "upload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUpload_file_morphArgs_1.FindFirstUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "findFirstUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_file_morph_1.Upload_file_morph], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUpload_file_morphArgs_1.FindManyUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "upload_file_morphs", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateUpload_file_morphArgs_1.CreateUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "createUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUpload_file_morphArgs_1.CreateManyUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "createManyUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteUpload_file_morphArgs_1.DeleteUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "deleteUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateUpload_file_morphArgs_1.UpdateUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "updateUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUpload_file_morphArgs_1.DeleteManyUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "deleteManyUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUpload_file_morphArgs_1.UpdateManyUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "updateManyUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUpload_file_morphArgs_1.UpsertUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "upsertUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUpload_file_morph_1.AggregateUpload_file_morph, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUpload_file_morphArgs_1.AggregateUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "aggregateUpload_file_morph", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_file_morphGroupBy_1.Upload_file_morphGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUpload_file_morphArgs_1.GroupByUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Upload_file_morphCrudResolver.prototype, "groupByUpload_file_morph", null);
Upload_file_morphCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_morph_1.Upload_file_morph)
], Upload_file_morphCrudResolver);
exports.Upload_file_morphCrudResolver = Upload_file_morphCrudResolver;
