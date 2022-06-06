"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCustomerArgs_1 = require("./args/GroupByCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const CustomerGroupBy_1 = require("../../outputs/CustomerGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCustomerResolver = class GroupByCustomerResolver {
    async groupByCustomer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomerGroupBy_1.CustomerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomerArgs_1.GroupByCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCustomerResolver.prototype, "groupByCustomer", null);
GroupByCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], GroupByCustomerResolver);
exports.GroupByCustomerResolver = GroupByCustomerResolver;
