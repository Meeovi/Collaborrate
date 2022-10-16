"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWebsitesArgs_1 = require("./args/AggregateWebsitesArgs");
const CreateManyWebsitesArgs_1 = require("./args/CreateManyWebsitesArgs");
const CreateOneWebsitesArgs_1 = require("./args/CreateOneWebsitesArgs");
const DeleteManyWebsitesArgs_1 = require("./args/DeleteManyWebsitesArgs");
const DeleteOneWebsitesArgs_1 = require("./args/DeleteOneWebsitesArgs");
const FindFirstWebsitesArgs_1 = require("./args/FindFirstWebsitesArgs");
const FindManyWebsitesArgs_1 = require("./args/FindManyWebsitesArgs");
const FindUniqueWebsitesArgs_1 = require("./args/FindUniqueWebsitesArgs");
const GroupByWebsitesArgs_1 = require("./args/GroupByWebsitesArgs");
const UpdateManyWebsitesArgs_1 = require("./args/UpdateManyWebsitesArgs");
const UpdateOneWebsitesArgs_1 = require("./args/UpdateOneWebsitesArgs");
const UpsertOneWebsitesArgs_1 = require("./args/UpsertOneWebsitesArgs");
const helpers_1 = require("../../../helpers");
const Websites_1 = require("../../../models/Websites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWebsites_1 = require("../../outputs/AggregateWebsites");
const WebsitesGroupBy_1 = require("../../outputs/WebsitesGroupBy");
let WebsitesCrudResolver = class WebsitesCrudResolver {
    async aggregateWebsites(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWebsites(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWebsites_1.AggregateWebsites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWebsitesArgs_1.AggregateWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "aggregateWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWebsitesArgs_1.CreateManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "createManyWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWebsitesArgs_1.CreateOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "createOneWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWebsitesArgs_1.DeleteManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "deleteManyWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWebsitesArgs_1.DeleteOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "deleteOneWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Websites_1.Websites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWebsitesArgs_1.FindFirstWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "findFirstWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Websites_1.Websites], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWebsitesArgs_1.FindManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "findManyWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Websites_1.Websites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWebsitesArgs_1.FindUniqueWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "findUniqueWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WebsitesGroupBy_1.WebsitesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWebsitesArgs_1.GroupByWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "groupByWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWebsitesArgs_1.UpdateManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "updateManyWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWebsitesArgs_1.UpdateOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "updateOneWebsites", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Websites_1.Websites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWebsitesArgs_1.UpsertOneWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebsitesCrudResolver.prototype, "upsertOneWebsites", null);
WebsitesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], WebsitesCrudResolver);
exports.WebsitesCrudResolver = WebsitesCrudResolver;
