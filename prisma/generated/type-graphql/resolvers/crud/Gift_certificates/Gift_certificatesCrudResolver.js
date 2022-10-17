"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGift_certificatesArgs_1 = require("./args/AggregateGift_certificatesArgs");
const CreateManyGift_certificatesArgs_1 = require("./args/CreateManyGift_certificatesArgs");
const CreateOneGift_certificatesArgs_1 = require("./args/CreateOneGift_certificatesArgs");
const DeleteManyGift_certificatesArgs_1 = require("./args/DeleteManyGift_certificatesArgs");
const DeleteOneGift_certificatesArgs_1 = require("./args/DeleteOneGift_certificatesArgs");
const FindFirstGift_certificatesArgs_1 = require("./args/FindFirstGift_certificatesArgs");
const FindManyGift_certificatesArgs_1 = require("./args/FindManyGift_certificatesArgs");
const FindUniqueGift_certificatesArgs_1 = require("./args/FindUniqueGift_certificatesArgs");
const GroupByGift_certificatesArgs_1 = require("./args/GroupByGift_certificatesArgs");
const UpdateManyGift_certificatesArgs_1 = require("./args/UpdateManyGift_certificatesArgs");
const UpdateOneGift_certificatesArgs_1 = require("./args/UpdateOneGift_certificatesArgs");
const UpsertOneGift_certificatesArgs_1 = require("./args/UpsertOneGift_certificatesArgs");
const helpers_1 = require("../../../helpers");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGift_certificates_1 = require("../../outputs/AggregateGift_certificates");
const Gift_certificatesGroupBy_1 = require("../../outputs/Gift_certificatesGroupBy");
let Gift_certificatesCrudResolver = class Gift_certificatesCrudResolver {
    async aggregateGift_certificates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.create({
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
    async deleteOneGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.delete({
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
    async findUniqueGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByGift_certificates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneGift_certificatesArgs_1.CreateOneGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "createOneGift_certificates", null);
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
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneGift_certificatesArgs_1.DeleteOneGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "deleteOneGift_certificates", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneGift_certificatesArgs_1.UpdateOneGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "updateOneGift_certificates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneGift_certificatesArgs_1.UpsertOneGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Gift_certificatesCrudResolver.prototype, "upsertOneGift_certificates", null);
Gift_certificatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], Gift_certificatesCrudResolver);
exports.Gift_certificatesCrudResolver = Gift_certificatesCrudResolver;
