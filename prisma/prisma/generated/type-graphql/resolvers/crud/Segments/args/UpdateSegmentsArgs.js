"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsUpdateInput_1 = require("../../../inputs/SegmentsUpdateInput");
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let UpdateSegmentsArgs = class UpdateSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsUpdateInput_1.SegmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsUpdateInput_1.SegmentsUpdateInput)
], UpdateSegmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], UpdateSegmentsArgs.prototype, "where", void 0);
UpdateSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSegmentsArgs);
exports.UpdateSegmentsArgs = UpdateSegmentsArgs;
