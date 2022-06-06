"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCouponsArgs_1 = require("./args/UpdateManyCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCouponsResolver = class UpdateManyCouponsResolver {
    async updateManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyCouponsResolver.prototype, "updateManyCoupons", null);
UpdateManyCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], UpdateManyCouponsResolver);
exports.UpdateManyCouponsResolver = UpdateManyCouponsResolver;
