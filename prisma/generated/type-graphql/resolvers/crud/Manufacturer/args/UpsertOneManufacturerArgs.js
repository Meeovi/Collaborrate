"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerCreateInput_1 = require("../../../inputs/ManufacturerCreateInput");
const ManufacturerUpdateInput_1 = require("../../../inputs/ManufacturerUpdateInput");
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
let UpsertOneManufacturerArgs = class UpsertOneManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], UpsertOneManufacturerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerCreateInput_1.ManufacturerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerCreateInput_1.ManufacturerCreateInput)
], UpsertOneManufacturerArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerUpdateInput_1.ManufacturerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ManufacturerUpdateInput_1.ManufacturerUpdateInput)
], UpsertOneManufacturerArgs.prototype, "update", void 0);
UpsertOneManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneManufacturerArgs);
exports.UpsertOneManufacturerArgs = UpsertOneManufacturerArgs;
