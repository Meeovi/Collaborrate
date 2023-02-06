"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUpload_fileArgs_1 = require("./args/UpdateOneUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let UpdateOneUpload_fileResolver = class UpdateOneUpload_fileResolver {
    async updateOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUpload_fileArgs_1.UpdateOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUpload_fileResolver.prototype, "updateOneUpload_file", null);
UpdateOneUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], UpdateOneUpload_fileResolver);
exports.UpdateOneUpload_fileResolver = UpdateOneUpload_fileResolver;
