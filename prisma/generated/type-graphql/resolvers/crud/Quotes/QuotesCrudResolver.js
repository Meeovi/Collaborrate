"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQuotesArgs_1 = require("./args/AggregateQuotesArgs");
const CreateManyQuotesArgs_1 = require("./args/CreateManyQuotesArgs");
const CreateOneQuotesArgs_1 = require("./args/CreateOneQuotesArgs");
const DeleteManyQuotesArgs_1 = require("./args/DeleteManyQuotesArgs");
const DeleteOneQuotesArgs_1 = require("./args/DeleteOneQuotesArgs");
const FindFirstQuotesArgs_1 = require("./args/FindFirstQuotesArgs");
const FindFirstQuotesOrThrowArgs_1 = require("./args/FindFirstQuotesOrThrowArgs");
const FindManyQuotesArgs_1 = require("./args/FindManyQuotesArgs");
const FindUniqueQuotesArgs_1 = require("./args/FindUniqueQuotesArgs");
const FindUniqueQuotesOrThrowArgs_1 = require("./args/FindUniqueQuotesOrThrowArgs");
const GroupByQuotesArgs_1 = require("./args/GroupByQuotesArgs");
const UpdateManyQuotesArgs_1 = require("./args/UpdateManyQuotesArgs");
const UpdateOneQuotesArgs_1 = require("./args/UpdateOneQuotesArgs");
const UpsertOneQuotesArgs_1 = require("./args/UpsertOneQuotesArgs");
const helpers_1 = require("../../../helpers");
const Quotes_1 = require("../../../models/Quotes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuotes_1 = require("../../outputs/AggregateQuotes");
const QuotesGroupBy_1 = require("../../outputs/QuotesGroupBy");
let QuotesCrudResolver = class QuotesCrudResolver {
    async aggregateQuotes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQuotesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueQuotesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByQuotes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneQuotesArgs_1.CreateOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "createOneQuotes", null);
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
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneQuotesArgs_1.DeleteOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "deleteOneQuotes", null);
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
    TypeGraphQL.Query(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQuotesOrThrowArgs_1.FindFirstQuotesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "findFirstQuotesOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQuotesOrThrowArgs_1.FindUniqueQuotesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "findUniqueQuotesOrThrow", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQuotesArgs_1.UpdateOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "updateOneQuotes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQuotesArgs_1.UpsertOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesCrudResolver.prototype, "upsertOneQuotes", null);
QuotesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], QuotesCrudResolver);
exports.QuotesCrudResolver = QuotesCrudResolver;
