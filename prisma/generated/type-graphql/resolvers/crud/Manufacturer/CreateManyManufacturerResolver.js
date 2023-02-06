"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyManufacturerArgs_1 = require("./args/CreateManyManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyManufacturerResolver = class CreateManyManufacturerResolver {
    async createManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyManufacturerArgs_1.CreateManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyManufacturerResolver.prototype, "createManyManufacturer", null);
CreateManyManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], CreateManyManufacturerResolver);
exports.CreateManyManufacturerResolver = CreateManyManufacturerResolver;
