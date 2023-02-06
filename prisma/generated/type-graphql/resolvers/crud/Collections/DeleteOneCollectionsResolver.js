"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCollectionsArgs_1 = require("./args/DeleteOneCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let DeleteOneCollectionsResolver = class DeleteOneCollectionsResolver {
    async deleteOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCollectionsArgs_1.DeleteOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCollectionsResolver.prototype, "deleteOneCollections", null);
DeleteOneCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], DeleteOneCollectionsResolver);
exports.DeleteOneCollectionsResolver = DeleteOneCollectionsResolver;
