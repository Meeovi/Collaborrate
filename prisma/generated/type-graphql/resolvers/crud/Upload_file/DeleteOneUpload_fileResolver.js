"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneUpload_fileArgs_1 = require("./args/DeleteOneUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let DeleteOneUpload_fileResolver = class DeleteOneUpload_fileResolver {
    async deleteOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneUpload_fileResolver.prototype, "deleteOneUpload_file", null);
DeleteOneUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], DeleteOneUpload_fileResolver);
exports.DeleteOneUpload_fileResolver = DeleteOneUpload_fileResolver;
