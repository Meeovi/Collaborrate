"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePagesArgs_1 = require("./args/AggregatePagesArgs");
const CreateManyPagesArgs_1 = require("./args/CreateManyPagesArgs");
const CreatePagesArgs_1 = require("./args/CreatePagesArgs");
const DeleteManyPagesArgs_1 = require("./args/DeleteManyPagesArgs");
const DeletePagesArgs_1 = require("./args/DeletePagesArgs");
const FindFirstPagesArgs_1 = require("./args/FindFirstPagesArgs");
const FindManyPagesArgs_1 = require("./args/FindManyPagesArgs");
const FindUniquePagesArgs_1 = require("./args/FindUniquePagesArgs");
const GroupByPagesArgs_1 = require("./args/GroupByPagesArgs");
const UpdateManyPagesArgs_1 = require("./args/UpdateManyPagesArgs");
const UpdatePagesArgs_1 = require("./args/UpdatePagesArgs");
const UpsertPagesArgs_1 = require("./args/UpsertPagesArgs");
const helpers_1 = require("../../../helpers");
const Pages_1 = require("../../../models/Pages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePages_1 = require("../../outputs/AggregatePages");
const PagesGroupBy_1 = require("../../outputs/PagesGroupBy");
let PagesCrudResolver = class PagesCrudResolver {
    async findUniquePages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePagesArgs_1.FindUniquePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "findUniquePages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPagesArgs_1.FindFirstPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "findFirstPages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pages_1.Pages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPagesArgs_1.FindManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "findManyPages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePagesArgs_1.CreatePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "createPages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPagesArgs_1.CreateManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "createManyPages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePagesArgs_1.DeletePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "deletePages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePagesArgs_1.UpdatePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "updatePages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPagesArgs_1.DeleteManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "deleteManyPages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPagesArgs_1.UpdateManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "updateManyPages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPagesArgs_1.UpsertPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "upsertPages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePages_1.AggregatePages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePagesArgs_1.AggregatePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "aggregatePages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PagesGroupBy_1.PagesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPagesArgs_1.GroupByPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesCrudResolver.prototype, "groupByPages", null);
PagesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], PagesCrudResolver);
exports.PagesCrudResolver = PagesCrudResolver;
