"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateShopsArgs_1 = require("./args/UpdateShopsArgs");
const Shops_1 = require("../../../models/Shops");
const helpers_1 = require("../../../helpers");
let UpdateShopsResolver = class UpdateShopsResolver {
    async updateShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateShopsArgs_1.UpdateShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateShopsResolver.prototype, "updateShops", null);
UpdateShopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], UpdateShopsResolver);
exports.UpdateShopsResolver = UpdateShopsResolver;
