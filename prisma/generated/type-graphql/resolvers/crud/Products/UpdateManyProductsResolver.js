"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyProductsArgs_1 = require("./args/UpdateManyProductsArgs");
const Products_1 = require("../../../models/Products");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyProductsResolver = class UpdateManyProductsResolver {
    async updateManyProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProductsArgs_1.UpdateManyProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyProductsResolver.prototype, "updateManyProducts", null);
UpdateManyProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], UpdateManyProductsResolver);
exports.UpdateManyProductsResolver = UpdateManyProductsResolver;
