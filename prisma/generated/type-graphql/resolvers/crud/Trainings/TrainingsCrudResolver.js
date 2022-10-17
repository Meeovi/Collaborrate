"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTrainingsArgs_1 = require("./args/AggregateTrainingsArgs");
const CreateManyTrainingsArgs_1 = require("./args/CreateManyTrainingsArgs");
const CreateOneTrainingsArgs_1 = require("./args/CreateOneTrainingsArgs");
const DeleteManyTrainingsArgs_1 = require("./args/DeleteManyTrainingsArgs");
const DeleteOneTrainingsArgs_1 = require("./args/DeleteOneTrainingsArgs");
const FindFirstTrainingsArgs_1 = require("./args/FindFirstTrainingsArgs");
const FindManyTrainingsArgs_1 = require("./args/FindManyTrainingsArgs");
const FindUniqueTrainingsArgs_1 = require("./args/FindUniqueTrainingsArgs");
const GroupByTrainingsArgs_1 = require("./args/GroupByTrainingsArgs");
const UpdateManyTrainingsArgs_1 = require("./args/UpdateManyTrainingsArgs");
const UpdateOneTrainingsArgs_1 = require("./args/UpdateOneTrainingsArgs");
const UpsertOneTrainingsArgs_1 = require("./args/UpsertOneTrainingsArgs");
const helpers_1 = require("../../../helpers");
const Trainings_1 = require("../../../models/Trainings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTrainings_1 = require("../../outputs/AggregateTrainings");
const TrainingsGroupBy_1 = require("../../outputs/TrainingsGroupBy");
let TrainingsCrudResolver = class TrainingsCrudResolver {
    async aggregateTrainings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTrainings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTrainings_1.AggregateTrainings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTrainingsArgs_1.AggregateTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "aggregateTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTrainingsArgs_1.CreateManyTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "createManyTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTrainingsArgs_1.CreateOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "createOneTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTrainingsArgs_1.DeleteManyTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "deleteManyTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTrainingsArgs_1.DeleteOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "deleteOneTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTrainingsArgs_1.FindFirstTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "findFirstTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Trainings_1.Trainings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTrainingsArgs_1.FindManyTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "findManyTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTrainingsArgs_1.FindUniqueTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "findUniqueTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TrainingsGroupBy_1.TrainingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTrainingsArgs_1.GroupByTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "groupByTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTrainingsArgs_1.UpdateManyTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "updateManyTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTrainingsArgs_1.UpdateOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "updateOneTrainings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trainings_1.Trainings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTrainingsArgs_1.UpsertOneTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TrainingsCrudResolver.prototype, "upsertOneTrainings", null);
TrainingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], TrainingsCrudResolver);
exports.TrainingsCrudResolver = TrainingsCrudResolver;
