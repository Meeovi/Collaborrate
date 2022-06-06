"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInvoicesArgs_1 = require("./args/AggregateInvoicesArgs");
const CreateInvoicesArgs_1 = require("./args/CreateInvoicesArgs");
const CreateManyInvoicesArgs_1 = require("./args/CreateManyInvoicesArgs");
const DeleteInvoicesArgs_1 = require("./args/DeleteInvoicesArgs");
const DeleteManyInvoicesArgs_1 = require("./args/DeleteManyInvoicesArgs");
const FindFirstInvoicesArgs_1 = require("./args/FindFirstInvoicesArgs");
const FindManyInvoicesArgs_1 = require("./args/FindManyInvoicesArgs");
const FindUniqueInvoicesArgs_1 = require("./args/FindUniqueInvoicesArgs");
const GroupByInvoicesArgs_1 = require("./args/GroupByInvoicesArgs");
const UpdateInvoicesArgs_1 = require("./args/UpdateInvoicesArgs");
const UpdateManyInvoicesArgs_1 = require("./args/UpdateManyInvoicesArgs");
const UpsertInvoicesArgs_1 = require("./args/UpsertInvoicesArgs");
const helpers_1 = require("../../../helpers");
const Invoices_1 = require("../../../models/Invoices");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInvoices_1 = require("../../outputs/AggregateInvoices");
const InvoicesGroupBy_1 = require("../../outputs/InvoicesGroupBy");
let InvoicesCrudResolver = class InvoicesCrudResolver {
    async findUniqueInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInvoices(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInvoices(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInvoicesArgs_1.FindUniqueInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "findUniqueInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInvoicesArgs_1.FindFirstInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "findFirstInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Invoices_1.Invoices], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInvoicesArgs_1.FindManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "findManyInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInvoicesArgs_1.CreateInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "createInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInvoicesArgs_1.CreateManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "createManyInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteInvoicesArgs_1.DeleteInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "deleteInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInvoicesArgs_1.UpdateInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "updateInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInvoicesArgs_1.DeleteManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "deleteManyInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInvoicesArgs_1.UpdateManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "updateManyInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertInvoicesArgs_1.UpsertInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "upsertInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInvoices_1.AggregateInvoices, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInvoicesArgs_1.AggregateInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "aggregateInvoices", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InvoicesGroupBy_1.InvoicesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInvoicesArgs_1.GroupByInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesCrudResolver.prototype, "groupByInvoices", null);
InvoicesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], InvoicesCrudResolver);
exports.InvoicesCrudResolver = InvoicesCrudResolver;
