"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneVendorsArgs_1 = require("./args/UpdateOneVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let UpdateOneVendorsResolver = class UpdateOneVendorsResolver {
    async updateOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVendorsArgs_1.UpdateOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneVendorsResolver.prototype, "updateOneVendors", null);
UpdateOneVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], UpdateOneVendorsResolver);
exports.UpdateOneVendorsResolver = UpdateOneVendorsResolver;
