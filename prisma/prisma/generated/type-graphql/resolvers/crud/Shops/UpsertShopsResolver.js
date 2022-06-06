"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertShopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertShopsArgs_1 = require("./args/UpsertShopsArgs");
const Shops_1 = require("../../../models/Shops");
const helpers_1 = require("../../../helpers");
let UpsertShopsResolver = class UpsertShopsResolver {
    async upsertShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertShopsArgs_1.UpsertShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertShopsResolver.prototype, "upsertShops", null);
UpsertShopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], UpsertShopsResolver);
exports.UpsertShopsResolver = UpsertShopsResolver;
