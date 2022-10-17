"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let DeleteOneSegmentsArgs = class DeleteOneSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], DeleteOneSegmentsArgs.prototype, "where", void 0);
DeleteOneSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSegmentsArgs);
exports.DeleteOneSegmentsArgs = DeleteOneSegmentsArgs;
