"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyUpload_fileArgs_1 = require("./args/DeleteManyUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUpload_fileResolver = class DeleteManyUpload_fileResolver {
    async deleteManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUpload_fileArgs_1.DeleteManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyUpload_fileResolver.prototype, "deleteManyUpload_file", null);
DeleteManyUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], DeleteManyUpload_fileResolver);
exports.DeleteManyUpload_fileResolver = DeleteManyUpload_fileResolver;
