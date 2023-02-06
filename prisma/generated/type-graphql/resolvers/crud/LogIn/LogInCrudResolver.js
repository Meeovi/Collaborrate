"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLogInArgs_1 = require("./args/AggregateLogInArgs");
const CreateManyLogInArgs_1 = require("./args/CreateManyLogInArgs");
const CreateOneLogInArgs_1 = require("./args/CreateOneLogInArgs");
const DeleteManyLogInArgs_1 = require("./args/DeleteManyLogInArgs");
const DeleteOneLogInArgs_1 = require("./args/DeleteOneLogInArgs");
const FindFirstLogInArgs_1 = require("./args/FindFirstLogInArgs");
const FindFirstLogInOrThrowArgs_1 = require("./args/FindFirstLogInOrThrowArgs");
const FindManyLogInArgs_1 = require("./args/FindManyLogInArgs");
const FindUniqueLogInArgs_1 = require("./args/FindUniqueLogInArgs");
const FindUniqueLogInOrThrowArgs_1 = require("./args/FindUniqueLogInOrThrowArgs");
const GroupByLogInArgs_1 = require("./args/GroupByLogInArgs");
const UpdateManyLogInArgs_1 = require("./args/UpdateManyLogInArgs");
const UpdateOneLogInArgs_1 = require("./args/UpdateOneLogInArgs");
const UpsertOneLogInArgs_1 = require("./args/UpsertOneLogInArgs");
const helpers_1 = require("../../../helpers");
const LogIn_1 = require("../../../models/LogIn");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLogIn_1 = require("../../outputs/AggregateLogIn");
const LogInGroupBy_1 = require("../../outputs/LogInGroupBy");
let LogInCrudResolver = class LogInCrudResolver {
    async aggregateLogIn(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLogInOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async logIns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async logIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLogIn(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLogIn_1.AggregateLogIn, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLogInArgs_1.AggregateLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "aggregateLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLogInArgs_1.CreateManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "createManyLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LogIn_1.LogIn, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLogInArgs_1.CreateOneLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "createOneLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLogInArgs_1.DeleteManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "deleteManyLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLogInArgs_1.DeleteOneLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "deleteOneLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLogInArgs_1.FindFirstLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "findFirstLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLogInOrThrowArgs_1.FindFirstLogInOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "findFirstLogInOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LogIn_1.LogIn], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLogInArgs_1.FindManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "logIns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLogInArgs_1.FindUniqueLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "logIn", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLogInOrThrowArgs_1.FindUniqueLogInOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "getLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LogInGroupBy_1.LogInGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLogInArgs_1.GroupByLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "groupByLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLogInArgs_1.UpdateManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "updateManyLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLogInArgs_1.UpdateOneLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "updateOneLogIn", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LogIn_1.LogIn, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLogInArgs_1.UpsertOneLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LogInCrudResolver.prototype, "upsertOneLogIn", null);
LogInCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], LogInCrudResolver);
exports.LogInCrudResolver = LogInCrudResolver;
