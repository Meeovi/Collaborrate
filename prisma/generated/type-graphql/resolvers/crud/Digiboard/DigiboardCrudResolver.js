"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDigiboardArgs_1 = require("./args/AggregateDigiboardArgs");
const CreateManyDigiboardArgs_1 = require("./args/CreateManyDigiboardArgs");
const CreateOneDigiboardArgs_1 = require("./args/CreateOneDigiboardArgs");
const DeleteManyDigiboardArgs_1 = require("./args/DeleteManyDigiboardArgs");
const DeleteOneDigiboardArgs_1 = require("./args/DeleteOneDigiboardArgs");
const FindFirstDigiboardArgs_1 = require("./args/FindFirstDigiboardArgs");
const FindManyDigiboardArgs_1 = require("./args/FindManyDigiboardArgs");
const FindUniqueDigiboardArgs_1 = require("./args/FindUniqueDigiboardArgs");
const GroupByDigiboardArgs_1 = require("./args/GroupByDigiboardArgs");
const UpdateManyDigiboardArgs_1 = require("./args/UpdateManyDigiboardArgs");
const UpdateOneDigiboardArgs_1 = require("./args/UpdateOneDigiboardArgs");
const UpsertOneDigiboardArgs_1 = require("./args/UpsertOneDigiboardArgs");
const helpers_1 = require("../../../helpers");
const Digiboard_1 = require("../../../models/Digiboard");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDigiboard_1 = require("../../outputs/AggregateDigiboard");
const DigiboardGroupBy_1 = require("../../outputs/DigiboardGroupBy");
let DigiboardCrudResolver = class DigiboardCrudResolver {
    async aggregateDigiboard(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async digiboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async digiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDigiboard(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDigiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDigiboard_1.AggregateDigiboard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDigiboardArgs_1.AggregateDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "aggregateDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDigiboardArgs_1.CreateManyDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "createManyDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDigiboardArgs_1.CreateOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "createOneDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDigiboardArgs_1.DeleteManyDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "deleteManyDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDigiboardArgs_1.DeleteOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "deleteOneDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDigiboardArgs_1.FindFirstDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "findFirstDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Digiboard_1.Digiboard], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDigiboardArgs_1.FindManyDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "digiboards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDigiboardArgs_1.FindUniqueDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "digiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DigiboardGroupBy_1.DigiboardGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDigiboardArgs_1.GroupByDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "groupByDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDigiboardArgs_1.UpdateManyDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "updateManyDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDigiboardArgs_1.UpdateOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "updateOneDigiboard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Digiboard_1.Digiboard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDigiboardArgs_1.UpsertOneDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DigiboardCrudResolver.prototype, "upsertOneDigiboard", null);
DigiboardCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], DigiboardCrudResolver);
exports.DigiboardCrudResolver = DigiboardCrudResolver;
