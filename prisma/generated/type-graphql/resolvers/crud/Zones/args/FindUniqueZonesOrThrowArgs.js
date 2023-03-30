"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueZonesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
let FindUniqueZonesOrThrowArgs = class FindUniqueZonesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], FindUniqueZonesOrThrowArgs.prototype, "where", void 0);
FindUniqueZonesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueZonesOrThrowArgs);
exports.FindUniqueZonesOrThrowArgs = FindUniqueZonesOrThrowArgs;
