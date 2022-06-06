"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEmail_templatesArgs_1 = require("./args/AggregateEmail_templatesArgs");
const CreateEmail_templatesArgs_1 = require("./args/CreateEmail_templatesArgs");
const CreateManyEmail_templatesArgs_1 = require("./args/CreateManyEmail_templatesArgs");
const DeleteEmail_templatesArgs_1 = require("./args/DeleteEmail_templatesArgs");
const DeleteManyEmail_templatesArgs_1 = require("./args/DeleteManyEmail_templatesArgs");
const FindFirstEmail_templatesArgs_1 = require("./args/FindFirstEmail_templatesArgs");
const FindManyEmail_templatesArgs_1 = require("./args/FindManyEmail_templatesArgs");
const FindUniqueEmail_templatesArgs_1 = require("./args/FindUniqueEmail_templatesArgs");
const GroupByEmail_templatesArgs_1 = require("./args/GroupByEmail_templatesArgs");
const UpdateEmail_templatesArgs_1 = require("./args/UpdateEmail_templatesArgs");
const UpdateManyEmail_templatesArgs_1 = require("./args/UpdateManyEmail_templatesArgs");
const UpsertEmail_templatesArgs_1 = require("./args/UpsertEmail_templatesArgs");
const helpers_1 = require("../../../helpers");
const Email_templates_1 = require("../../../models/Email_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmail_templates_1 = require("../../outputs/AggregateEmail_templates");
const Email_templatesGroupBy_1 = require("../../outputs/Email_templatesGroupBy");
let Email_templatesCrudResolver = class Email_templatesCrudResolver {
    async findUniqueEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEmail_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEmail_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmail_templatesArgs_1.FindUniqueEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "findUniqueEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmail_templatesArgs_1.FindFirstEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "findFirstEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Email_templates_1.Email_templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmail_templatesArgs_1.FindManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "findManyEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEmail_templatesArgs_1.CreateEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "createEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmail_templatesArgs_1.CreateManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "createManyEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEmail_templatesArgs_1.DeleteEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "deleteEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateEmail_templatesArgs_1.UpdateEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "updateEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEmail_templatesArgs_1.DeleteManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "deleteManyEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmail_templatesArgs_1.UpdateManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "updateManyEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEmail_templatesArgs_1.UpsertEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "upsertEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmail_templates_1.AggregateEmail_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmail_templatesArgs_1.AggregateEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "aggregateEmail_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Email_templatesGroupBy_1.Email_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmail_templatesArgs_1.GroupByEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Email_templatesCrudResolver.prototype, "groupByEmail_templates", null);
Email_templatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], Email_templatesCrudResolver);
exports.Email_templatesCrudResolver = Email_templatesCrudResolver;
