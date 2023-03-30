"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneContent_typeArgs_1 = require("./args/UpdateOneContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let UpdateOneContent_typeResolver = class UpdateOneContent_typeResolver {
    async updateOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneContent_typeArgs_1.UpdateOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneContent_typeResolver.prototype, "updateOneContent_type", null);
UpdateOneContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], UpdateOneContent_typeResolver);
exports.UpdateOneContent_typeResolver = UpdateOneContent_typeResolver;
