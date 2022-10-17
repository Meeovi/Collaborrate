"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCatalog_price_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCatalog_price_ruleArgs_1 = require("./args/AggregateCatalog_price_ruleArgs");
const Catalog_price_rule_1 = require("../../../models/Catalog_price_rule");
const AggregateCatalog_price_rule_1 = require("../../outputs/AggregateCatalog_price_rule");
const helpers_1 = require("../../../helpers");
let AggregateCatalog_price_ruleResolver = class AggregateCatalog_price_ruleResolver {
    async aggregateCatalog_price_rule(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).catalog_price_rule.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCatalog_price_rule_1.AggregateCatalog_price_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCatalog_price_ruleArgs_1.AggregateCatalog_price_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCatalog_price_ruleResolver.prototype, "aggregateCatalog_price_rule", null);
AggregateCatalog_price_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Catalog_price_rule_1.Catalog_price_rule)
], AggregateCatalog_price_ruleResolver);
exports.AggregateCatalog_price_ruleResolver = AggregateCatalog_price_ruleResolver;
