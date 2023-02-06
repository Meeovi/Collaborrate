"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAttributesArgs_1 = require("./args/DeleteOneAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const helpers_1 = require("../../../helpers");
let DeleteOneAttributesResolver = class DeleteOneAttributesResolver {
    async deleteOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAttributesArgs_1.DeleteOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAttributesResolver.prototype, "deleteOneAttributes", null);
DeleteOneAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], DeleteOneAttributesResolver);
exports.DeleteOneAttributesResolver = DeleteOneAttributesResolver;
