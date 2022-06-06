"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCatalog_price_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCatalog_price_ruleArgs_1 = require("./args/GroupByCatalog_price_ruleArgs");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const Catalog_price_ruleGroupBy_1 = require("../../outputs/Catalog_price_ruleGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCatalog_price_ruleResolver = class GroupByCatalog_price_ruleResolver {
    async groupByCatalog_price_rule(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Catalog_price_ruleGroupBy_1.Catalog_price_ruleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCatalog_price_ruleArgs_1.GroupByCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCatalog_price_ruleResolver.prototype, "groupByCatalog_price_rule", null);
GroupByCatalog_price_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], GroupByCatalog_price_ruleResolver);
exports.GroupByCatalog_price_ruleResolver = GroupByCatalog_price_ruleResolver;
