"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCouponsArgs_1 = require("./args/UpsertOneCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const helpers_1 = require("../../../helpers");
let UpsertOneCouponsResolver = class UpsertOneCouponsResolver {
    async upsertOneCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Coupons_1.Coupons, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCouponsArgs_1.UpsertOneCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCouponsResolver.prototype, "upsertOneCoupons", null);
UpsertOneCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], UpsertOneCouponsResolver);
exports.UpsertOneCouponsResolver = UpsertOneCouponsResolver;
