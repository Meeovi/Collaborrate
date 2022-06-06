"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteShopsArgs_1 = require("./args/DeleteShopsArgs");
const Shops_1 = require("../../../models/Shops");
const helpers_1 = require("../../../helpers");
let DeleteShopsResolver = class DeleteShopsResolver {
    async deleteShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteShopsArgs_1.DeleteShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteShopsResolver.prototype, "deleteShops", null);
DeleteShopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], DeleteShopsResolver);
exports.DeleteShopsResolver = DeleteShopsResolver;
