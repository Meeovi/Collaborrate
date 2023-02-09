"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneManufacturerArgs_1 = require("./args/CreateOneManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const helpers_1 = require("../../../helpers");
let CreateOneManufacturerResolver = class CreateOneManufacturerResolver {
    async createOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneManufacturerArgs_1.CreateOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneManufacturerResolver.prototype, "createOneManufacturer", null);
CreateOneManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], CreateOneManufacturerResolver);
exports.CreateOneManufacturerResolver = CreateOneManufacturerResolver;
