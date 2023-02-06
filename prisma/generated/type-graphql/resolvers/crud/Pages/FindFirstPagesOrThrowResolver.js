"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPagesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPagesOrThrowArgs_1 = require("./args/FindFirstPagesOrThrowArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let FindFirstPagesOrThrowResolver = class FindFirstPagesOrThrowResolver {
    async findFirstPagesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPagesOrThrowArgs_1.FindFirstPagesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPagesOrThrowResolver.prototype, "findFirstPagesOrThrow", null);
FindFirstPagesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], FindFirstPagesOrThrowResolver);
exports.FindFirstPagesOrThrowResolver = FindFirstPagesOrThrowResolver;
