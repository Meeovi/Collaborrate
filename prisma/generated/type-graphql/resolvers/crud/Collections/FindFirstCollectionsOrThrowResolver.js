"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCollectionsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCollectionsOrThrowArgs_1 = require("./args/FindFirstCollectionsOrThrowArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let FindFirstCollectionsOrThrowResolver = class FindFirstCollectionsOrThrowResolver {
    async findFirstCollectionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCollectionsOrThrowArgs_1.FindFirstCollectionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCollectionsOrThrowResolver.prototype, "findFirstCollectionsOrThrow", null);
FindFirstCollectionsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], FindFirstCollectionsOrThrowResolver);
exports.FindFirstCollectionsOrThrowResolver = FindFirstCollectionsOrThrowResolver;
