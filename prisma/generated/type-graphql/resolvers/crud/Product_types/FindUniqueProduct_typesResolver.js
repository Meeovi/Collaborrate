"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProduct_typesArgs_1 = require("./args/FindUniqueProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let FindUniqueProduct_typesResolver = class FindUniqueProduct_typesResolver {
    async findUniqueProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProduct_typesArgs_1.FindUniqueProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProduct_typesResolver.prototype, "findUniqueProduct_types", null);
FindUniqueProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], FindUniqueProduct_typesResolver);
exports.FindUniqueProduct_typesResolver = FindUniqueProduct_typesResolver;
