"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyUpload_fileArgs_1 = require("./args/CreateManyUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyUpload_fileResolver = class CreateManyUpload_fileResolver {
    async createManyUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUpload_fileArgs_1.CreateManyUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyUpload_fileResolver.prototype, "createManyUpload_file", null);
CreateManyUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], CreateManyUpload_fileResolver);
exports.CreateManyUpload_fileResolver = CreateManyUpload_fileResolver;
