"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCouponsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCouponsArgs_1 = require("./args/FindManyCouponsArgs");
const Coupons_1 = require("../../../models/Coupons");
const helpers_1 = require("../../../helpers");
let FindManyCouponsResolver = class FindManyCouponsResolver {
    async findManyCoupons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).coupons.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Coupons_1.Coupons], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCouponsArgs_1.FindManyCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCouponsResolver.prototype, "findManyCoupons", null);
FindManyCouponsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Coupons_1.Coupons)
], FindManyCouponsResolver);
exports.FindManyCouponsResolver = FindManyCouponsResolver;
