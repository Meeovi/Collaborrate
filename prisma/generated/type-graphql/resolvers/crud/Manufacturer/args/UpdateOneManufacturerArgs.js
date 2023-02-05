"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerUpdateInput_1 = require("../../../inputs/ManufacturerUpdateInput");
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
let UpdateOneManufacturerArgs = class UpdateOneManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerUpdateInput_1.ManufacturerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerUpdateInput_1.ManufacturerUpdateInput)
], UpdateOneManufacturerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], UpdateOneManufacturerArgs.prototype, "where", void 0);
UpdateOneManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneManufacturerArgs);
exports.UpdateOneManufacturerArgs = UpdateOneManufacturerArgs;
