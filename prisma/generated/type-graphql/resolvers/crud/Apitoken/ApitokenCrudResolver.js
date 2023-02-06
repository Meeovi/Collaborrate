"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateApitokenArgs_1 = require("./args/AggregateApitokenArgs");
const CreateManyApitokenArgs_1 = require("./args/CreateManyApitokenArgs");
const CreateOneApitokenArgs_1 = require("./args/CreateOneApitokenArgs");
const DeleteManyApitokenArgs_1 = require("./args/DeleteManyApitokenArgs");
const DeleteOneApitokenArgs_1 = require("./args/DeleteOneApitokenArgs");
const FindFirstApitokenArgs_1 = require("./args/FindFirstApitokenArgs");
const FindFirstApitokenOrThrowArgs_1 = require("./args/FindFirstApitokenOrThrowArgs");
const FindManyApitokenArgs_1 = require("./args/FindManyApitokenArgs");
const FindUniqueApitokenArgs_1 = require("./args/FindUniqueApitokenArgs");
const FindUniqueApitokenOrThrowArgs_1 = require("./args/FindUniqueApitokenOrThrowArgs");
const GroupByApitokenArgs_1 = require("./args/GroupByApitokenArgs");
const UpdateManyApitokenArgs_1 = require("./args/UpdateManyApitokenArgs");
const UpdateOneApitokenArgs_1 = require("./args/UpdateOneApitokenArgs");
const UpsertOneApitokenArgs_1 = require("./args/UpsertOneApitokenArgs");
const helpers_1 = require("../../../helpers");
const Apitoken_1 = require("../../../models/Apitoken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateApitoken_1 = require("../../outputs/AggregateApitoken");
const ApitokenGroupBy_1 = require("../../outputs/ApitokenGroupBy");
let ApitokenCrudResolver = class ApitokenCrudResolver {
    async aggregateApitoken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstApitokenOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async apitokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async apitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByApitoken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneApitokenArgs_1.CreateOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "createOneApitoken", null);
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
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneApitokenArgs_1.DeleteOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "deleteOneApitoken", null);
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
    TypeGraphQL.Query(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstApitokenOrThrowArgs_1.FindFirstApitokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "findFirstApitokenOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueApitokenOrThrowArgs_1.FindUniqueApitokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "getApitoken", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneApitokenArgs_1.UpdateOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "updateOneApitoken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneApitokenArgs_1.UpsertOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ApitokenCrudResolver.prototype, "upsertOneApitoken", null);
ApitokenCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], ApitokenCrudResolver);
exports.ApitokenCrudResolver = ApitokenCrudResolver;
