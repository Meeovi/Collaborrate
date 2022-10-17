"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTax_ruleArgs_1 = require("./args/AggregateTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const AggregateTax_rule_1 = require("../../outputs/AggregateTax_rule");
const helpers_1 = require("../../../helpers");
let AggregateTax_ruleResolver = class AggregateTax_ruleResolver {
    async aggregateTax_rule(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTax_rule_1.AggregateTax_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTax_ruleArgs_1.AggregateTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTax_ruleResolver.prototype, "aggregateTax_rule", null);
AggregateTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], AggregateTax_ruleResolver);
exports.AggregateTax_ruleResolver = AggregateTax_ruleResolver;
