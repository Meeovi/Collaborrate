"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTax_ruleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyTax_ruleArgs_1 = require("./args/CreateManyTax_ruleArgs");
const Tax_rule_1 = require("../../../models/Tax_rule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTax_ruleResolver = class CreateManyTax_ruleResolver {
    async createManyTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTax_ruleArgs_1.CreateManyTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTax_ruleResolver.prototype, "createManyTax_rule", null);
CreateManyTax_ruleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], CreateManyTax_ruleResolver);
exports.CreateManyTax_ruleResolver = CreateManyTax_ruleResolver;
