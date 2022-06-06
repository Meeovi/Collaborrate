"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSpecial_discountsArgs_1 = require("./args/FindUniqueSpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const helpers_1 = require("../../../helpers");
let FindUniqueSpecial_discountsResolver = class FindUniqueSpecial_discountsResolver {
    async findUniqueSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSpecial_discountsArgs_1.FindUniqueSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSpecial_discountsResolver.prototype, "findUniqueSpecial_discounts", null);
FindUniqueSpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], FindUniqueSpecial_discountsResolver);
exports.FindUniqueSpecial_discountsResolver = FindUniqueSpecial_discountsResolver;
