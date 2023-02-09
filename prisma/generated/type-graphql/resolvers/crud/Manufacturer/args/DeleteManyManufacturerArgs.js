"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
let DeleteManyManufacturerArgs = class DeleteManyManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], DeleteManyManufacturerArgs.prototype, "where", void 0);
DeleteManyManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyManufacturerArgs);
exports.DeleteManyManufacturerArgs = DeleteManyManufacturerArgs;
