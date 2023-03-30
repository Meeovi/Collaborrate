"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUpload_fileArgs_1 = require("./args/FindUniqueUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let FindUniqueUpload_fileResolver = class FindUniqueUpload_fileResolver {
    async upload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUpload_fileArgs_1.FindUniqueUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUpload_fileResolver.prototype, "upload_file", null);
FindUniqueUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], FindUniqueUpload_fileResolver);
exports.FindUniqueUpload_fileResolver = FindUniqueUpload_fileResolver;
