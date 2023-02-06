"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDiscountsArgs_1 = require("./args/AggregateDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const AggregateDiscounts_1 = require("../../outputs/AggregateDiscounts");
const helpers_1 = require("../../../helpers");
let AggregateDiscountsResolver = class AggregateDiscountsResolver {
    async aggregateDiscounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDiscounts_1.AggregateDiscounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDiscountsArgs_1.AggregateDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDiscountsResolver.prototype, "aggregateDiscounts", null);
AggregateDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], AggregateDiscountsResolver);
exports.AggregateDiscountsResolver = AggregateDiscountsResolver;
