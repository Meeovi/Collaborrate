"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneManufacturerArgs_1 = require("./args/UpdateOneManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const helpers_1 = require("../../../helpers");
let UpdateOneManufacturerResolver = class UpdateOneManufacturerResolver {
    async updateOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneManufacturerArgs_1.UpdateOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneManufacturerResolver.prototype, "updateOneManufacturer", null);
UpdateOneManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], UpdateOneManufacturerResolver);
exports.UpdateOneManufacturerResolver = UpdateOneManufacturerResolver;
