"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSpecial_discountsArgs_1 = require("./args/FindFirstSpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const helpers_1 = require("../../../helpers");
let FindFirstSpecial_discountsResolver = class FindFirstSpecial_discountsResolver {
    async findFirstSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSpecial_discountsArgs_1.FindFirstSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSpecial_discountsResolver.prototype, "findFirstSpecial_discounts", null);
FindFirstSpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], FindFirstSpecial_discountsResolver);
exports.FindFirstSpecial_discountsResolver = FindFirstSpecial_discountsResolver;
