"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
let FindUniqueZonesArgs = class FindUniqueZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], FindUniqueZonesArgs.prototype, "where", void 0);
FindUniqueZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueZonesArgs);
exports.FindUniqueZonesArgs = FindUniqueZonesArgs;
