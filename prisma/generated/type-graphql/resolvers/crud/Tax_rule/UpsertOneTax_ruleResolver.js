"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTax_ruleArgs_1 = require("./args/UpsertOneTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const helpers_1 = require("../../../helpers");
let UpsertOneTax_ruleResolver = class UpsertOneTax_ruleResolver {
    async upsertOneTax_rule(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTax_ruleArgs_1.UpsertOneTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTax_ruleResolver.prototype, "upsertOneTax_rule", null);
UpsertOneTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], UpsertOneTax_ruleResolver);
exports.UpsertOneTax_ruleResolver = UpsertOneTax_ruleResolver;
