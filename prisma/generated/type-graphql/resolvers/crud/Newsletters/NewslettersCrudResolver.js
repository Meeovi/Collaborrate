"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNewslettersArgs_1 = require("./args/AggregateNewslettersArgs");
const CreateManyNewslettersArgs_1 = require("./args/CreateManyNewslettersArgs");
const CreateOneNewslettersArgs_1 = require("./args/CreateOneNewslettersArgs");
const DeleteManyNewslettersArgs_1 = require("./args/DeleteManyNewslettersArgs");
const DeleteOneNewslettersArgs_1 = require("./args/DeleteOneNewslettersArgs");
const FindFirstNewslettersArgs_1 = require("./args/FindFirstNewslettersArgs");
const FindFirstNewslettersOrThrowArgs_1 = require("./args/FindFirstNewslettersOrThrowArgs");
const FindManyNewslettersArgs_1 = require("./args/FindManyNewslettersArgs");
const FindUniqueNewslettersArgs_1 = require("./args/FindUniqueNewslettersArgs");
const FindUniqueNewslettersOrThrowArgs_1 = require("./args/FindUniqueNewslettersOrThrowArgs");
const GroupByNewslettersArgs_1 = require("./args/GroupByNewslettersArgs");
const UpdateManyNewslettersArgs_1 = require("./args/UpdateManyNewslettersArgs");
const UpdateOneNewslettersArgs_1 = require("./args/UpdateOneNewslettersArgs");
const UpsertOneNewslettersArgs_1 = require("./args/UpsertOneNewslettersArgs");
const helpers_1 = require("../../../helpers");
const Newsletters_1 = require("../../../models/Newsletters");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateNewsletters_1 = require("../../outputs/AggregateNewsletters");
const NewslettersGroupBy_1 = require("../../outputs/NewslettersGroupBy");
let NewslettersCrudResolver = class NewslettersCrudResolver {
    async aggregateNewsletters(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNewslettersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueNewslettersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByNewsletters(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneNewsletters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNewsletters_1.AggregateNewsletters, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNewslettersArgs_1.AggregateNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "aggregateNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNewslettersArgs_1.CreateManyNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "createManyNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletters_1.Newsletters, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneNewslettersArgs_1.CreateOneNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "createOneNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNewslettersArgs_1.DeleteManyNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "deleteManyNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneNewslettersArgs_1.DeleteOneNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "deleteOneNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNewslettersArgs_1.FindFirstNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "findFirstNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNewslettersOrThrowArgs_1.FindFirstNewslettersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "findFirstNewslettersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Newsletters_1.Newsletters], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyNewslettersArgs_1.FindManyNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "findManyNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNewslettersArgs_1.FindUniqueNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "findUniqueNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNewslettersOrThrowArgs_1.FindUniqueNewslettersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "findUniqueNewslettersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NewslettersGroupBy_1.NewslettersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNewslettersArgs_1.GroupByNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "groupByNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNewslettersArgs_1.UpdateManyNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "updateManyNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletters_1.Newsletters, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneNewslettersArgs_1.UpdateOneNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "updateOneNewsletters", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletters_1.Newsletters, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneNewslettersArgs_1.UpsertOneNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], NewslettersCrudResolver.prototype, "upsertOneNewsletters", null);
NewslettersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletters_1.Newsletters)
], NewslettersCrudResolver);
exports.NewslettersCrudResolver = NewslettersCrudResolver;
