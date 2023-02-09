"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDiscountsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDiscountsOrThrowArgs_1 = require("./args/FindUniqueDiscountsOrThrowArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let FindUniqueDiscountsOrThrowResolver = class FindUniqueDiscountsOrThrowResolver {
    async findUniqueDiscountsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDiscountsOrThrowArgs_1.FindUniqueDiscountsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDiscountsOrThrowResolver.prototype, "findUniqueDiscountsOrThrow", null);
FindUniqueDiscountsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], FindUniqueDiscountsOrThrowResolver);
exports.FindUniqueDiscountsOrThrowResolver = FindUniqueDiscountsOrThrowResolver;
