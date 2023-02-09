"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneUpload_fileArgs_1 = require("./args/UpsertOneUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let UpsertOneUpload_fileResolver = class UpsertOneUpload_fileResolver {
    async upsertOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneUpload_fileResolver.prototype, "upsertOneUpload_file", null);
UpsertOneUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], UpsertOneUpload_fileResolver);
exports.UpsertOneUpload_fileResolver = UpsertOneUpload_fileResolver;
