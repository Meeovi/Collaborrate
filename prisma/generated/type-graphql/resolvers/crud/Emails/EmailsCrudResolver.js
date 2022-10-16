"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEmailsArgs_1 = require("./args/AggregateEmailsArgs");
const CreateManyEmailsArgs_1 = require("./args/CreateManyEmailsArgs");
const CreateOneEmailsArgs_1 = require("./args/CreateOneEmailsArgs");
const DeleteManyEmailsArgs_1 = require("./args/DeleteManyEmailsArgs");
const DeleteOneEmailsArgs_1 = require("./args/DeleteOneEmailsArgs");
const FindFirstEmailsArgs_1 = require("./args/FindFirstEmailsArgs");
const FindManyEmailsArgs_1 = require("./args/FindManyEmailsArgs");
const FindUniqueEmailsArgs_1 = require("./args/FindUniqueEmailsArgs");
const GroupByEmailsArgs_1 = require("./args/GroupByEmailsArgs");
const UpdateManyEmailsArgs_1 = require("./args/UpdateManyEmailsArgs");
const UpdateOneEmailsArgs_1 = require("./args/UpdateOneEmailsArgs");
const UpsertOneEmailsArgs_1 = require("./args/UpsertOneEmailsArgs");
const helpers_1 = require("../../../helpers");
const Emails_1 = require("../../../models/Emails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmails_1 = require("../../outputs/AggregateEmails");
const EmailsGroupBy_1 = require("../../outputs/EmailsGroupBy");
let EmailsCrudResolver = class EmailsCrudResolver {
    async aggregateEmails(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByEmails(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmails_1.AggregateEmails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmailsArgs_1.AggregateEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "aggregateEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmailsArgs_1.CreateManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "createManyEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEmailsArgs_1.CreateOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "createOneEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEmailsArgs_1.DeleteManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "deleteManyEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEmailsArgs_1.DeleteOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "deleteOneEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailsArgs_1.FindFirstEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "findFirstEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Emails_1.Emails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmailsArgs_1.FindManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "findManyEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailsArgs_1.FindUniqueEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "findUniqueEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailsGroupBy_1.EmailsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmailsArgs_1.GroupByEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "groupByEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmailsArgs_1.UpdateManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "updateManyEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmailsArgs_1.UpdateOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "updateOneEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEmailsArgs_1.UpsertOneEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "upsertOneEmails", null);
EmailsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], EmailsCrudResolver);
exports.EmailsCrudResolver = EmailsCrudResolver;
