"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneVendorsArgs_1 = require("./args/DeleteOneVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let DeleteOneVendorsResolver = class DeleteOneVendorsResolver {
    async deleteOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVendorsArgs_1.DeleteOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneVendorsResolver.prototype, "deleteOneVendors", null);
DeleteOneVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], DeleteOneVendorsResolver);
exports.DeleteOneVendorsResolver = DeleteOneVendorsResolver;
