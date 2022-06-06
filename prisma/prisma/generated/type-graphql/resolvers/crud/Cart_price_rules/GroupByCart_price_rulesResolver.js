"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCart_price_rulesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCart_price_rulesArgs_1 = require("./args/GroupByCart_price_rulesArgs");
const Cart_price_rules_1 = require("../../../models/Cart_price_rules");
const Cart_price_rulesGroupBy_1 = require("../../outputs/Cart_price_rulesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCart_price_rulesResolver = class GroupByCart_price_rulesResolver {
    async groupByCart_price_rules(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cart_price_rules.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cart_price_rulesGroupBy_1.Cart_price_rulesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCart_price_rulesArgs_1.GroupByCart_price_rulesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCart_price_rulesResolver.prototype, "groupByCart_price_rules", null);
GroupByCart_price_rulesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cart_price_rules_1.Cart_price_rules)
], GroupByCart_price_rulesResolver);
exports.GroupByCart_price_rulesResolver = GroupByCart_price_rulesResolver;
