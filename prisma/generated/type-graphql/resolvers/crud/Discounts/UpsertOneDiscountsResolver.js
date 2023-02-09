"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneDiscountsArgs_1 = require("./args/UpsertOneDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const helpers_1 = require("../../../helpers");
let UpsertOneDiscountsResolver = class UpsertOneDiscountsResolver {
    async upsertOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDiscountsArgs_1.UpsertOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDiscountsResolver.prototype, "upsertOneDiscounts", null);
UpsertOneDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], UpsertOneDiscountsResolver);
exports.UpsertOneDiscountsResolver = UpsertOneDiscountsResolver;
