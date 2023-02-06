"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDiscountsArgs_1 = require("./args/DeleteManyDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDiscountsResolver = class DeleteManyDiscountsResolver {
    async deleteManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDiscountsArgs_1.DeleteManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDiscountsResolver.prototype, "deleteManyDiscounts", null);
DeleteManyDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], DeleteManyDiscountsResolver);
exports.DeleteManyDiscountsResolver = DeleteManyDiscountsResolver;
