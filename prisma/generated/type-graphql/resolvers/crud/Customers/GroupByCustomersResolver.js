"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCustomersArgs_1 = require("./args/GroupByCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const CustomersGroupBy_1 = require("../../outputs/CustomersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCustomersResolver = class GroupByCustomersResolver {
    async groupByCustomers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomersGroupBy_1.CustomersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomersArgs_1.GroupByCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCustomersResolver.prototype, "groupByCustomers", null);
GroupByCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], GroupByCustomersResolver);
exports.GroupByCustomersResolver = GroupByCustomersResolver;
