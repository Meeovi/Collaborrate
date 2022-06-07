"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGlossaryArgs_1 = require("./args/AggregateGlossaryArgs");
const CreateGlossaryArgs_1 = require("./args/CreateGlossaryArgs");
const CreateManyGlossaryArgs_1 = require("./args/CreateManyGlossaryArgs");
const DeleteGlossaryArgs_1 = require("./args/DeleteGlossaryArgs");
const DeleteManyGlossaryArgs_1 = require("./args/DeleteManyGlossaryArgs");
const FindFirstGlossaryArgs_1 = require("./args/FindFirstGlossaryArgs");
const FindManyGlossaryArgs_1 = require("./args/FindManyGlossaryArgs");
const FindUniqueGlossaryArgs_1 = require("./args/FindUniqueGlossaryArgs");
const GroupByGlossaryArgs_1 = require("./args/GroupByGlossaryArgs");
const UpdateGlossaryArgs_1 = require("./args/UpdateGlossaryArgs");
const UpdateManyGlossaryArgs_1 = require("./args/UpdateManyGlossaryArgs");
const UpsertGlossaryArgs_1 = require("./args/UpsertGlossaryArgs");
const helpers_1 = require("../../../helpers");
const Glossary_1 = require("../../../models/Glossary");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGlossary_1 = require("../../outputs/AggregateGlossary");
const GlossaryGroupBy_1 = require("../../outputs/GlossaryGroupBy");
let GlossaryCrudResolver = class GlossaryCrudResolver {
    async glossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async glossaries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateGlossary(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByGlossary(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueGlossaryArgs_1.FindUniqueGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "glossary", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstGlossaryArgs_1.FindFirstGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "findFirstGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Glossary_1.Glossary], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyGlossaryArgs_1.FindManyGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "glossaries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateGlossaryArgs_1.CreateGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "createGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyGlossaryArgs_1.CreateManyGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "createManyGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteGlossaryArgs_1.DeleteGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "deleteGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateGlossaryArgs_1.UpdateGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "updateGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyGlossaryArgs_1.DeleteManyGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "deleteManyGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyGlossaryArgs_1.UpdateManyGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "updateManyGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertGlossaryArgs_1.UpsertGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "upsertGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGlossary_1.AggregateGlossary, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGlossaryArgs_1.AggregateGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "aggregateGlossary", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [GlossaryGroupBy_1.GlossaryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGlossaryArgs_1.GroupByGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GlossaryCrudResolver.prototype, "groupByGlossary", null);
GlossaryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], GlossaryCrudResolver);
exports.GlossaryCrudResolver = GlossaryCrudResolver;