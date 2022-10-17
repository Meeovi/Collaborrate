"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSurveysArgs_1 = require("./args/AggregateSurveysArgs");
const CreateManySurveysArgs_1 = require("./args/CreateManySurveysArgs");
const CreateOneSurveysArgs_1 = require("./args/CreateOneSurveysArgs");
const DeleteManySurveysArgs_1 = require("./args/DeleteManySurveysArgs");
const DeleteOneSurveysArgs_1 = require("./args/DeleteOneSurveysArgs");
const FindFirstSurveysArgs_1 = require("./args/FindFirstSurveysArgs");
const FindManySurveysArgs_1 = require("./args/FindManySurveysArgs");
const FindUniqueSurveysArgs_1 = require("./args/FindUniqueSurveysArgs");
const GroupBySurveysArgs_1 = require("./args/GroupBySurveysArgs");
const UpdateManySurveysArgs_1 = require("./args/UpdateManySurveysArgs");
const UpdateOneSurveysArgs_1 = require("./args/UpdateOneSurveysArgs");
const UpsertOneSurveysArgs_1 = require("./args/UpsertOneSurveysArgs");
const helpers_1 = require("../../../helpers");
const Surveys_1 = require("../../../models/Surveys");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSurveys_1 = require("../../outputs/AggregateSurveys");
const SurveysGroupBy_1 = require("../../outputs/SurveysGroupBy");
let SurveysCrudResolver = class SurveysCrudResolver {
    async aggregateSurveys(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManySurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySurveys(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSurveys_1.AggregateSurveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSurveysArgs_1.AggregateSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "aggregateSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySurveysArgs_1.CreateManySurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "createManySurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSurveysArgs_1.CreateOneSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "createOneSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySurveysArgs_1.DeleteManySurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "deleteManySurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSurveysArgs_1.DeleteOneSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "deleteOneSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSurveysArgs_1.FindFirstSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "findFirstSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Surveys_1.Surveys], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySurveysArgs_1.FindManySurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "findManySurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSurveysArgs_1.FindUniqueSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "findUniqueSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SurveysGroupBy_1.SurveysGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySurveysArgs_1.GroupBySurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "groupBySurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySurveysArgs_1.UpdateManySurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "updateManySurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSurveysArgs_1.UpdateOneSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "updateOneSurveys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSurveysArgs_1.UpsertOneSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SurveysCrudResolver.prototype, "upsertOneSurveys", null);
SurveysCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], SurveysCrudResolver);
exports.SurveysCrudResolver = SurveysCrudResolver;
