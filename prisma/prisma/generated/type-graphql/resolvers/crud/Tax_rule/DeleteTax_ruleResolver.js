"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTax_ruleArgs_1 = require("./args/DeleteTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let DeleteTax_ruleResolver = class DeleteTax_ruleResolver {
    async deleteTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rule_1.Tax_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTax_ruleArgs_1.DeleteTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTax_ruleResolver.prototype, "deleteTax_rule", null);
DeleteTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], DeleteTax_ruleResolver);
exports.DeleteTax_ruleResolver = DeleteTax_ruleResolver;
