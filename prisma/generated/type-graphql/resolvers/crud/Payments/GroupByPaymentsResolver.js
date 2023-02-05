"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPaymentsArgs_1 = require("./args/GroupByPaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const PaymentsGroupBy_1 = require("../../outputs/PaymentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPaymentsResolver = class GroupByPaymentsResolver {
    async groupByPayments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PaymentsGroupBy_1.PaymentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPaymentsArgs_1.GroupByPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPaymentsResolver.prototype, "groupByPayments", null);
GroupByPaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], GroupByPaymentsResolver);
exports.GroupByPaymentsResolver = GroupByPaymentsResolver;
