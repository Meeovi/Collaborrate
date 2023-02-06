"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyDiscountsArgs_1 = require("./args/FindManyDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let FindManyDiscountsResolver = class FindManyDiscountsResolver {
    async findManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Discounts_1.Discounts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDiscountsArgs_1.FindManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyDiscountsResolver.prototype, "findManyDiscounts", null);
FindManyDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], FindManyDiscountsResolver);
exports.FindManyDiscountsResolver = FindManyDiscountsResolver;
