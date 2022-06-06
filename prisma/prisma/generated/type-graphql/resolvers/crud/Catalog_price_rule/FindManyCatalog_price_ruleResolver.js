"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCatalog_price_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCatalog_price_ruleArgs_1 = require("./args/FindManyCatalog_price_ruleArgs");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const helpers_1 = require("../../../helpers");
let FindManyCatalog_price_ruleResolver = class FindManyCatalog_price_ruleResolver {
    async catalog_price_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Catalog_price_rule_1.Catalog_price_rule], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCatalog_price_ruleArgs_1.FindManyCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCatalog_price_ruleResolver.prototype, "catalog_price_rules", null);
FindManyCatalog_price_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], FindManyCatalog_price_ruleResolver);
exports.FindManyCatalog_price_ruleResolver = FindManyCatalog_price_ruleResolver;
