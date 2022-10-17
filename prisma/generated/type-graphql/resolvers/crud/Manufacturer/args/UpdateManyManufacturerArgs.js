"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerUpdateManyMutationInput_1 = require("../../../inputs/ManufacturerUpdateManyMutationInput");
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
let UpdateManyManufacturerArgs = class UpdateManyManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerUpdateManyMutationInput_1.ManufacturerUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerUpdateManyMutationInput_1.ManufacturerUpdateManyMutationInput)
], UpdateManyManufacturerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], UpdateManyManufacturerArgs.prototype, "where", void 0);
UpdateManyManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyManufacturerArgs);
exports.UpdateManyManufacturerArgs = UpdateManyManufacturerArgs;
