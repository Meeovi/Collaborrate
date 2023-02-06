"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyUpload_fileArgs_1 = require("./args/UpdateManyUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUpload_fileResolver = class UpdateManyUpload_fileResolver {
    async updateManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyUpload_fileResolver.prototype, "updateManyUpload_file", null);
UpdateManyUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], UpdateManyUpload_fileResolver);
exports.UpdateManyUpload_fileResolver = UpdateManyUpload_fileResolver;
