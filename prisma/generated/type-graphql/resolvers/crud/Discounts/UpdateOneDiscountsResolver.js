"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneDiscountsArgs_1 = require("./args/UpdateOneDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let UpdateOneDiscountsResolver = class UpdateOneDiscountsResolver {
    async updateOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDiscountsArgs_1.UpdateOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDiscountsResolver.prototype, "updateOneDiscounts", null);
UpdateOneDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], UpdateOneDiscountsResolver);
exports.UpdateOneDiscountsResolver = UpdateOneDiscountsResolver;
