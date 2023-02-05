"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCollectionsArgs_1 = require("./args/FindFirstCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let FindFirstCollectionsResolver = class FindFirstCollectionsResolver {
    async findFirstCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCollectionsArgs_1.FindFirstCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCollectionsResolver.prototype, "findFirstCollections", null);
FindFirstCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], FindFirstCollectionsResolver);
exports.FindFirstCollectionsResolver = FindFirstCollectionsResolver;
