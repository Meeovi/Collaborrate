"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTax_ruleArgs_1 = require("./args/AggregateTax_ruleArgs");
const CreateManyTax_ruleArgs_1 = require("./args/CreateManyTax_ruleArgs");
const CreateTax_ruleArgs_1 = require("./args/CreateTax_ruleArgs");
const DeleteManyTax_ruleArgs_1 = require("./args/DeleteManyTax_ruleArgs");
const DeleteTax_ruleArgs_1 = require("./args/DeleteTax_ruleArgs");
const FindFirstTax_ruleArgs_1 = require("./args/FindFirstTax_ruleArgs");
const FindManyTax_ruleArgs_1 = require("./args/FindManyTax_ruleArgs");
const FindUniqueTax_ruleArgs_1 = require("./args/FindUniqueTax_ruleArgs");
const GroupByTax_ruleArgs_1 = require("./args/GroupByTax_ruleArgs");
const UpdateManyTax_ruleArgs_1 = require("./args/UpdateManyTax_ruleArgs");
const UpdateTax_ruleArgs_1 = require("./args/UpdateTax_ruleArgs");
const UpsertTax_ruleArgs_1 = require("./args/UpsertTax_ruleArgs");
const helpers_1 = require("../../../helpers");
const Tax_rule_1 = require("../../../models/Tax_rule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTax_rule_1 = require("../../outputs/AggregateTax_rule");
const Tax_ruleGroupBy_1 = require("../../outputs/Tax_ruleGroupBy");
let Tax_ruleCrudResolver = class Tax_ruleCrudResolver {
    async tax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tax_rules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTax_rule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTax_rule(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTax_rule(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rule.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], Tax_ruleCrudResolver.prototype, "tax_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_rule_1.Tax_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTax_ruleArgs_1.FindFirstTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "findFirstTax_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_rule_1.Tax_rule], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTax_ruleArgs_1.FindManyTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "tax_rules", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rule_1.Tax_rule, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTax_ruleArgs_1.CreateTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "createTax_rule", null);
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
], Tax_ruleCrudResolver.prototype, "createManyTax_rule", null);
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
], Tax_ruleCrudResolver.prototype, "deleteTax_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rule_1.Tax_rule, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTax_ruleArgs_1.UpdateTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "updateTax_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTax_ruleArgs_1.DeleteManyTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "deleteManyTax_rule", null);
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
], Tax_ruleCrudResolver.prototype, "updateManyTax_rule", null);
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
], Tax_ruleCrudResolver.prototype, "upsertTax_rule", null);
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
], Tax_ruleCrudResolver.prototype, "aggregateTax_rule", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_ruleGroupBy_1.Tax_ruleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTax_ruleArgs_1.GroupByTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_ruleCrudResolver.prototype, "groupByTax_rule", null);
Tax_ruleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rule_1.Tax_rule)
], Tax_ruleCrudResolver);
exports.Tax_ruleCrudResolver = Tax_ruleCrudResolver;
