"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUpload_fileArgs_1 = require("./args/AggregateUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const AggregateUpload_file_1 = require("../../outputs/AggregateUpload_file");
const helpers_1 = require("../../../helpers");
let AggregateUpload_fileResolver = class AggregateUpload_fileResolver {
    async aggregateUpload_file(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUpload_file_1.AggregateUpload_file, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUpload_fileArgs_1.AggregateUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUpload_fileResolver.prototype, "aggregateUpload_file", null);
AggregateUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], AggregateUpload_fileResolver);
exports.AggregateUpload_fileResolver = AggregateUpload_fileResolver;
