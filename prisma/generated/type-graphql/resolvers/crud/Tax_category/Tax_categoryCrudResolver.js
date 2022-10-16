"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTax_categoryArgs_1 = require("./args/AggregateTax_categoryArgs");
const CreateManyTax_categoryArgs_1 = require("./args/CreateManyTax_categoryArgs");
const CreateOneTax_categoryArgs_1 = require("./args/CreateOneTax_categoryArgs");
const DeleteManyTax_categoryArgs_1 = require("./args/DeleteManyTax_categoryArgs");
const DeleteOneTax_categoryArgs_1 = require("./args/DeleteOneTax_categoryArgs");
const FindFirstTax_categoryArgs_1 = require("./args/FindFirstTax_categoryArgs");
const FindManyTax_categoryArgs_1 = require("./args/FindManyTax_categoryArgs");
const FindUniqueTax_categoryArgs_1 = require("./args/FindUniqueTax_categoryArgs");
const GroupByTax_categoryArgs_1 = require("./args/GroupByTax_categoryArgs");
const UpdateManyTax_categoryArgs_1 = require("./args/UpdateManyTax_categoryArgs");
const UpdateOneTax_categoryArgs_1 = require("./args/UpdateOneTax_categoryArgs");
const UpsertOneTax_categoryArgs_1 = require("./args/UpsertOneTax_categoryArgs");
const helpers_1 = require("../../../helpers");
const Tax_category_1 = require("../../../models/Tax_category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTax_category_1 = require("../../outputs/AggregateTax_category");
const Tax_categoryGroupBy_1 = require("../../outputs/Tax_categoryGroupBy");
let Tax_categoryCrudResolver = class Tax_categoryCrudResolver {
    async aggregateTax_category(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tax_categories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTax_category(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTax_category_1.AggregateTax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTax_categoryArgs_1.AggregateTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "aggregateTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTax_categoryArgs_1.CreateManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "createManyTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTax_categoryArgs_1.CreateOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "createOneTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTax_categoryArgs_1.DeleteManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "deleteManyTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTax_categoryArgs_1.DeleteOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "deleteOneTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTax_categoryArgs_1.FindFirstTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "findFirstTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_category_1.Tax_category], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTax_categoryArgs_1.FindManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "tax_categories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTax_categoryArgs_1.FindUniqueTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "tax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_categoryGroupBy_1.Tax_categoryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTax_categoryArgs_1.GroupByTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "groupByTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTax_categoryArgs_1.UpdateManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "updateManyTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTax_categoryArgs_1.UpdateOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "updateOneTax_category", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTax_categoryArgs_1.UpsertOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Tax_categoryCrudResolver.prototype, "upsertOneTax_category", null);
Tax_categoryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], Tax_categoryCrudResolver);
exports.Tax_categoryCrudResolver = Tax_categoryCrudResolver;
