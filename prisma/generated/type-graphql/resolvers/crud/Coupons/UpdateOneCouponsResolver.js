"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneCouponsArgs_1 = require("./args/UpdateOneCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const helpers_1 = require("../../../helpers");
let UpdateOneCouponsResolver = class UpdateOneCouponsResolver {
    async updateOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCouponsArgs_1.UpdateOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCouponsResolver.prototype, "updateOneCoupons", null);
UpdateOneCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], UpdateOneCouponsResolver);
exports.UpdateOneCouponsResolver = UpdateOneCouponsResolver;
