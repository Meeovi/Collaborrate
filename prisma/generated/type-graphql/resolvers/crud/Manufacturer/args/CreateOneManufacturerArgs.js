"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerCreateInput_1 = require("../../../inputs/ManufacturerCreateInput");
let CreateOneManufacturerArgs = class CreateOneManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerCreateInput_1.ManufacturerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerCreateInput_1.ManufacturerCreateInput)
], CreateOneManufacturerArgs.prototype, "data", void 0);
CreateOneManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneManufacturerArgs);
exports.CreateOneManufacturerArgs = CreateOneManufacturerArgs;
