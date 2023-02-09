"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUpload_fileOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUpload_fileOrThrowArgs_1 = require("./args/FindFirstUpload_fileOrThrowArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let FindFirstUpload_fileOrThrowResolver = class FindFirstUpload_fileOrThrowResolver {
    async findFirstUpload_fileOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUpload_fileOrThrowArgs_1.FindFirstUpload_fileOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUpload_fileOrThrowResolver.prototype, "findFirstUpload_fileOrThrow", null);
FindFirstUpload_fileOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], FindFirstUpload_fileOrThrowResolver);
exports.FindFirstUpload_fileOrThrowResolver = FindFirstUpload_fileOrThrowResolver;
