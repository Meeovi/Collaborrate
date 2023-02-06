"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
let DeleteOneManufacturerArgs = class DeleteOneManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], DeleteOneManufacturerArgs.prototype, "where", void 0);
DeleteOneManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneManufacturerArgs);
exports.DeleteOneManufacturerArgs = DeleteOneManufacturerArgs;
