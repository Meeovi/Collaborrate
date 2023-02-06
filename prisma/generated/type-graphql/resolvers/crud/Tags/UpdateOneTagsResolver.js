"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTagsArgs_1 = require("./args/UpdateOneTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let UpdateOneTagsResolver = class UpdateOneTagsResolver {
    async updateOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTagsArgs_1.UpdateOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTagsResolver.prototype, "updateOneTags", null);
UpdateOneTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], UpdateOneTagsResolver);
exports.UpdateOneTagsResolver = UpdateOneTagsResolver;
