"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneProduct_typesArgs_1 = require("./args/UpdateOneProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let UpdateOneProduct_typesResolver = class UpdateOneProduct_typesResolver {
    async updateOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProduct_typesArgs_1.UpdateOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProduct_typesResolver.prototype, "updateOneProduct_types", null);
UpdateOneProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], UpdateOneProduct_typesResolver);
exports.UpdateOneProduct_typesResolver = UpdateOneProduct_typesResolver;
