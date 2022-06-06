"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEmailsArgs_1 = require("./args/AggregateEmailsArgs");
const CreateEmailsArgs_1 = require("./args/CreateEmailsArgs");
const CreateManyEmailsArgs_1 = require("./args/CreateManyEmailsArgs");
const DeleteEmailsArgs_1 = require("./args/DeleteEmailsArgs");
const DeleteManyEmailsArgs_1 = require("./args/DeleteManyEmailsArgs");
const FindFirstEmailsArgs_1 = require("./args/FindFirstEmailsArgs");
const FindManyEmailsArgs_1 = require("./args/FindManyEmailsArgs");
const FindUniqueEmailsArgs_1 = require("./args/FindUniqueEmailsArgs");
const GroupByEmailsArgs_1 = require("./args/GroupByEmailsArgs");
const UpdateEmailsArgs_1 = require("./args/UpdateEmailsArgs");
const UpdateManyEmailsArgs_1 = require("./args/UpdateManyEmailsArgs");
const UpsertEmailsArgs_1 = require("./args/UpsertEmailsArgs");
const helpers_1 = require("../../../helpers");
const Emails_1 = require("../../../models/Emails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmails_1 = require("../../outputs/AggregateEmails");
const EmailsGroupBy_1 = require("../../outputs/EmailsGroupBy");
let EmailsCrudResolver = class EmailsCrudResolver {
    async findUniqueEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findUnique({
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
    async createEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.update({
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
    async updateManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEmails(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEmails(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEmailsArgs_1.CreateEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "createEmails", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEmailsArgs_1.DeleteEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "deleteEmails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateEmailsArgs_1.UpdateEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "updateEmails", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEmailsArgs_1.UpsertEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailsCrudResolver.prototype, "upsertEmails", null);
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
EmailsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], EmailsCrudResolver);
exports.EmailsCrudResolver = EmailsCrudResolver;
