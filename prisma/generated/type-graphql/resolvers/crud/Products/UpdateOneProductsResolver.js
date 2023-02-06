"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneProductsArgs_1 = require("./args/UpdateOneProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let UpdateOneProductsResolver = class UpdateOneProductsResolver {
    async updateOneProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProductsArgs_1.UpdateOneProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProductsResolver.prototype, "updateOneProducts", null);
UpdateOneProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], UpdateOneProductsResolver);
exports.UpdateOneProductsResolver = UpdateOneProductsResolver;
