"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyUpload_fileArgs_1 = require("./args/FindManyUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let FindManyUpload_fileResolver = class FindManyUpload_fileResolver {
    async upload_files(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyUpload_fileResolver.prototype, "upload_files", null);
FindManyUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], FindManyUpload_fileResolver);
exports.FindManyUpload_fileResolver = FindManyUpload_fileResolver;
