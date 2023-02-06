"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCollectionsArgs_1 = require("./args/UpdateOneCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const helpers_1 = require("../../../helpers");
let UpdateOneCollectionsResolver = class UpdateOneCollectionsResolver {
    async updateOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCollectionsArgs_1.UpdateOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCollectionsResolver.prototype, "updateOneCollections", null);
UpdateOneCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], UpdateOneCollectionsResolver);
exports.UpdateOneCollectionsResolver = UpdateOneCollectionsResolver;
