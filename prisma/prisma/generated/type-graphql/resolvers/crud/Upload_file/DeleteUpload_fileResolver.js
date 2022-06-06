"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteUpload_fileArgs_1 = require("./args/DeleteUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let DeleteUpload_fileResolver = class DeleteUpload_fileResolver {
    async deleteUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteUpload_fileArgs_1.DeleteUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteUpload_fileResolver.prototype, "deleteUpload_file", null);
DeleteUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], DeleteUpload_fileResolver);
exports.DeleteUpload_fileResolver = DeleteUpload_fileResolver;
