"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneSpecial_discountsArgs_1 = require("./args/CreateOneSpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const helpers_1 = require("../../../helpers");
let CreateOneSpecial_discountsResolver = class CreateOneSpecial_discountsResolver {
    async createOneSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSpecial_discountsArgs_1.CreateOneSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSpecial_discountsResolver.prototype, "createOneSpecial_discounts", null);
CreateOneSpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], CreateOneSpecial_discountsResolver);
exports.CreateOneSpecial_discountsResolver = CreateOneSpecial_discountsResolver;
