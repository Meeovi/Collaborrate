"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyTax_ruleArgs_1 = require("./args/UpdateManyTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTax_ruleResolver = class UpdateManyTax_ruleResolver {
    async updateManyTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTax_ruleArgs_1.UpdateManyTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTax_ruleResolver.prototype, "updateManyTax_rule", null);
UpdateManyTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], UpdateManyTax_ruleResolver);
exports.UpdateManyTax_ruleResolver = UpdateManyTax_ruleResolver;
