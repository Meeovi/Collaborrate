"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCustomer_groupArgs_1 = require("./args/GroupByCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const Customer_groupGroupBy_1 = require("../../outputs/Customer_groupGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCustomer_groupResolver = class GroupByCustomer_groupResolver {
    async groupByCustomer_group(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_groupGroupBy_1.Customer_groupGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomer_groupArgs_1.GroupByCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCustomer_groupResolver.prototype, "groupByCustomer_group", null);
GroupByCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], GroupByCustomer_groupResolver);
exports.GroupByCustomer_groupResolver = GroupByCustomer_groupResolver;
