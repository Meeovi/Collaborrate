"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateApitokenArgs_1 = require("./args/AggregateApitokenArgs");
const CreateApitokenArgs_1 = require("./args/CreateApitokenArgs");
const CreateManyApitokenArgs_1 = require("./args/CreateManyApitokenArgs");
const DeleteApitokenArgs_1 = require("./args/DeleteApitokenArgs");
const DeleteManyApitokenArgs_1 = require("./args/DeleteManyApitokenArgs");
const FindFirstApitokenArgs_1 = require("./args/FindFirstApitokenArgs");
const FindManyApitokenArgs_1 = require("./args/FindManyApitokenArgs");
const FindUniqueApitokenArgs_1 = require("./args/FindUniqueApitokenArgs");
const GroupByApitokenArgs_1 = require("./args/GroupByApitokenArgs");
const UpdateApitokenArgs_1 = require("./args/UpdateApitokenArgs");
const UpdateManyApitokenArgs_1 = require("./args/UpdateManyApitokenArgs");
const UpsertApitokenArgs_1 = require("./args/UpsertApitokenArgs");
const helpers_1 = require("../../../helpers");
const Apitoken_1 = require("../../../models/Apitoken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateApitoken_1 = require("../../outputs/AggregateApitoken");
const ApitokenGroupBy_1 = require("../../outputs/ApitokenGroupBy");
let ApitokenCrudResolver = class ApitokenCrudResolver {
    async apitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async apitokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateApitoken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByApitoken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueApitokenArgs_1.FindUniqueApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "apitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstApitokenArgs_1.FindFirstApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "findFirstApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Apitoken_1.Apitoken], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyApitokenArgs_1.FindManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "apitokens", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateApitokenArgs_1.CreateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "createApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyApitokenArgs_1.CreateManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "createManyApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteApitokenArgs_1.DeleteApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "deleteApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateApitokenArgs_1.UpdateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "updateApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyApitokenArgs_1.DeleteManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "deleteManyApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyApitokenArgs_1.UpdateManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "updateManyApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertApitokenArgs_1.UpsertApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "upsertApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateApitoken_1.AggregateApitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateApitokenArgs_1.AggregateApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "aggregateApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ApitokenGroupBy_1.ApitokenGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByApitokenArgs_1.GroupByApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "groupByApitoken", null);
ApitokenCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], ApitokenCrudResolver);
exports.ApitokenCrudResolver = ApitokenCrudResolver;
