"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneProduct_typesArgs_1 = require("./args/UpsertOneProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let UpsertOneProduct_typesResolver = class UpsertOneProduct_typesResolver {
    async upsertOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProduct_typesArgs_1.UpsertOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProduct_typesResolver.prototype, "upsertOneProduct_types", null);
UpsertOneProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], UpsertOneProduct_typesResolver);
exports.UpsertOneProduct_typesResolver = UpsertOneProduct_typesResolver;
