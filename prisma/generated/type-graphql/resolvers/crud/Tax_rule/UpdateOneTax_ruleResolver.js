"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneTax_ruleArgs_1 = require("./args/UpdateOneTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let UpdateOneTax_ruleResolver = class UpdateOneTax_ruleResolver {
    async updateOneTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTax_ruleArgs_1.UpdateOneTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTax_ruleResolver.prototype, "updateOneTax_rule", null);
UpdateOneTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], UpdateOneTax_ruleResolver);
exports.UpdateOneTax_ruleResolver = UpdateOneTax_ruleResolver;
