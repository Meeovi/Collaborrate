"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertTax_ruleArgs_1 = require("./args/UpsertTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let UpsertTax_ruleResolver = class UpsertTax_ruleResolver {
    async upsertTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rule_1.Tax_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTax_ruleArgs_1.UpsertTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertTax_ruleResolver.prototype, "upsertTax_rule", null);
UpsertTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], UpsertTax_ruleResolver);
exports.UpsertTax_ruleResolver = UpsertTax_ruleResolver;
