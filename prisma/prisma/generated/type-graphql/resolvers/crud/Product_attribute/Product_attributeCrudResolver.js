"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProduct_attributeArgs_1 = require("./args/AggregateProduct_attributeArgs");
const CreateManyProduct_attributeArgs_1 = require("./args/CreateManyProduct_attributeArgs");
const CreateProduct_attributeArgs_1 = require("./args/CreateProduct_attributeArgs");
const DeleteManyProduct_attributeArgs_1 = require("./args/DeleteManyProduct_attributeArgs");
const DeleteProduct_attributeArgs_1 = require("./args/DeleteProduct_attributeArgs");
const FindFirstProduct_attributeArgs_1 = require("./args/FindFirstProduct_attributeArgs");
const FindManyProduct_attributeArgs_1 = require("./args/FindManyProduct_attributeArgs");
const FindUniqueProduct_attributeArgs_1 = require("./args/FindUniqueProduct_attributeArgs");
const GroupByProduct_attributeArgs_1 = require("./args/GroupByProduct_attributeArgs");
const UpdateManyProduct_attributeArgs_1 = require("./args/UpdateManyProduct_attributeArgs");
const UpdateProduct_attributeArgs_1 = require("./args/UpdateProduct_attributeArgs");
const UpsertProduct_attributeArgs_1 = require("./args/UpsertProduct_attributeArgs");
const helpers_1 = require("../../../helpers");
const Product_attribute_1 = require("../../../models/Product_attribute");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_attribute_1 = require("../../outputs/AggregateProduct_attribute");
const Product_attributeGroupBy_1 = require("../../outputs/Product_attributeGroupBy");
let Product_attributeCrudResolver = class Product_attributeCrudResolver {
    async product_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product_attributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProduct_attribute(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProduct_attribute(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProduct_attributeArgs_1.FindUniqueProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "product_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_attributeArgs_1.FindFirstProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "findFirstProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_1.Product_attribute], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_attributeArgs_1.FindManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "product_attributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProduct_attributeArgs_1.CreateProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "createProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProduct_attributeArgs_1.CreateManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "createManyProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProduct_attributeArgs_1.DeleteProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "deleteProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProduct_attributeArgs_1.UpdateProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "updateProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_attributeArgs_1.DeleteManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "deleteManyProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProduct_attributeArgs_1.UpdateManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "updateManyProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProduct_attributeArgs_1.UpsertProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "upsertProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_attribute_1.AggregateProduct_attribute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_attributeArgs_1.AggregateProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "aggregateProduct_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attributeGroupBy_1.Product_attributeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_attributeArgs_1.GroupByProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_attributeCrudResolver.prototype, "groupByProduct_attribute", null);
Product_attributeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], Product_attributeCrudResolver);
exports.Product_attributeCrudResolver = Product_attributeCrudResolver;
