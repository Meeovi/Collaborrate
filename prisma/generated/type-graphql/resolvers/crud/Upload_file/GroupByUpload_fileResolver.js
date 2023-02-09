"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUpload_fileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByUpload_fileArgs_1 = require("./args/GroupByUpload_fileArgs");
const Upload_file_1 = require("../../../models/Upload_file");
const Upload_fileGroupBy_1 = require("../../outputs/Upload_fileGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUpload_fileResolver = class GroupByUpload_fileResolver {
    async groupByUpload_file(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).upload_file.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Upload_fileGroupBy_1.Upload_fileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUpload_fileArgs_1.GroupByUpload_fileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUpload_fileResolver.prototype, "groupByUpload_file", null);
GroupByUpload_fileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Upload_file_1.Upload_file)
], GroupByUpload_fileResolver);
exports.GroupByUpload_fileResolver = GroupByUpload_fileResolver;
