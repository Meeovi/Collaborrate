"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateUpload_fileArgs_1 = require("./args/CreateUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let CreateUpload_fileResolver = class CreateUpload_fileResolver {
    async createUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateUpload_fileArgs_1.CreateUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateUpload_fileResolver.prototype, "createUpload_file", null);
CreateUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], CreateUpload_fileResolver);
exports.CreateUpload_fileResolver = CreateUpload_fileResolver;
