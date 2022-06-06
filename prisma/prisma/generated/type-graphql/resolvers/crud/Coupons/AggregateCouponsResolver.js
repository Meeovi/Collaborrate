"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCouponsArgs_1 = require("./args/AggregateCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const AggregateCoupons_1 = require("../../outputs/AggregateCoupons");
const helpers_1 = require("../../../helpers");
let AggregateCouponsResolver = class AggregateCouponsResolver {
    async aggregateCoupons(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateCouponsResolver.prototype, "aggregateCoupons", null);
AggregateCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], AggregateCouponsResolver);
exports.AggregateCouponsResolver = AggregateCouponsResolver;
