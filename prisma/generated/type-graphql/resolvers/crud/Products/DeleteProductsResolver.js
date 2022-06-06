"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteProductsArgs_1 = require("./args/DeleteProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let DeleteProductsResolver = class DeleteProductsResolver {
    async deleteProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProductsArgs_1.DeleteProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteProductsResolver.prototype, "deleteProducts", null);
DeleteProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], DeleteProductsResolver);
exports.DeleteProductsResolver = DeleteProductsResolver;
