"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneContent_typeArgs_1 = require("./args/DeleteOneContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let DeleteOneContent_typeResolver = class DeleteOneContent_typeResolver {
    async deleteOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneContent_typeArgs_1.DeleteOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneContent_typeResolver.prototype, "deleteOneContent_type", null);
DeleteOneContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], DeleteOneContent_typeResolver);
exports.DeleteOneContent_typeResolver = DeleteOneContent_typeResolver;
