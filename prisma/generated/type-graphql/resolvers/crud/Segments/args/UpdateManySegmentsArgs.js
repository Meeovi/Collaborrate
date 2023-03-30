"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsUpdateManyMutationInput_1 = require("../../../inputs/SegmentsUpdateManyMutationInput");
const SegmentsWhereInput_1 = require("../../../inputs/SegmentsWhereInput");
let UpdateManySegmentsArgs = class UpdateManySegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsUpdateManyMutationInput_1.SegmentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsUpdateManyMutationInput_1.SegmentsUpdateManyMutationInput)
], UpdateManySegmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereInput_1.SegmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsWhereInput_1.SegmentsWhereInput)
], UpdateManySegmentsArgs.prototype, "where", void 0);
UpdateManySegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySegmentsArgs);
exports.UpdateManySegmentsArgs = UpdateManySegmentsArgs;
