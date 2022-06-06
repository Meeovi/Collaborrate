"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUpload_file_morphResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByUpload_file_morphArgs_1 = require("./args/GroupByUpload_file_morphArgs");
const Upload_file_morph_1 = require("../../../models/Upload_file_morph");
const Upload_file_morphGroupBy_1 = require("../../outputs/Upload_file_morphGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUpload_file_morphResolver = class GroupByUpload_file_morphResolver {
    async groupByUpload_file_morph(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file_morph.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_file_morphGroupBy_1.Upload_file_morphGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUpload_file_morphArgs_1.GroupByUpload_file_morphArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUpload_file_morphResolver.prototype, "groupByUpload_file_morph", null);
GroupByUpload_file_morphResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_morph_1.Upload_file_morph)
], GroupByUpload_file_morphResolver);
exports.GroupByUpload_file_morphResolver = GroupByUpload_file_morphResolver;
