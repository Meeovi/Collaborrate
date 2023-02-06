"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDiscountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByDiscountsArgs_1 = require("./args/GroupByDiscountsArgs");
const Discounts_1 = require("../../../models/Discounts");
const DiscountsGroupBy_1 = require("../../outputs/DiscountsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDiscountsResolver = class GroupByDiscountsResolver {
    async groupByDiscounts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DiscountsGroupBy_1.DiscountsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDiscountsArgs_1.GroupByDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDiscountsResolver.prototype, "groupByDiscounts", null);
GroupByDiscountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], GroupByDiscountsResolver);
exports.GroupByDiscountsResolver = GroupByDiscountsResolver;
