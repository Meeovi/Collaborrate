"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSpecial_discountsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSpecial_discountsArgs_1 = require("./args/AggregateSpecial_discountsArgs");
const Special_discounts_1 = require("../../../models/Special_discounts");
const AggregateSpecial_discounts_1 = require("../../outputs/AggregateSpecial_discounts");
const helpers_1 = require("../../../helpers");
let AggregateSpecial_discountsResolver = class AggregateSpecial_discountsResolver {
    async aggregateSpecial_discounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSpecial_discounts_1.AggregateSpecial_discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSpecial_discountsArgs_1.AggregateSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSpecial_discountsResolver.prototype, "aggregateSpecial_discounts", null);
AggregateSpecial_discountsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], AggregateSpecial_discountsResolver);
exports.AggregateSpecial_discountsResolver = AggregateSpecial_discountsResolver;
