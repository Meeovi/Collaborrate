"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_typesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProduct_typesOrThrowArgs_1 = require("./args/FindFirstProduct_typesOrThrowArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let FindFirstProduct_typesOrThrowResolver = class FindFirstProduct_typesOrThrowResolver {
    async findFirstProduct_typesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_typesOrThrowArgs_1.FindFirstProduct_typesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProduct_typesOrThrowResolver.prototype, "findFirstProduct_typesOrThrow", null);
FindFirstProduct_typesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], FindFirstProduct_typesOrThrowResolver);
exports.FindFirstProduct_typesOrThrowResolver = FindFirstProduct_typesOrThrowResolver;
