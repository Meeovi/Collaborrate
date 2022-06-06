"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateQuotesArgs_1 = require("./args/AggregateQuotesArgs");
const CreateManyQuotesArgs_1 = require("./args/CreateManyQuotesArgs");
const CreateQuotesArgs_1 = require("./args/CreateQuotesArgs");
const DeleteManyQuotesArgs_1 = require("./args/DeleteManyQuotesArgs");
const DeleteQuotesArgs_1 = require("./args/DeleteQuotesArgs");
const FindFirstQuotesArgs_1 = require("./args/FindFirstQuotesArgs");
const FindManyQuotesArgs_1 = require("./args/FindManyQuotesArgs");
const FindUniqueQuotesArgs_1 = require("./args/FindUniqueQuotesArgs");
const GroupByQuotesArgs_1 = require("./args/GroupByQuotesArgs");
const UpdateManyQuotesArgs_1 = require("./args/UpdateManyQuotesArgs");
const UpdateQuotesArgs_1 = require("./args/UpdateQuotesArgs");
const UpsertQuotesArgs_1 = require("./args/UpsertQuotesArgs");
const helpers_1 = require("../../../helpers");
const Quotes_1 = require("../../../models/Quotes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuotes_1 = require("../../outputs/AggregateQuotes");
const QuotesGroupBy_1 = require("../../outputs/QuotesGroupBy");
let QuotesCrudResolver = class QuotesCrudResolver {
    async findUniqueQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateQuotes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByQuotes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQuotesArgs_1.FindUniqueQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "findUniqueQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQuotesArgs_1.FindFirstQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "findFirstQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Quotes_1.Quotes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyQuotesArgs_1.FindManyQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "findManyQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateQuotesArgs_1.CreateQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "createQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQuotesArgs_1.CreateManyQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "createManyQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteQuotesArgs_1.DeleteQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "deleteQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateQuotesArgs_1.UpdateQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "updateQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQuotesArgs_1.DeleteManyQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "deleteManyQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQuotesArgs_1.UpdateManyQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "updateManyQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertQuotesArgs_1.UpsertQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "upsertQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQuotes_1.AggregateQuotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQuotesArgs_1.AggregateQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "aggregateQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QuotesGroupBy_1.QuotesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQuotesArgs_1.GroupByQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "groupByQuotes", null);
QuotesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], QuotesCrudResolver);
exports.QuotesCrudResolver = QuotesCrudResolver;
