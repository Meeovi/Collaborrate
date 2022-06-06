"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_file_morphResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUpload_file_morphArgs_1 = require("./args/AggregateUpload_file_morphArgs");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const AggregateUpload_file_morph_1 = require("../../outputs/AggregateUpload_file_morph");
const helpers_1 = require("../../../helpers");
let AggregateUpload_file_morphResolver = class AggregateUpload_file_morphResolver {
    async aggregateUpload_file_morph(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUpload_file_morph_1.AggregateUpload_file_morph, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUpload_file_morphArgs_1.AggregateUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUpload_file_morphResolver.prototype, "aggregateUpload_file_morph", null);
AggregateUpload_file_morphResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_morph_1.Upload_file_morph)
], AggregateUpload_file_morphResolver);
exports.AggregateUpload_file_morphResolver = AggregateUpload_file_morphResolver;
