"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGift_certificatesArgs_1 = require("./args/AggregateGift_certificatesArgs");
const CreateGift_certificatesArgs_1 = require("./args/CreateGift_certificatesArgs");
const CreateManyGift_certificatesArgs_1 = require("./args/CreateManyGift_certificatesArgs");
const DeleteGift_certificatesArgs_1 = require("./args/DeleteGift_certificatesArgs");
const DeleteManyGift_certificatesArgs_1 = require("./args/DeleteManyGift_certificatesArgs");
const FindFirstGift_certificatesArgs_1 = require("./args/FindFirstGift_certificatesArgs");
const FindManyGift_certificatesArgs_1 = require("./args/FindManyGift_certificatesArgs");
const FindUniqueGift_certificatesArgs_1 = require("./args/FindUniqueGift_certificatesArgs");
const GroupByGift_certificatesArgs_1 = require("./args/GroupByGift_certificatesArgs");
const UpdateGift_certificatesArgs_1 = require("./args/UpdateGift_certificatesArgs");
const UpdateManyGift_certificatesArgs_1 = require("./args/UpdateManyGift_certificatesArgs");
const UpsertGift_certificatesArgs_1 = require("./args/UpsertGift_certificatesArgs");
const helpers_1 = require("../../../helpers");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGift_certificates_1 = require("../../outputs/AggregateGift_certificates");
const Gift_certificatesGroupBy_1 = require("../../outputs/Gift_certificatesGroupBy");
let Gift_certificatesCrudResolver = class Gift_certificatesCrudResolver {
    async findUniqueGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateGift_certificates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByGift_certificates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueGift_certificatesArgs_1.FindUniqueGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "findUniqueGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstGift_certificatesArgs_1.FindFirstGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "findFirstGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Gift_certificates_1.Gift_certificates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyGift_certificatesArgs_1.FindManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "findManyGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateGift_certificatesArgs_1.CreateGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "createGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyGift_certificatesArgs_1.CreateManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "createManyGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteGift_certificatesArgs_1.DeleteGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "deleteGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateGift_certificatesArgs_1.UpdateGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "updateGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyGift_certificatesArgs_1.DeleteManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "deleteManyGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyGift_certificatesArgs_1.UpdateManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "updateManyGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertGift_certificatesArgs_1.UpsertGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "upsertGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGift_certificates_1.AggregateGift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGift_certificatesArgs_1.AggregateGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "aggregateGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Gift_certificatesGroupBy_1.Gift_certificatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGift_certificatesArgs_1.GroupByGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "groupByGift_certificates", null);
Gift_certificatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], Gift_certificatesCrudResolver);
exports.Gift_certificatesCrudResolver = Gift_certificatesCrudResolver;
