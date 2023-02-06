"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyProduct_typesArgs_1 = require("./args/FindManyProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let FindManyProduct_typesResolver = class FindManyProduct_typesResolver {
    async findManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_types_1.Product_types], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_typesArgs_1.FindManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProduct_typesResolver.prototype, "findManyProduct_types", null);
FindManyProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], FindManyProduct_typesResolver);
exports.FindManyProduct_typesResolver = FindManyProduct_typesResolver;
