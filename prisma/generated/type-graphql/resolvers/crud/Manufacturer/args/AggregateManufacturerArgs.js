"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerOrderByWithRelationInput_1 = require("../../../inputs/ManufacturerOrderByWithRelationInput");
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
const ManufacturerWhereUniqueInput_1 = require("../../../inputs/ManufacturerWhereUniqueInput");
let AggregateManufacturerArgs = class AggregateManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], AggregateManufacturerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerOrderByWithRelationInput_1.ManufacturerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateManufacturerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereUniqueInput_1.ManufacturerWhereUniqueInput)
], AggregateManufacturerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateManufacturerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateManufacturerArgs.prototype, "skip", void 0);
AggregateManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateManufacturerArgs);
exports.AggregateManufacturerArgs = AggregateManufacturerArgs;
