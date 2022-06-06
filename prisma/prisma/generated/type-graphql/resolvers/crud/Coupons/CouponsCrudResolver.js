"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCouponsArgs_1 = require("./args/AggregateCouponsArgs");
const CreateCouponsArgs_1 = require("./args/CreateCouponsArgs");
const CreateManyCouponsArgs_1 = require("./args/CreateManyCouponsArgs");
const DeleteCouponsArgs_1 = require("./args/DeleteCouponsArgs");
const DeleteManyCouponsArgs_1 = require("./args/DeleteManyCouponsArgs");
const FindFirstCouponsArgs_1 = require("./args/FindFirstCouponsArgs");
const FindManyCouponsArgs_1 = require("./args/FindManyCouponsArgs");
const FindUniqueCouponsArgs_1 = require("./args/FindUniqueCouponsArgs");
const GroupByCouponsArgs_1 = require("./args/GroupByCouponsArgs");
const UpdateCouponsArgs_1 = require("./args/UpdateCouponsArgs");
const UpdateManyCouponsArgs_1 = require("./args/UpdateManyCouponsArgs");
const UpsertCouponsArgs_1 = require("./args/UpsertCouponsArgs");
const helpers_1 = require("../../../helpers");
const Coupons_1 = require("../../../models/Coupons");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCoupons_1 = require("../../outputs/AggregateCoupons");
const CouponsGroupBy_1 = require("../../outputs/CouponsGroupBy");
let CouponsCrudResolver = class CouponsCrudResolver {
    async findUniqueCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findUnique({
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
    async createCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.update({
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
    async updateManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCoupons(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCoupons(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCouponsArgs_1.CreateCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "createCoupons", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCouponsArgs_1.DeleteCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "deleteCoupons", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCouponsArgs_1.UpdateCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "updateCoupons", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCouponsArgs_1.UpsertCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CouponsCrudResolver.prototype, "upsertCoupons", null);
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
CouponsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], CouponsCrudResolver);
exports.CouponsCrudResolver = CouponsCrudResolver;
