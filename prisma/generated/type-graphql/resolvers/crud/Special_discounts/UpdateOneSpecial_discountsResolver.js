"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneSpecial_discountsArgs_1 = require("./args/UpdateOneSpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const helpers_1 = require("../../../helpers");
let UpdateOneSpecial_discountsResolver = class UpdateOneSpecial_discountsResolver {
    async updateOneSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSpecial_discountsArgs_1.UpdateOneSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSpecial_discountsResolver.prototype, "updateOneSpecial_discounts", null);
UpdateOneSpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], UpdateOneSpecial_discountsResolver);
exports.UpdateOneSpecial_discountsResolver = UpdateOneSpecial_discountsResolver;
