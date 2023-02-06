"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneProduct_typesArgs_1 = require("./args/DeleteOneProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let DeleteOneProduct_typesResolver = class DeleteOneProduct_typesResolver {
    async deleteOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProduct_typesArgs_1.DeleteOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneProduct_typesResolver.prototype, "deleteOneProduct_types", null);
DeleteOneProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], DeleteOneProduct_typesResolver);
exports.DeleteOneProduct_typesResolver = DeleteOneProduct_typesResolver;
