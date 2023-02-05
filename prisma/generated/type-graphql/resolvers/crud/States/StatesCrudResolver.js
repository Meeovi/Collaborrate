"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateStatesArgs_1 = require("./args/AggregateStatesArgs");
const CreateManyStatesArgs_1 = require("./args/CreateManyStatesArgs");
const CreateOneStatesArgs_1 = require("./args/CreateOneStatesArgs");
const DeleteManyStatesArgs_1 = require("./args/DeleteManyStatesArgs");
const DeleteOneStatesArgs_1 = require("./args/DeleteOneStatesArgs");
const FindFirstStatesArgs_1 = require("./args/FindFirstStatesArgs");
const FindFirstStatesOrThrowArgs_1 = require("./args/FindFirstStatesOrThrowArgs");
const FindManyStatesArgs_1 = require("./args/FindManyStatesArgs");
const FindUniqueStatesArgs_1 = require("./args/FindUniqueStatesArgs");
const FindUniqueStatesOrThrowArgs_1 = require("./args/FindUniqueStatesOrThrowArgs");
const GroupByStatesArgs_1 = require("./args/GroupByStatesArgs");
const UpdateManyStatesArgs_1 = require("./args/UpdateManyStatesArgs");
const UpdateOneStatesArgs_1 = require("./args/UpdateOneStatesArgs");
const UpsertOneStatesArgs_1 = require("./args/UpsertOneStatesArgs");
const helpers_1 = require("../../../helpers");
const States_1 = require("../../../models/States");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStates_1 = require("../../outputs/AggregateStates");
const StatesGroupBy_1 = require("../../outputs/StatesGroupBy");
let StatesCrudResolver = class StatesCrudResolver {
    async aggregateStates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).states.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueStatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByStates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStates_1.AggregateStates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStatesArgs_1.AggregateStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "aggregateStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyStatesArgs_1.CreateManyStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "createManyStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneStatesArgs_1.CreateOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "createOneStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStatesArgs_1.DeleteManyStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "deleteManyStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStatesArgs_1.DeleteOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "deleteOneStates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatesArgs_1.FindFirstStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "findFirstStates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatesOrThrowArgs_1.FindFirstStatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "findFirstStatesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [States_1.States], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStatesArgs_1.FindManyStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "findManyStates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatesArgs_1.FindUniqueStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "findUniqueStates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatesOrThrowArgs_1.FindUniqueStatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "findUniqueStatesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatesGroupBy_1.StatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatesArgs_1.GroupByStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "groupByStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStatesArgs_1.UpdateManyStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "updateManyStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStatesArgs_1.UpdateOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "updateOneStates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStatesArgs_1.UpsertOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatesCrudResolver.prototype, "upsertOneStates", null);
StatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], StatesCrudResolver);
exports.StatesCrudResolver = StatesCrudResolver;
