"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCollectionsArgs_1 = require("./args/FindUniqueCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let FindUniqueCollectionsResolver = class FindUniqueCollectionsResolver {
    async findUniqueCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCollectionsArgs_1.FindUniqueCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCollectionsResolver.prototype, "findUniqueCollections", null);
FindUniqueCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], FindUniqueCollectionsResolver);
exports.FindUniqueCollectionsResolver = FindUniqueCollectionsResolver;
