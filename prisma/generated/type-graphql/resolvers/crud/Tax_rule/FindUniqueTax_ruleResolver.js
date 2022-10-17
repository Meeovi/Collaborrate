"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTax_ruleArgs_1 = require("./args/FindUniqueTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let FindUniqueTax_ruleResolver = class FindUniqueTax_ruleResolver {
    async tax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_rule_1.Tax_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTax_ruleArgs_1.FindUniqueTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTax_ruleResolver.prototype, "tax_rule", null);
FindUniqueTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], FindUniqueTax_ruleResolver);
exports.FindUniqueTax_ruleResolver = FindUniqueTax_ruleResolver;
