"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Products_1 = require("../../../models/Products");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let Tax_ruleRelationsResolver = class Tax_ruleRelationsResolver {
    async products(tax_rule, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.findUnique({
            where: {
                id: tax_rule.id,
            },
        }).products({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tax_rule_1.Tax_rule, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleRelationsResolver.prototype, "products", null);
Tax_ruleRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], Tax_ruleRelationsResolver);
exports.Tax_ruleRelationsResolver = Tax_ruleRelationsResolver;
