"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManySpecial_discountsArgs_1 = require("./args/UpdateManySpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySpecial_discountsResolver = class UpdateManySpecial_discountsResolver {
    async updateManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySpecial_discountsArgs_1.UpdateManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySpecial_discountsResolver.prototype, "updateManySpecial_discounts", null);
UpdateManySpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], UpdateManySpecial_discountsResolver);
exports.UpdateManySpecial_discountsResolver = UpdateManySpecial_discountsResolver;
