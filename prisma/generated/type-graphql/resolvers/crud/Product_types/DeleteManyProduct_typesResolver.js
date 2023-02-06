"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyProduct_typesArgs_1 = require("./args/DeleteManyProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProduct_typesResolver = class DeleteManyProduct_typesResolver {
    async deleteManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_typesArgs_1.DeleteManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProduct_typesResolver.prototype, "deleteManyProduct_types", null);
DeleteManyProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], DeleteManyProduct_typesResolver);
exports.DeleteManyProduct_typesResolver = DeleteManyProduct_typesResolver;
