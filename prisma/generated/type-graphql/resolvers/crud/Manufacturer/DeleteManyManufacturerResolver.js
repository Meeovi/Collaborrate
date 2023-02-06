"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyManufacturerArgs_1 = require("./args/DeleteManyManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyManufacturerResolver = class DeleteManyManufacturerResolver {
    async deleteManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyManufacturerArgs_1.DeleteManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyManufacturerResolver.prototype, "deleteManyManufacturer", null);
DeleteManyManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], DeleteManyManufacturerResolver);
exports.DeleteManyManufacturerResolver = DeleteManyManufacturerResolver;
