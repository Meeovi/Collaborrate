"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTagsArgs_1 = require("./args/DeleteOneTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let DeleteOneTagsResolver = class DeleteOneTagsResolver {
    async deleteOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTagsArgs_1.DeleteOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTagsResolver.prototype, "deleteOneTags", null);
DeleteOneTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], DeleteOneTagsResolver);
exports.DeleteOneTagsResolver = DeleteOneTagsResolver;
