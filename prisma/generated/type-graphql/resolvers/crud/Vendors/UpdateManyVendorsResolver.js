"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyVendorsArgs_1 = require("./args/UpdateManyVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyVendorsResolver = class UpdateManyVendorsResolver {
    async updateManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVendorsArgs_1.UpdateManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyVendorsResolver.prototype, "updateManyVendors", null);
UpdateManyVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], UpdateManyVendorsResolver);
exports.UpdateManyVendorsResolver = UpdateManyVendorsResolver;
