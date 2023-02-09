"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneUpload_fileArgs_1 = require("./args/CreateOneUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let CreateOneUpload_fileResolver = class CreateOneUpload_fileResolver {
    async createOneUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUpload_fileArgs_1.CreateOneUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneUpload_fileResolver.prototype, "createOneUpload_file", null);
CreateOneUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], CreateOneUpload_fileResolver);
exports.CreateOneUpload_fileResolver = CreateOneUpload_fileResolver;
