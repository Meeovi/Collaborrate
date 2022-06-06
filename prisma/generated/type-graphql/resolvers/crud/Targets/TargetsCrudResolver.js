"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTargetsArgs_1 = require("./args/AggregateTargetsArgs");
const CreateManyTargetsArgs_1 = require("./args/CreateManyTargetsArgs");
const CreateTargetsArgs_1 = require("./args/CreateTargetsArgs");
const DeleteManyTargetsArgs_1 = require("./args/DeleteManyTargetsArgs");
const DeleteTargetsArgs_1 = require("./args/DeleteTargetsArgs");
const FindFirstTargetsArgs_1 = require("./args/FindFirstTargetsArgs");
const FindManyTargetsArgs_1 = require("./args/FindManyTargetsArgs");
const FindUniqueTargetsArgs_1 = require("./args/FindUniqueTargetsArgs");
const GroupByTargetsArgs_1 = require("./args/GroupByTargetsArgs");
const UpdateManyTargetsArgs_1 = require("./args/UpdateManyTargetsArgs");
const UpdateTargetsArgs_1 = require("./args/UpdateTargetsArgs");
const UpsertTargetsArgs_1 = require("./args/UpsertTargetsArgs");
const helpers_1 = require("../../../helpers");
const Targets_1 = require("../../../models/Targets");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTargets_1 = require("../../outputs/AggregateTargets");
const TargetsGroupBy_1 = require("../../outputs/TargetsGroupBy");
let TargetsCrudResolver = class TargetsCrudResolver {
    async findUniqueTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTargets(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTargets(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTargetsArgs_1.FindUniqueTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "findUniqueTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTargetsArgs_1.FindFirstTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "findFirstTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Targets_1.Targets], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTargetsArgs_1.FindManyTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "findManyTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTargetsArgs_1.CreateTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "createTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTargetsArgs_1.CreateManyTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "createManyTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTargetsArgs_1.DeleteTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "deleteTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTargetsArgs_1.UpdateTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "updateTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTargetsArgs_1.DeleteManyTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "deleteManyTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTargetsArgs_1.UpdateManyTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "updateManyTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTargetsArgs_1.UpsertTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "upsertTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTargets_1.AggregateTargets, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTargetsArgs_1.AggregateTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "aggregateTargets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TargetsGroupBy_1.TargetsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTargetsArgs_1.GroupByTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TargetsCrudResolver.prototype, "groupByTargets", null);
TargetsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], TargetsCrudResolver);
exports.TargetsCrudResolver = TargetsCrudResolver;
