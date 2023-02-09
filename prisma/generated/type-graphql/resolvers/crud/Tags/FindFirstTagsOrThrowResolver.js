"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTagsOrThrowArgs_1 = require("./args/FindFirstTagsOrThrowArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let FindFirstTagsOrThrowResolver = class FindFirstTagsOrThrowResolver {
    async findFirstTagsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOrThrowArgs_1.FindFirstTagsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTagsOrThrowResolver.prototype, "findFirstTagsOrThrow", null);
FindFirstTagsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], FindFirstTagsOrThrowResolver);
exports.FindFirstTagsOrThrowResolver = FindFirstTagsOrThrowResolver;
