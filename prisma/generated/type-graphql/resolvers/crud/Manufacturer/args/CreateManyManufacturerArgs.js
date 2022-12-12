"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerCreateManyInput_1 = require("../../../inputs/ManufacturerCreateManyInput");
let CreateManyManufacturerArgs = class CreateManyManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerCreateManyInput_1.ManufacturerCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyManufacturerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyManufacturerArgs.prototype, "skipDuplicates", void 0);
CreateManyManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyManufacturerArgs);
exports.CreateManyManufacturerArgs = CreateManyManufacturerArgs;
