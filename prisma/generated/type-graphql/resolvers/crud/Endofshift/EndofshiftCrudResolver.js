"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEndofshiftArgs_1 = require("./args/AggregateEndofshiftArgs");
const CreateManyEndofshiftArgs_1 = require("./args/CreateManyEndofshiftArgs");
const CreateOneEndofshiftArgs_1 = require("./args/CreateOneEndofshiftArgs");
const DeleteManyEndofshiftArgs_1 = require("./args/DeleteManyEndofshiftArgs");
const DeleteOneEndofshiftArgs_1 = require("./args/DeleteOneEndofshiftArgs");
const FindFirstEndofshiftArgs_1 = require("./args/FindFirstEndofshiftArgs");
const FindManyEndofshiftArgs_1 = require("./args/FindManyEndofshiftArgs");
const FindUniqueEndofshiftArgs_1 = require("./args/FindUniqueEndofshiftArgs");
const GroupByEndofshiftArgs_1 = require("./args/GroupByEndofshiftArgs");
const UpdateManyEndofshiftArgs_1 = require("./args/UpdateManyEndofshiftArgs");
const UpdateOneEndofshiftArgs_1 = require("./args/UpdateOneEndofshiftArgs");
const UpsertOneEndofshiftArgs_1 = require("./args/UpsertOneEndofshiftArgs");
const helpers_1 = require("../../../helpers");
const Endofshift_1 = require("../../../models/Endofshift");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEndofshift_1 = require("../../outputs/AggregateEndofshift");
const EndofshiftGroupBy_1 = require("../../outputs/EndofshiftGroupBy");
let EndofshiftCrudResolver = class EndofshiftCrudResolver {
    async aggregateEndofshift(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async endofshifts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async endofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByEndofshift(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEndofshift_1.AggregateEndofshift, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEndofshiftArgs_1.AggregateEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "aggregateEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEndofshiftArgs_1.CreateManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "createManyEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEndofshiftArgs_1.CreateOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "createOneEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEndofshiftArgs_1.DeleteManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "deleteManyEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEndofshiftArgs_1.DeleteOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "deleteOneEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Endofshift_1.Endofshift, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEndofshiftArgs_1.FindFirstEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "findFirstEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Endofshift_1.Endofshift], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEndofshiftArgs_1.FindManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "endofshifts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Endofshift_1.Endofshift, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEndofshiftArgs_1.FindUniqueEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "endofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EndofshiftGroupBy_1.EndofshiftGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEndofshiftArgs_1.GroupByEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "groupByEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEndofshiftArgs_1.UpdateManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "updateManyEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEndofshiftArgs_1.UpdateOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "updateOneEndofshift", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Endofshift_1.Endofshift, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEndofshiftArgs_1.UpsertOneEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EndofshiftCrudResolver.prototype, "upsertOneEndofshift", null);
EndofshiftCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], EndofshiftCrudResolver);
exports.EndofshiftCrudResolver = EndofshiftCrudResolver;
