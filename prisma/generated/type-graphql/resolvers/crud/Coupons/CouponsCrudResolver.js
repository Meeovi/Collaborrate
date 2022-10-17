"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCouponsArgs_1 = require("./args/AggregateCouponsArgs");
const CreateManyCouponsArgs_1 = require("./args/CreateManyCouponsArgs");
const CreateOneCouponsArgs_1 = require("./args/CreateOneCouponsArgs");
const DeleteManyCouponsArgs_1 = require("./args/DeleteManyCouponsArgs");
const DeleteOneCouponsArgs_1 = require("./args/DeleteOneCouponsArgs");
const FindFirstCouponsArgs_1 = require("./args/FindFirstCouponsArgs");
const FindManyCouponsArgs_1 = require("./args/FindManyCouponsArgs");
const FindUniqueCouponsArgs_1 = require("./args/FindUniqueCouponsArgs");
const GroupByCouponsArgs_1 = require("./args/GroupByCouponsArgs");
const UpdateManyCouponsArgs_1 = require("./args/UpdateManyCouponsArgs");
const UpdateOneCouponsArgs_1 = require("./args/UpdateOneCouponsArgs");
const UpsertOneCouponsArgs_1 = require("./args/UpsertOneCouponsArgs");
const helpers_1 = require("../../../helpers");
const Coupons_1 = require("../../../models/Coupons");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCoupons_1 = require("../../outputs/AggregateCoupons");
const CouponsGroupBy_1 = require("../../outputs/CouponsGroupBy");
let CouponsCrudResolver = class CouponsCrudResolver {
    async aggregateCoupons(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCoupons(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCoupons_1.AggregateCoupons, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCouponsArgs_1.AggregateCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "aggregateCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCouponsArgs_1.CreateManyCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "createManyCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCouponsArgs_1.CreateOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "createOneCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCouponsArgs_1.DeleteManyCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "deleteManyCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCouponsArgs_1.DeleteOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "deleteOneCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Coupons_1.Coupons, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCouponsArgs_1.FindFirstCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "findFirstCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Coupons_1.Coupons], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCouponsArgs_1.FindManyCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "findManyCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Coupons_1.Coupons, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCouponsArgs_1.FindUniqueCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "findUniqueCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CouponsGroupBy_1.CouponsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCouponsArgs_1.GroupByCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "groupByCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCouponsArgs_1.UpdateManyCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "updateManyCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCouponsArgs_1.UpdateOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "updateOneCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCouponsArgs_1.UpsertOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "upsertOneCoupons", null);
CouponsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], CouponsCrudResolver);
exports.CouponsCrudResolver = CouponsCrudResolver;
