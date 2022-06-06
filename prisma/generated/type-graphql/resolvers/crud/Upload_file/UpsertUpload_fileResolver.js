"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertUpload_fileArgs_1 = require("./args/UpsertUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const helpers_1 = require("../../../helpers");
let UpsertUpload_fileResolver = class UpsertUpload_fileResolver {
    async upsertUpload_file(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.upsert({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUpload_fileArgs_1.UpsertUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertUpload_fileResolver.prototype, "upsertUpload_file", null);
UpsertUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], UpsertUpload_fileResolver);
exports.UpsertUpload_fileResolver = UpsertUpload_fileResolver;
