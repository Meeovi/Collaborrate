"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUpload_file_morphResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertUpload_file_morphArgs_1 = require("./args/UpsertUpload_file_morphArgs");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const helpers_1 = require("../../../helpers");
let UpsertUpload_file_morphResolver = class UpsertUpload_file_morphResolver {
    async upsertUpload_file_morph(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Upload_file_morph_1.Upload_file_morph, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUpload_file_morphArgs_1.UpsertUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertUpload_file_morphResolver.prototype, "upsertUpload_file_morph", null);
UpsertUpload_file_morphResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_morph_1.Upload_file_morph)
], UpsertUpload_file_morphResolver);
exports.UpsertUpload_file_morphResolver = UpsertUpload_file_morphResolver;
