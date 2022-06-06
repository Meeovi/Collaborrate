"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProductsArgs_1 = require("./args/UpdateProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let UpdateProductsResolver = class UpdateProductsResolver {
    async updateProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProductsArgs_1.UpdateProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProductsResolver.prototype, "updateProducts", null);
UpdateProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], UpdateProductsResolver);
exports.UpdateProductsResolver = UpdateProductsResolver;
