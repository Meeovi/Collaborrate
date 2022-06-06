"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCouponsArgs_1 = require("./args/DeleteCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const helpers_1 = require("../../../helpers");
let DeleteCouponsResolver = class DeleteCouponsResolver {
    async deleteCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteCouponsResolver.prototype, "deleteCoupons", null);
DeleteCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], DeleteCouponsResolver);
exports.DeleteCouponsResolver = DeleteCouponsResolver;
