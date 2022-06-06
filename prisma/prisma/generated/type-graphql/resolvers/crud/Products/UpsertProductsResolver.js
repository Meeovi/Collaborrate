"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertProductsArgs_1 = require("./args/UpsertProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let UpsertProductsResolver = class UpsertProductsResolver {
    async upsertProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).products.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProductsArgs_1.UpsertProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertProductsResolver.prototype, "upsertProducts", null);
UpsertProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], UpsertProductsResolver);
exports.UpsertProductsResolver = UpsertProductsResolver;
