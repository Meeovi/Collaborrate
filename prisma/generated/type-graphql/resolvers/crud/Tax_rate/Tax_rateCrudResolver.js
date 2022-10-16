"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTax_rateArgs_1 = require("./args/AggregateTax_rateArgs");
const CreateManyTax_rateArgs_1 = require("./args/CreateManyTax_rateArgs");
const CreateOneTax_rateArgs_1 = require("./args/CreateOneTax_rateArgs");
const DeleteManyTax_rateArgs_1 = require("./args/DeleteManyTax_rateArgs");
const DeleteOneTax_rateArgs_1 = require("./args/DeleteOneTax_rateArgs");
const FindFirstTax_rateArgs_1 = require("./args/FindFirstTax_rateArgs");
const FindManyTax_rateArgs_1 = require("./args/FindManyTax_rateArgs");
const FindUniqueTax_rateArgs_1 = require("./args/FindUniqueTax_rateArgs");
const GroupByTax_rateArgs_1 = require("./args/GroupByTax_rateArgs");
const UpdateManyTax_rateArgs_1 = require("./args/UpdateManyTax_rateArgs");
const UpdateOneTax_rateArgs_1 = require("./args/UpdateOneTax_rateArgs");
const UpsertOneTax_rateArgs_1 = require("./args/UpsertOneTax_rateArgs");
const helpers_1 = require("../../../helpers");
const Tax_rate_1 = require("../../../models/Tax_rate");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTax_rate_1 = require("../../outputs/AggregateTax_rate");
const Tax_rateGroupBy_1 = require("../../outputs/Tax_rateGroupBy");
let Tax_rateCrudResolver = class Tax_rateCrudResolver {
    async aggregateTax_rate(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tax_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTax_rate(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTax_rate_1.AggregateTax_rate, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTax_rateArgs_1.AggregateTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "aggregateTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTax_rateArgs_1.CreateManyTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "createManyTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTax_rateArgs_1.CreateOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "createOneTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTax_rateArgs_1.DeleteManyTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "deleteManyTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTax_rateArgs_1.DeleteOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "deleteOneTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_rate_1.Tax_rate, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTax_rateArgs_1.FindFirstTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "findFirstTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_rate_1.Tax_rate], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTax_rateArgs_1.FindManyTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "tax_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_rate_1.Tax_rate, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTax_rateArgs_1.FindUniqueTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "tax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_rateGroupBy_1.Tax_rateGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTax_rateArgs_1.GroupByTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "groupByTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTax_rateArgs_1.UpdateManyTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "updateManyTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTax_rateArgs_1.UpdateOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "updateOneTax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTax_rateArgs_1.UpsertOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_rateCrudResolver.prototype, "upsertOneTax_rate", null);
Tax_rateCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], Tax_rateCrudResolver);
exports.Tax_rateCrudResolver = Tax_rateCrudResolver;
