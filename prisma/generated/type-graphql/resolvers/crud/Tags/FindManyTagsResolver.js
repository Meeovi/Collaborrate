"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTagsArgs_1 = require("./args/FindManyTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let FindManyTagsResolver = class FindManyTagsResolver {
    async findManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tags_1.Tags], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsArgs_1.FindManyTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTagsResolver.prototype, "findManyTags", null);
FindManyTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], FindManyTagsResolver);
exports.FindManyTagsResolver = FindManyTagsResolver;
