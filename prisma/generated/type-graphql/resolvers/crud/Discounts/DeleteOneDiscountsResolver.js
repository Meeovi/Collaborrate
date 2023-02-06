"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneDiscountsArgs_1 = require("./args/DeleteOneDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let DeleteOneDiscountsResolver = class DeleteOneDiscountsResolver {
    async deleteOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDiscountsArgs_1.DeleteOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneDiscountsResolver.prototype, "deleteOneDiscounts", null);
DeleteOneDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], DeleteOneDiscountsResolver);
exports.DeleteOneDiscountsResolver = DeleteOneDiscountsResolver;
