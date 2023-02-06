"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSegmentsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let FindUniqueSegmentsOrThrowArgs = class FindUniqueSegmentsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], FindUniqueSegmentsOrThrowArgs.prototype, "where", void 0);
FindUniqueSegmentsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSegmentsOrThrowArgs);
exports.FindUniqueSegmentsOrThrowArgs = FindUniqueSegmentsOrThrowArgs;
