"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCollectionsArgs_1 = require("./args/UpsertOneCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let UpsertOneCollectionsResolver = class UpsertOneCollectionsResolver {
    async upsertOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCollectionsArgs_1.UpsertOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCollectionsResolver.prototype, "upsertOneCollections", null);
UpsertOneCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], UpsertOneCollectionsResolver);
exports.UpsertOneCollectionsResolver = UpsertOneCollectionsResolver;
