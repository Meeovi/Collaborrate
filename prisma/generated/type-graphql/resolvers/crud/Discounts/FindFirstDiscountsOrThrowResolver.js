"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDiscountsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDiscountsOrThrowArgs_1 = require("./args/FindFirstDiscountsOrThrowArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let FindFirstDiscountsOrThrowResolver = class FindFirstDiscountsOrThrowResolver {
    async findFirstDiscountsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDiscountsOrThrowArgs_1.FindFirstDiscountsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDiscountsOrThrowResolver.prototype, "findFirstDiscountsOrThrow", null);
FindFirstDiscountsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], FindFirstDiscountsOrThrowResolver);
exports.FindFirstDiscountsOrThrowResolver = FindFirstDiscountsOrThrowResolver;
