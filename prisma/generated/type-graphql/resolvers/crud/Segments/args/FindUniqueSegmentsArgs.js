"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let FindUniqueSegmentsArgs = class FindUniqueSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], FindUniqueSegmentsArgs.prototype, "where", void 0);
FindUniqueSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSegmentsArgs);
exports.FindUniqueSegmentsArgs = FindUniqueSegmentsArgs;
