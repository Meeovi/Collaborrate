"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyManufacturerArgs_1 = require("./args/UpdateManyManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyManufacturerResolver = class UpdateManyManufacturerResolver {
    async updateManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyManufacturerArgs_1.UpdateManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyManufacturerResolver.prototype, "updateManyManufacturer", null);
UpdateManyManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], UpdateManyManufacturerResolver);
exports.UpdateManyManufacturerResolver = UpdateManyManufacturerResolver;
