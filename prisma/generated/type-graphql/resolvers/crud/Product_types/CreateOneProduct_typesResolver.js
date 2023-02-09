"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneProduct_typesArgs_1 = require("./args/CreateOneProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const helpers_1 = require("../../../helpers");
let CreateOneProduct_typesResolver = class CreateOneProduct_typesResolver {
    async createOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProduct_typesArgs_1.CreateOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProduct_typesResolver.prototype, "createOneProduct_types", null);
CreateOneProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], CreateOneProduct_typesResolver);
exports.CreateOneProduct_typesResolver = CreateOneProduct_typesResolver;
