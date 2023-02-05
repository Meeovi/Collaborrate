"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsWhereInput_1 = require("../../../inputs/SegmentsWhereInput");
let DeleteManySegmentsArgs = class DeleteManySegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereInput_1.SegmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsWhereInput_1.SegmentsWhereInput)
], DeleteManySegmentsArgs.prototype, "where", void 0);
DeleteManySegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySegmentsArgs);
exports.DeleteManySegmentsArgs = DeleteManySegmentsArgs;
